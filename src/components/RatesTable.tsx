import {
    TrendingUpIcon,
    AwardIcon,
    CalendarIcon,
    PercentIcon,
    LineChartIcon,
} from "lucide-react";

import { useState } from "react";
import RatesGraph from "./RatesGraph";

export default function RatesTable() {
    const [isSeniorCitizen, setIsSeniorCitizen] = useState(false);
    const [viewMode, setViewMode] = useState<"table" | "graph">("table");
    if (viewMode === "graph") {
        return <RatesGraph onViewChange={() => setViewMode("table")} />;
    }
    return (
        <div className="flex w-full min-h-screen justify-center items-start py-12">
            <div className="relative w-full max-w-4xl mx-4">
                {/* Main Card */}
                <div className="bg-slate-900 text-slate-50 shadow-2xl border border-slate-700/50 rounded-3xl overflow-hidden">
                    {/* Header Section */}
                    <div className="relative px-8 py-8 bg-slate-800/50 border-b border-slate-700/50">
                        <div className="flex items-start justify-between">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-slate-700/50 rounded-2xl border border-slate-600/30">
                                    <TrendingUpIcon className="w-8 h-8 text-slate-300" />
                                </div>
                                <div>
                                    <h1 className="text-3xl font-bold tracking-tight text-slate-100">
                                        HDFC Bank FD Rates
                                    </h1>
                                    <p className="text-slate-400 text-sm mt-2">
                                        Competitive interest rates for fixed
                                        deposits
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                {/* Graph View Button */}
                                <button
                                    onClick={() => setViewMode("graph")}
                                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors duration-200 border border-slate-600"
                                >
                                    <LineChartIcon className="w-4 h-4" />
                                    <span className="text-sm font-medium">
                                        Graph View
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
                                        aria-checked={isSeniorCitizen}
                                        onClick={() =>
                                            setIsSeniorCitizen(!isSeniorCitizen)
                                        }
                                        className={`relative inline-flex h-7 w-14 items-center rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 focus:ring-offset-slate-900 shadow-lg ${
                                            isSeniorCitizen
                                                ? "bg-slate-600"
                                                : "bg-slate-700"
                                        }`}
                                    >
                                        <span
                                            className={`inline-block h-5 w-5 transform rounded-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
                                                isSeniorCitizen
                                                    ? "translate-x-8"
                                                    : "translate-x-1"
                                            }`}
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Stats Bar */}
                    <div className="grid grid-cols-3 gap-4 px-8 py-6 bg-slate-800/50 border-b border-slate-700/50">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-green-500/10 rounded-lg">
                                <AwardIcon className="w-5 h-5 text-green-400" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">
                                    Best Rate
                                </p>
                                <p className="text-lg font-bold text-green-400">
                                    7.4%
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-700/50 rounded-lg">
                                <CalendarIcon className="w-5 h-5 text-slate-300" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">
                                    Best Tenure
                                </p>
                                <p className="text-lg font-bold text-slate-200">
                                    55 Months
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-slate-700/50 rounded-lg">
                                <PercentIcon className="w-5 h-5 text-slate-300" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">
                                    Min. Rate
                                </p>
                                <p className="text-lg font-bold text-slate-200">
                                    3.0%
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Table Section */}
                    <div className="p-8">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-700/50">
                                        <th className="pb-4 pr-6 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            Tenure Period
                                        </th>
                                        <th className="pb-4 pl-6 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                                            Interest Rate (p.a.)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-800/50">
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            7 - 29 Days
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            3.0%
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            30 - 45 Days
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            3.5%
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            61 - 89 Days
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            4.5%
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            6 Months 1 Days - 9 Months
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            5.75%
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            1 Year - 15 Months
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            6.6%
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            15 Months - 18 Months
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            7.1%
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            18 Months - 21 Months
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            7.25%
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            2 Years 1 Day - 2 Year 11 Months
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            7.0%
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            2 Years 11 Months - 35 Months
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            7.35%
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            3 Years 1 Day - 4 Years 7 Months
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            7.0%
                                        </td>
                                    </tr>
                                    <tr className="relative hover:bg-green-900/30 transition-all duration-200 bg-green-950/40 border-l-4 border-green-500">
                                        <td className="py-5 pr-6 text-sm font-bold flex items-center gap-2">
                                            <AwardIcon className="w-4 h-4 text-green-400" />
                                            4 Year 7 Months - 55 Months
                                            <span className="ml-2 px-2 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-xs text-green-400 font-semibold">
                                                BEST RATE
                                            </span>
                                        </td>
                                        <td className="py-5 pl-6 text-lg font-bold text-green-400">
                                            7.4%
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            4 Year 7 Months 1 Day - 5 Years
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            7.0%
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-slate-800/30 transition-all duration-200">
                                        <td className="py-4 pr-6 text-sm">
                                            5 Years 1 Day - 10 Years
                                        </td>
                                        <td className="py-4 pl-6 text-sm font-semibold">
                                            7.0%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
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
