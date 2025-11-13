import {
    CheckCircleIcon,
    XCircleIcon,
    TrendingUpIcon,
    ShieldCheckIcon,
} from "lucide-react";

import "./FDComparison.css";

export default function FDComparison() {
    return (
        <div className="min-h-screen w-full bg-linear-to-br  flex items-start justify-center p-4 sm:p-8">
            <div className="w-full max-w-5xl">
                {/* Header */}
                <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-50 shadow-2xl border border-slate-700 rounded-t-3xl overflow-hidden">
                    <div className="p-8 sm:p-10 relative">
                        <div className="absolute inset-0 bg-linear-to-r from-green-500/5 to-blue-500/5"></div>
                        <div className="relative">
                            <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2 bg-linear-to-r from-slate-50 to-slate-300 bg-clip-text text-transparent">
                                Fixed Deposit Comparison
                            </h3>
                            <p className="text-slate-400 text-sm sm:text-base">
                                Compare features and find the best FD rates for
                                your investment
                            </p>
                        </div>
                    </div>
                </div>
                {/* Table Container */}
                <div className="bg-slate-900 shadow-2xl border-x border-slate-700 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-700 bg-slate-800/50">
                                    <th className="px-6 py-5 text-left text-sm font-semibold text-slate-300">
                                        Features
                                    </th>
                                    <th className="px-6 py-5 text-left relative">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 text-green-400" />
                                            <span className="text-sm font-semibold text-slate-200">
                                                Unity Bank
                                            </span>
                                        </div>
                                        <div className="absolute -top-0.5 right-4">
                                            <span className="px-3 py-1 bg-linear-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                                                RECOMMENDED
                                            </span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-5 text-left">
                                        <div className="flex items-center gap-2">
                                            <div className="w-5 h-5 text-slate-400" />
                                            <span className="text-sm font-semibold text-slate-300">
                                                HDFC Bank
                                            </span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                <tr className="hover:bg-slate-800/40 transition-all duration-200 group">
                                    <td className="px-6 py-5 font-medium text-slate-200 flex items-center gap-2">
                                        <TrendingUpIcon className="w-4 h-4 text-slate-400 group-hover:text-green-400 transition-colors" />
                                        Interest Rate
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                                                8.25%
                                            </span>
                                            <span className="text-sm text-slate-400">
                                                p.a.
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xl font-semibold text-slate-400">
                                                7.9%
                                            </span>
                                            <span className="text-sm text-slate-500">
                                                p.a.
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-800/40 transition-all duration-200">
                                    <td className="px-6 py-5 font-medium text-slate-200">
                                        Minimum Deposit
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-lg font-semibold text-green-400">
                                            ₹ 1,000
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-lg font-medium text-slate-400">
                                            ₹ 5,000
                                        </span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-800/40 transition-all duration-200">
                                    <td className="px-6 py-5 font-medium text-slate-200">
                                        Instant Booking
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <CheckCircleIcon className="w-6 h-6 text-green-400" />
                                            <span className="text-sm font-medium text-green-400">
                                                Available
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <XCircleIcon className="w-6 h-6 text-red-400" />
                                            <span className="text-sm font-medium text-slate-500">
                                                Not Available
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-800/40 transition-all duration-200">
                                    <td className="px-6 py-5 font-medium text-slate-200">
                                        Book FD Without Bank Account
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <CheckCircleIcon className="w-6 h-6 text-green-400" />
                                            <span className="text-sm font-medium text-green-400">
                                                Available
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <XCircleIcon className="w-6 h-6 text-red-400" />
                                            <span className="text-sm font-medium text-slate-500">
                                                Not Available
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-800/40 transition-all duration-200">
                                    <td className="px-6 py-5 font-medium text-slate-200 flex items-center gap-2">
                                        <ShieldCheckIcon className="w-4 h-4 text-slate-400" />
                                        RBI Insurance
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm font-medium text-slate-300">
                                            Insured up to ₹5L
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-sm font-medium text-slate-300">
                                            Insured up to ₹5L
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* Footer with CTA */}
                <div className="bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-b-3xl overflow-hidden shadow-2xl">
                    <div className="p-8 flex justify-center">
                        <a
                            href="/fixed-deposit/hdfc-bank-fd-rates#heroSection"
                            className="inline-block animate-slidein"
                        >
                            <button className="group relative px-10 py-4 bg-linear-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white font-bold text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    Book Your FD Now
                                    <TrendingUpIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <div className="absolute inset-0 shimmer-overlay"></div>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
