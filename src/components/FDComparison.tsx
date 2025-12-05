import {
    CheckCircleIcon,
    XCircleIcon,
    TrendingUpIcon,
    ShieldCheckIcon,
    PercentIcon,
} from "lucide-react";
import { useState } from "react";

import "./FDComparison.css";
import { UNITY } from "../constants/unity";
import { HDFC } from "../constants/hdfc";
import { SURYODAY } from "../constants/suryoday";
import { UTKARSH } from "../constants/utkarsh";
import type { Scheme } from "../constants/types";
import { getAmountString, getResults } from "../constants/utils";

export default function FDComparison() {
    const BANK_OPTIONS = [
        { name: "Unity", data: UNITY },
        { name: "Suryoday", data: SURYODAY },
        { name: "Utkarsh", data: UTKARSH },
    ];

    const [amount, setAmount] = useState(20000);
    const [selectedBankIndex, setSelectedBankIndex] = useState(0);
    const [bank1Scheme, setBank1Scheme] = useState<Scheme>(
        BANK_OPTIONS[0].data.SCHEMES[0]
    );
    const [bank2Scheme, setBank2Scheme] = useState<Scheme>(HDFC.SCHEMES[0]);

    const BANK1 = BANK_OPTIONS[selectedBankIndex].data;
    const BANK2 = HDFC;

    // Calculate returns for both banks
    const bank1Results = getResults(
        amount,
        bank1Scheme.rate.regular,
        bank1Scheme.quarters
    );
    const bank2Results = getResults(
        amount,
        bank2Scheme.rate.regular,
        bank2Scheme.quarters
    );

    const bank1Max = bank1Scheme.rate.regular;
    const bank2Max = bank2Scheme.rate.regular;
    const isBank1Higher = bank1Max > bank2Max;
    const isBank2Higher = bank2Max > bank1Max;
    const isTie = bank1Max === bank2Max;

    const isBank1MaturityHigher =
        bank1Results.maturityAmount > bank2Results.maturityAmount;
    const isBank2MaturityHigher =
        bank2Results.maturityAmount > bank1Results.maturityAmount;
    const isMaturityTie =
        bank1Results.maturityAmount === bank2Results.maturityAmount;

    const handleBankChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newIndex = parseInt(e.target.value);
        setSelectedBankIndex(newIndex);
        setBank1Scheme(BANK_OPTIONS[newIndex].data.SCHEMES[0]);
    };

    const handleBank1SchemeChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const schemeIndex = parseInt(e.target.value);
        setBank1Scheme(BANK1.SCHEMES[schemeIndex]);
    };

    const handleBank2SchemeChange = (
        e: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const schemeIndex = parseInt(e.target.value);
        setBank2Scheme(BANK2.SCHEMES[schemeIndex]);
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value));
    };

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
                {/* Amount Input Section */}
                <div className="bg-slate-900 shadow-2xl border-x border-slate-700 p-6">
                    <div className="max-w-md mx-auto space-y-3">
                        <div className="flex items-center justify-between">
                            <label
                                htmlFor="comparison-amount"
                                className="text-sm font-medium text-slate-200 flex items-center"
                            >
                                <PercentIcon className="w-4 h-4 text-[#22c55e] mr-1.5" />
                                Investment Amount
                            </label>
                            <span className="text-xs text-[#94a3b8] px-2 py-1 bg-[#1e293b]/50 rounded-full">
                                Min ₹1,000
                            </span>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <span className="text-sm text-[#94a3b8] font-medium">
                                    ₹
                                </span>
                            </div>
                            <input
                                type="number"
                                id="comparison-amount"
                                placeholder="Enter the amount"
                                name="amount"
                                min={1000}
                                maxLength={9}
                                max={30000000}
                                step={1}
                                value={amount}
                                onChange={handleAmountChange}
                                className="w-full h-12 bg-[#0f172a]/50 border border-[#1e293b] rounded-lg pl-8 pr-3 text-slate-200 focus:outline-none focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
                            />
                        </div>
                        <div className="text-xs text-[#94a3b8] pl-1 italic">
                            {amount < 1000 ? (
                                <p className="text-red-500">
                                    Min. deposit amount is ₹1,000
                                </p>
                            ) : amount > 30000000 ? (
                                <p className="text-red-500">
                                    Max. deposit amount is ₹3 Crores
                                </p>
                            ) : (
                                <p>{getAmountString(amount)}</p>
                            )}
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
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 text-green-400" />
                                                <select
                                                    value={selectedBankIndex}
                                                    onChange={handleBankChange}
                                                    className="w-full bg-[#0f172a]/80 border border-[#1e293b] text-slate-200 text-sm font-semibold rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all cursor-pointer"
                                                >
                                                    {BANK_OPTIONS.map(
                                                        (bank, idx) => (
                                                            <option
                                                                key={idx}
                                                                value={idx}
                                                            >
                                                                {bank.name} Bank
                                                            </option>
                                                        )
                                                    )}
                                                </select>
                                            </div>
                                            <select
                                                value={BANK1.SCHEMES.findIndex(
                                                    (s) =>
                                                        s.id === bank1Scheme.id
                                                )}
                                                onChange={
                                                    handleBank1SchemeChange
                                                }
                                                className="bg-[#0f172a]/80 border border-[#1e293b] text-slate-300 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all cursor-pointer"
                                            >
                                                {BANK1.SCHEMES.map(
                                                    (scheme, idx) => (
                                                        <option
                                                            key={scheme.id}
                                                            value={idx}
                                                        >
                                                            {scheme.duration} @{" "}
                                                            {
                                                                scheme.rate
                                                                    .regular
                                                            }
                                                            %
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        </div>
                                        <div className="absolute -top-0.5 right-4">
                                            <span className="px-3 py-1 bg-linear-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                                                RECOMMENDED
                                            </span>
                                        </div>
                                    </th>
                                    <th className="px-6 py-5 text-left">
                                        <div className="flex flex-col gap-3">
                                            <div className="flex items-center gap-2">
                                                <div className="w-5 h-5 text-slate-400" />
                                                <span className="text-sm font-semibold text-slate-300">
                                                    {BANK2.CARD.bankName} Bank
                                                </span>
                                            </div>
                                            <select
                                                value={BANK2.SCHEMES.findIndex(
                                                    (s) =>
                                                        s.id === bank2Scheme.id
                                                )}
                                                onChange={
                                                    handleBank2SchemeChange
                                                }
                                                className="bg-[#0f172a]/80 border border-[#1e293b] text-slate-300 text-xs rounded-lg px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all cursor-pointer"
                                            >
                                                {BANK2.SCHEMES.map(
                                                    (scheme, idx) => (
                                                        <option
                                                            key={scheme.id}
                                                            value={idx}
                                                        >
                                                            {scheme.duration} @{" "}
                                                            {
                                                                scheme.rate
                                                                    .regular
                                                            }
                                                            %
                                                        </option>
                                                    )
                                                )}
                                            </select>
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
                                        <div className="flex items-center gap-2 ">
                                            <span
                                                className={`${
                                                    isBank1Higher || isTie
                                                        ? "text-2xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                                                        : "text-2xl font-bold text-slate-400"
                                                }`}
                                            >
                                                {bank1Max}%
                                            </span>
                                            <span className="text-sm text-slate-400">
                                                p.a.
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`${
                                                    isBank2Higher || isTie
                                                        ? "text-2xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                                                        : "text-xl font-semibold text-slate-400"
                                                }`}
                                            >
                                                {bank2Max}%
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
                                        <span className="text-lg font-semibold text-slate-400">
                                            ₹{" "}
                                            {BANK1.CARD.features.minimumAmount}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="text-lg font-medium text-slate-400">
                                            ₹{" "}
                                            {BANK2.CARD.features.minimumAmount}
                                        </span>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-800/40 transition-all duration-200">
                                    <td className="px-6 py-5 font-medium text-slate-200">
                                        Instant Booking
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            {BANK1.CARD.features
                                                .instantBooking ? (
                                                <>
                                                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                                                    <span className="text-sm font-medium text-green-400">
                                                        Available
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <XCircleIcon className="w-6 h-6 text-red-400" />
                                                    <span className="text-sm font-medium text-slate-500">
                                                        Not Available
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            {BANK2.CARD.features
                                                .instantBooking ? (
                                                <>
                                                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                                                    <span className="text-sm font-medium text-green-400">
                                                        Available
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <XCircleIcon className="w-6 h-6 text-red-400" />
                                                    <span className="text-sm font-medium text-slate-500">
                                                        Not Available
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-800/40 transition-all duration-200">
                                    <td className="px-6 py-5 font-medium text-slate-200">
                                        Book FD Without Bank Account
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            {BANK1.CARD.features
                                                .accountRequired ? (
                                                <>
                                                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                                                    <span className="text-sm font-medium text-green-400">
                                                        Available
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <XCircleIcon className="w-6 h-6 text-red-400" />
                                                    <span className="text-sm font-medium text-slate-500">
                                                        Not Available
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            {BANK2.CARD.features
                                                .accountRequired ? (
                                                <>
                                                    <CheckCircleIcon className="w-6 h-6 text-green-400" />
                                                    <span className="text-sm font-medium text-green-400">
                                                        Available
                                                    </span>
                                                </>
                                            ) : (
                                                <>
                                                    <XCircleIcon className="w-6 h-6 text-red-400" />
                                                    <span className="text-sm font-medium text-slate-500">
                                                        Not Available
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-800/40 transition-all duration-200">
                                    <td className="px-6 py-5 font-medium text-slate-200 flex items-center gap-2">
                                        <TrendingUpIcon className="w-4 h-4 text-slate-400" />
                                        Amount at Maturity
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`${
                                                    isBank1MaturityHigher ||
                                                    isMaturityTie
                                                        ? "text-xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                                                        : "text-xl font-semibold text-slate-400"
                                                }`}
                                            >
                                                ₹{" "}
                                                {bank1Results.maturityAmount.toLocaleString(
                                                    "en-IN"
                                                )}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`${
                                                    isBank2MaturityHigher ||
                                                    isMaturityTie
                                                        ? "text-xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                                                        : "text-xl font-semibold text-slate-400"
                                                }`}
                                            >
                                                ₹{" "}
                                                {bank2Results.maturityAmount.toLocaleString(
                                                    "en-IN"
                                                )}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className="hover:bg-slate-800/40 transition-all duration-200">
                                    <td className="px-6 py-5 font-medium text-slate-200 flex items-center gap-2">
                                        <TrendingUpIcon className="w-4 h-4 text-slate-400" />
                                        Interest Gained
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`${
                                                    isBank1MaturityHigher ||
                                                    isMaturityTie
                                                        ? "text-xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                                                        : "text-xl font-semibold text-slate-400"
                                                }`}
                                            >
                                                ₹{" "}
                                                {bank1Results.interestEarned.toLocaleString(
                                                    "en-IN"
                                                )}
                                            </span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-2">
                                            <span
                                                className={`${
                                                    isBank2MaturityHigher ||
                                                    isMaturityTie
                                                        ? "text-xl font-bold bg-linear-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
                                                        : "text-xl font-semibold text-slate-400"
                                                }`}
                                            >
                                                ₹{" "}
                                                {bank2Results.interestEarned.toLocaleString(
                                                    "en-IN"
                                                )}
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
