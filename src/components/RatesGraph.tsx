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
import type { FC } from "react";
import data from "../constants/db";

interface RatesGraphProps {
    onViewChange: () => void;
    isSenior: boolean;
}

export default function RatesGraph({
    onViewChange,
    isSenior,
}: RatesGraphProps) {
    type Point = {
        tenureLabel: string;
        isBest?: boolean;
    };
    interface TooltipRenderProps {
        active?: boolean;
        payload?: Array<{ payload: Point; value?: number }>;
    }

    const CustomTooltip: FC<TooltipRenderProps> = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const item = payload[0];
            const p = item.payload;
            const value = item.value;
            return (
                <div className="bg-slate-800 border border-slate-700 rounded-lg p-3 shadow-xl">
                    <p className="text-slate-300 text-sm font-semibold mb-1">
                        {p.tenureLabel}
                    </p>
                    <p className="text-green-400 text-lg font-bold">
                        {value}% p.a.
                    </p>
                    {p.isBest && (
                        <p className="text-xs text-green-400 mt-1">
                            ⭐ Best Rate
                        </p>
                    )}
                </div>
            );
        }
        return null;
    };

    // derive displayRate based on isSenior flag
    const mapped = data.map((d) => ({
        ...d,
        displayRate: isSenior ? d.rate.senior : d.rate.regular,
    }));

    // compute tenures and consistent ticks for X axis (months)
    const tenures = mapped.map((m) => m.tenure);
    const minTenure = Math.min(...tenures);
    const maxTenure = Math.max(...tenures);

    function generateTicks(min: number, max: number) {
        const span = max - min;
        let step = 1;
        if (span > 72) step = 24;
        else if (span > 36)
            step = 16; // prefer 16-month intervals for medium-long spans
        else if (span > 24) step = 6;
        else if (span > 12) step = 3;

        const start = Math.ceil(min / step) * step;
        const end = Math.floor(max / step) * step;
        const ticks: number[] = [];
        for (let v = start; v <= end; v += step) ticks.push(v);
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
    const min = Math.min(...displayRates);
    const bestMapped =
        mapped.find((m) => m.displayRate === peak) ??
        mapped.find((m) => m.isBest) ??
        mapped[0];

    return (
        <div className="flex w-full min-h-screen justify-center items-start py-12 bg-slate-950">
            <div className="relative w-full max-w-6xl mx-4">
                <div className="bg-slate-900 text-slate-50 shadow-2xl border border-slate-700/50 rounded-3xl overflow-hidden">
                    {/* Header */}
                    <div className="relative px-8 py-8 bg-slate-800/50 border-b border-slate-700/50">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-700/50 rounded-2xl border border-slate-600/30">
                                    <TrendingUpIcon className="w-8 h-8 text-slate-300" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold tracking-tight text-slate-100">
                                        Interest Rate Trends
                                    </h1>
                                    <p className="text-slate-400 text-sm mt-2">
                                        Visualizing FD rates across different
                                        tenure periods
                                    </p>
                                </div>
                            </div>
                            {/* View Toggle Button */}
                            <button
                                onClick={onViewChange}
                                className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors duration-200 border border-slate-600"
                            >
                                <TableIcon className="w-4 h-4" />
                                <span className="text-sm font-medium">
                                    Table View
                                </span>
                            </button>
                        </div>
                    </div>
                    {/* Graph Section */}
                    <div className="p-8">
                        <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                            <ResponsiveContainer width="100%" height={500}>
                                <LineChart
                                    data={mapped}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 60,
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
                                        stroke="#94a3b8"
                                        label={{
                                            value: "Tenure (Months)",
                                            position: "insideBottom",
                                            offset: -10,
                                            style: {
                                                fill: "#94a3b8",
                                                fontSize: 14,
                                                fontWeight: 600,
                                            },
                                        }}
                                        tick={{
                                            fill: "#94a3b8",
                                            fontSize: 12,
                                        }}
                                    />
                                    <YAxis
                                        stroke="#94a3b8"
                                        label={{
                                            value: "Interest Rate (% p.a.)",
                                            angle: -90,
                                            position: "insideLeft",
                                            style: {
                                                fill: "#94a3b8",
                                                fontSize: 14,
                                                fontWeight: 600,
                                            },
                                        }}
                                        tick={{
                                            fill: "#94a3b8",
                                            fontSize: 12,
                                        }}
                                        domain={[2, 8]}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Line
                                        type="stepAfter"
                                        dataKey="displayRate"
                                        stroke="#64748b"
                                        strokeWidth={3}
                                        dot={{
                                            fill: "#64748b",
                                            r: 5,
                                        }}
                                        activeDot={{
                                            r: 7,
                                            fill: "#22c55e",
                                        }}
                                    />
                                    {/* Highlight best rate dynamically */}
                                    {bestMapped && (
                                        <ReferenceDot
                                            x={bestMapped.tenure}
                                            y={bestMapped.displayRate}
                                            r={8}
                                            fill="#22c55e"
                                            stroke="#16a34a"
                                            strokeWidth={2}
                                        />
                                    )}
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                        {/* Key Insights */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-green-950/40 border border-green-500/30 rounded-xl p-4">
                                <p className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-2">
                                    Peak Rate
                                </p>
                                <p className="text-2xl font-bold text-green-400">
                                    {peak}%
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                    At {bestMapped?.tenureLabel}
                                </p>
                            </div>
                            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                                    Rate Range
                                </p>
                                <p className="text-2xl font-bold text-slate-200">
                                    {min}% - {peak}%
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                    Across all tenures
                                </p>
                            </div>
                            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4">
                                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider mb-2">
                                    Optimal Period
                                </p>
                                <p className="text-2xl font-bold text-slate-200">
                                    18-21 Months
                                </p>
                                <p className="text-xs text-slate-400 mt-1">
                                    For maximum returns
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Footer */}
                    <div className="px-8 py-6 bg-slate-800/30 border-t border-slate-700/50">
                        <p className="text-xs text-slate-400 text-center">
                            Interest rates are subject to change. Please verify
                            current rates with HDFC Bank before making any
                            investment decisions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
