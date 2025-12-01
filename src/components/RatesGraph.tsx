import { CARD, RATES } from "../constants/sbi";

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import { TrendingUpIcon, TableIcon } from "lucide-react";
import { useState, type FC } from "react";
import type {
    DotRenderProps,
    Point,
    RatesGraphProps,
    TooltipRenderProps,
} from "../constants/types";

export default function RatesGraph({
    onViewChange,
    isSenior,
    setIsSenior,
}: RatesGraphProps) {
    const [showHighlight, setShowHighlight] = useState(false);

    const mappedRanges = RATES.map((d, i) => ({
        ...d,
        displayRate: isSenior ? d.rate.senior : d.rate.regular,
        rangeIndex: i,
    }));

    const data: Point[] = mappedRanges
        .flatMap((r) => [
            {
                tenure: r.range.start,
                tenureLabel: r.tenureLabel,
                displayRate: r.displayRate,
                isBest: r.isBest,
                rangeIndex: r.rangeIndex,
            },
            {
                tenure: r.range.end,
                tenureLabel: r.tenureLabel,
                displayRate: r.displayRate,
                isBest: r.isBest,
                rangeIndex: r.rangeIndex,
            },
        ])
        .sort((a, b) => a.tenure - b.tenure);

    // compute tenures and consistent ticks for X axis (months)
    const tenures = data.map((m) => m.tenure);
    const minTenure = Math.min(...tenures);
    const maxTenure = Math.max(...tenures);

    const ticks = generateTicks(minTenure, maxTenure);

    const displayRates = mappedRanges.map((m) => m.displayRate);
    const peak = Math.max(...displayRates);
    const min = Math.min(...displayRates);
    const bestRange =
        mappedRanges.find((m) => m.displayRate === peak) ??
        mappedRanges.find((m) => m.isBest);

    const CustomTooltip: FC<TooltipRenderProps> = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const item = payload[0];
            const p = item.payload;
            const value = item.value;
            return (
                <div className="bg-slate-800 border border-slate-400 rounded-lg p-3 shadow-xl">
                    <p className="text-slate-300 text-sm font-semibold mb-1">
                        {p.tenureLabel}
                    </p>
                    <p className="text-green-400 text-lg font-bold">
                        {value}% p.a.
                    </p>
                    {(() => {
                        const isCurrentBest =
                            p.rangeIndex === bestRange?.rangeIndex ||
                            p.displayRate === peak;
                        return (
                            isCurrentBest && (
                                <p className="text-xs text-green-400 mt-1">
                                    ⭐ Best Rate
                                </p>
                            )
                        );
                    })()}
                </div>
            );
        }
        return null;
    };

    return (
        <div className="flex w-full min-h-screen justify-center items-start py-12">
            <div className="relative w-full max-w-4xl mx-4">
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
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={onViewChange}
                                    className="flex cursor-pointer items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors duration-200 border border-slate-600"
                                >
                                    <TableIcon className="w-4 h-4" />
                                    <span className="text-sm font-medium">
                                        Table View
                                    </span>
                                </button>
                                {/* Toggle Switch */}
                                <div className="flex flex-col items-end gap-2">
                                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                                        Senior Citizen
                                    </span>
                                    <button
                                        type="button"
                                        role="switch"
                                        aria-checked={isSenior}
                                        onClick={() => {
                                            setShowHighlight(false);
                                            setIsSenior(!isSenior);
                                        }}
                                        className={`relative inline-flex h-7 w-14 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg ${
                                            isSenior
                                                ? "bg-slate-600"
                                                : "bg-slate-700"
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                                                isSenior
                                                    ? "translate-x-8"
                                                    : "translate-x-1"
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Graph Section */}
                    <div className="p-8">
                        <div className="bg-slate-800/30 rounded-2xl p-6 border border-slate-700/50">
                            <ResponsiveContainer width="100%" height={500}>
                                <LineChart
                                    data={data}
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
                                        tick={{ fill: "#94a3b8", fontSize: 12 }}
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
                                        tick={{ fill: "#94a3b8", fontSize: 12 }}
                                        domain={[2, 8]}
                                    />

                                    <Tooltip
                                        content={<CustomTooltip />}
                                        cursor={{
                                            stroke: "#22c55e",
                                            strokeWidth: 1,
                                            opacity: 0.2,
                                        }}
                                    />

                                    <Line
                                        key={`line-${isSenior ? "sen" : "reg"}`}
                                        type="stepAfter"
                                        dataKey="displayRate"
                                        stroke="#64748b"
                                        strokeWidth={3}
                                        dot={(dotProps: DotRenderProps) => {
                                            const p = dotProps.payload;
                                            if (!p || p.rangeIndex == null)
                                                return null;
                                            const r =
                                                mappedRanges[p.rangeIndex];
                                            // hide dot for start-of-range points
                                            if (p.tenure === r.range.start)
                                                return null;
                                            return (
                                                <circle
                                                    cx={dotProps.cx}
                                                    cy={dotProps.cy}
                                                    r={5}
                                                    fill="#64748b"
                                                />
                                            );
                                        }}
                                        activeDot={(
                                            dotProps: DotRenderProps
                                        ) => {
                                            const p = dotProps.payload;
                                            if (!p || p.rangeIndex == null)
                                                return null;
                                            const r =
                                                mappedRanges[p.rangeIndex];
                                            if (p.tenure === r.range.start)
                                                return null;
                                            return (
                                                <circle
                                                    cx={dotProps.cx}
                                                    cy={dotProps.cy}
                                                    r={7}
                                                    fill="#22c55e"
                                                />
                                            );
                                        }}
                                        animationDuration={2000}
                                        onAnimationEnd={() =>
                                            setShowHighlight(true)
                                        }
                                    />

                                    <Line
                                        // force remount when highlighting target changes
                                        key={`highlight-${
                                            isSenior ? "sen" : "reg"
                                        }-${peak}`}
                                        data={data.map((d) => ({
                                            ...d,
                                            displayRate:
                                                d.displayRate === peak
                                                    ? d.displayRate
                                                    : null,
                                        }))}
                                        type="stepAfter"
                                        dataKey={"displayRate"}
                                        stroke="#22c55e"
                                        strokeWidth={3}
                                        dot={false}
                                        activeDot={false}
                                        isAnimationActive={showHighlight}
                                        animationBegin={2000}
                                    />
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
                                    At {bestRange?.tenureLabel}
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
                                    {bestRange?.tenureLabel}
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
                            current rates with {CARD.bankName} before making any
                            investment decisions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

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
