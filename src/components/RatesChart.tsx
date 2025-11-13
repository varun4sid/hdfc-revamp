import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    ReferenceDot,
} from "recharts";
import { TrendingUpIcon, TableIcon } from "lucide-react";
import data from "../constants/db";

interface RatesChartProps {
    onViewChange?: () => void;
    isSenior?: boolean;
}

export default function RatesChart({
    onViewChange,
    isSenior = false,
}: RatesChartProps) {
    // map data to include displayRate based on senior flag
    const mapped = data.map((d) => ({
        ...d,
        displayRate: isSenior ? d.rate.senior : d.rate.regular,
    }));

    const tenures = mapped.map((m) => m.tenure);
    const minTenure = Math.min(...tenures);
    const maxTenure = Math.max(...tenures);

    // generate reasonable ticks (months) for X axis
    // generate consistent ticks for X axis
    // Rule: choose a fixed sensible step depending on the span:
    // - span > 60 months => 12-month ticks (years)
    // - span > 24 months => 6-month ticks
    // - span > 12 months => 3-month ticks
    // - otherwise 1-month ticks
    function generateTicks(min: number, max: number) {
        const span = max - min;
        // prefer 16-month interval for longer spans per request
        let step = 1;
        if (span > 72) step = 24; // multi-year: 2-year steps
        else if (span > 36) step = 16; // ~1.5 year steps (try 16)
        else if (span > 24) step = 6; // 6-month steps
        else if (span > 12) step = 3; // quarter steps

        const start = Math.ceil(min / step) * step; // start at or after min
        const end = Math.floor(max / step) * step; // end at or before max
        const ticks: number[] = [];
        for (let v = start; v <= end; v += step) ticks.push(v);

        // If no ticks landed inside the domain (small spans), fall back to min and max
        if (ticks.length === 0) {
            const a = Math.floor(min);
            const b = Math.ceil(max);
            return Array.from(new Set([a, b])).sort((x, y) => x - y);
        }

        return ticks;
    }

    const ticks = generateTicks(minTenure, maxTenure);

    const displayRates = mapped.map((m) => m.displayRate);
    const peak = Math.max(...displayRates);
    const minRate = Math.min(...displayRates);
    const best =
        mapped.find((m) => m.displayRate === peak) ??
        mapped.find((m) => m.isBest) ??
        mapped[0];

    // tooltip
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const CustomTooltip = ({ active, payload }: any) => {
        if (active && payload && payload.length) {
            const p = payload[0].payload;
            return (
                <div className="bg-white text-slate-900 rounded-lg p-3 shadow-lg border">
                    <div className="text-sm font-semibold">{p.tenureLabel}</div>
                    <div className="text-xs text-slate-500">
                        Range: {p.range.start} - {p.range.end} months
                    </div>
                    <div className="mt-2 text-lg font-bold text-green-600">
                        {p.displayRate}% p.a.
                    </div>
                    {p.isBest && (
                        <div className="text-xs text-green-500 mt-1">
                            ⭐ Best Rate
                        </div>
                    )}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="w-full">
            <div className="bg-slate-900 text-slate-50 shadow-lg rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-700/50 rounded-md">
                            <TrendingUpIcon className="w-6 h-6 text-slate-200" />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Rates Chart</h3>
                            <p className="text-sm text-slate-400">
                                Tenure midpoints used for X axis (months)
                            </p>
                        </div>
                    </div>
                    {onViewChange && (
                        <button
                            onClick={onViewChange}
                            className="px-3 py-2 bg-slate-700 rounded-md"
                        >
                            <TableIcon className="w-4 h-4 text-white" />
                        </button>
                    )}
                </div>

                <div style={{ height: 420 }}>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                            data={mapped}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 40,
                            }}
                        >
                            <CartesianGrid
                                strokeDasharray="3 3"
                                stroke="#334155"
                            />
                            <XAxis
                                dataKey="tenure"
                                type="number"
                                domain={[
                                    Math.floor(minTenure),
                                    Math.ceil(maxTenure),
                                ]}
                                ticks={ticks}
                                tick={{ fill: "#94a3b8" }}
                                label={{
                                    value: "Tenure (months)",
                                    position: "insideBottom",
                                    offset: -10,
                                    style: { fill: "#94a3b8" },
                                }}
                            />
                            <YAxis
                                tick={{ fill: "#94a3b8" }}
                                domain={[
                                    Math.max(0, Math.floor(minRate - 1)),
                                    Math.ceil(peak + 1),
                                ]}
                                label={{
                                    value: "Interest Rate (% p.a.)",
                                    angle: -90,
                                    position: "insideLeft",
                                    style: { fill: "#94a3b8" },
                                }}
                            />
                            <Tooltip content={<CustomTooltip />} />
                            <Line
                                type="monotone"
                                dataKey="displayRate"
                                stroke="#64748b"
                                strokeWidth={3}
                                dot={{ r: 5 }}
                                activeDot={{ r: 7, fill: "#22c55e" }}
                            />
                            {best && (
                                <ReferenceDot
                                    x={best.tenure}
                                    y={best.displayRate}
                                    r={8}
                                    fill="#22c55e"
                                    stroke="#16a34a"
                                    strokeWidth={2}
                                />
                            )}
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
