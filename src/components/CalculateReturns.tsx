import {
    ArrowRightIcon,
    CheckCircleIcon,
    CalendarIcon,
    PercentIcon,
} from "lucide-react";

export default function CalculateReturns() {
    return (
        <div
            id="calc"
            className="max-w-md w-full bg-linear-to-b from-[#020817] to-[#0a1023] text-[#f8fafc] rounded-xl shadow-2xl overflow-hidden border border-[#1e293b]"
        >
            <div className="p-6 space-y-6">
                {/* Investment Amount Section */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <label
                            htmlFor="amount"
                            className="text-sm font-medium flex items-center"
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
                            type="text"
                            id="amount"
                            placeholder="Enter the amount"
                            name="amount"
                            min="1000"
                            maxLength={15}
                            value="20,000"
                            className="w-full h-12 bg-[#0f172a]/50 border border-[#1e293b] rounded-lg pl-8 pr-3 focus:outline-none focus:ring-1 focus:ring-[#22c55e] focus:border-[#22c55e] transition-all"
                        />
                    </div>
                    <p className="text-xs text-[#94a3b8] pl-1 italic">
                        Twenty Thousand Rupees Only
                    </p>
                </div>
                {/* Tenure Options Section */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <label className="text-sm font-medium flex items-center">
                            <CalendarIcon className="w-4 h-4 text-[#22c55e] mr-1.5" />
                            Tenure
                        </label>
                    </div>
                    <div
                        role="radiogroup"
                        aria-required="false"
                        dir="ltr"
                        id="tenure"
                        tabIndex={0}
                        className="grid grid-cols-2 gap-3"
                    >
                        {/* Option 1 - Selected */}
                        <div className="relative group">
                            <input
                                type="radio"
                                aria-hidden="true"
                                name="tenure"
                                id="tenure-1"
                                value="cmei96vcw000cm07r4ulk6v6w"
                                checked
                                className="sr-only"
                            />
                            <label
                                htmlFor="tenure-1"
                                className="flex flex-col items-center justify-between bg-[#0f172a]/80 border-2 border-[#22c55e] rounded-lg p-4 h-full cursor-pointer transition-all hover:bg-[#0f172a] group-hover:shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                            >
                                <div className="absolute top-3 left-3">
                                    <CheckCircleIcon className="h-4 w-4 text-[#22c55e]" />
                                </div>
                                <span className="py-1 font-bold text-center mt-2 text-[#f8fafc]">
                                    6.25%
                                    <span className="text-xs font-normal text-[#94a3b8] ml-1">
                                        p.a.
                                    </span>
                                </span>
                                <span className="font-medium text-sm text-[#94a3b8]">
                                    6M 1D
                                </span>
                            </label>
                        </div>
                        {/* Option 2 - With Badge */}
                        <div className="relative group">
                            <input
                                type="radio"
                                aria-hidden="true"
                                name="tenure"
                                id="tenure-2"
                                value="cmei9cck3000em07rzx5zgclk"
                                className="sr-only"
                            />
                            <label
                                htmlFor="tenure-2"
                                className="flex flex-col items-center justify-between bg-[#0f172a]/50 border-2 border-[#1e293b] rounded-lg p-4 h-full cursor-pointer transition-all hover:bg-[#0f172a] group-hover:border-[#22c55e]/50 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.1)]"
                            >
                                <div className="absolute -top-2 -right-2">
                                    <div className="inline-flex items-center bg-[#22c55e] px-2.5 py-0.5 text-[11px] font-bold text-[#0f172a] rounded-full shadow-lg">
                                        Max Return
                                    </div>
                                </div>
                                <span className="py-1 font-bold text-center mt-2 text-[#f8fafc]">
                                    6.75%
                                    <span className="text-xs font-normal text-[#94a3b8] ml-1">
                                        p.a.
                                    </span>
                                </span>
                                <span className="font-medium text-sm text-[#94a3b8]">
                                    501D
                                </span>
                            </label>
                        </div>
                        {/* Option 3 */}
                        <div className="relative group">
                            <input
                                type="radio"
                                aria-hidden="true"
                                name="tenure"
                                id="tenure-3"
                                value="cmei9fzy700up148zmaomfl30"
                                className="sr-only"
                            />
                            <label
                                htmlFor="tenure-3"
                                className="flex flex-col items-center justify-between bg-[#0f172a]/50 border-2 border-[#1e293b] rounded-lg p-4 h-full cursor-pointer transition-all hover:bg-[#0f172a] group-hover:border-[#22c55e]/50 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.1)]"
                            >
                                <span className="py-1 font-bold text-center mt-2 text-[#f8fafc]">
                                    6.75%
                                    <span className="text-xs font-normal text-[#94a3b8] ml-1">
                                        p.a.
                                    </span>
                                </span>
                                <span className="font-medium text-sm text-[#94a3b8]">
                                    701D
                                </span>
                            </label>
                        </div>
                        {/* Option 4 */}
                        <div className="relative group">
                            <input
                                type="radio"
                                aria-hidden="true"
                                name="tenure"
                                id="tenure-4"
                                value="cmei9khci00ur148zdjgea3ro"
                                className="sr-only"
                            />
                            <label
                                htmlFor="tenure-4"
                                className="flex flex-col items-center justify-between bg-[#0f172a]/50 border-2 border-[#1e293b] rounded-lg p-4 h-full cursor-pointer transition-all hover:bg-[#0f172a] group-hover:border-[#22c55e]/50 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.1)]"
                            >
                                <span className="py-1 font-bold text-center mt-2 text-[#f8fafc]">
                                    6.75%
                                    <span className="text-xs font-normal text-[#94a3b8] ml-1">
                                        p.a.
                                    </span>
                                </span>
                                <span className="font-medium text-sm text-[#94a3b8]">
                                    1001D
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                {/* Options Section */}
                <div className="space-y-4 bg-[#0f172a]/30 p-4 rounded-lg border border-[#1e293b]">
                    <div className="flex items-center justify-between gap-3">
                        <label
                            htmlFor="at-maturity"
                            className="text-sm font-medium whitespace-nowrap flex items-center"
                        >
                            <span className="w-2 h-2 bg-[#22c55e] rounded-full mr-2"></span>
                            Action at Maturity
                        </label>
                        <select
                            id="at-maturity"
                            className="flex-1 h-10 bg-[#0f172a] border border-[#1e293b] rounded-lg px-3 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#22c55e] transition-all"
                        >
                            <option value="payout">Payout</option>
                        </select>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <label
                            htmlFor="interest-payout-frequency"
                            className="text-sm font-medium whitespace-nowrap flex items-center"
                        >
                            <span className="w-2 h-2 bg-[#22c55e] rounded-full mr-2"></span>
                            Interest Payout
                        </label>
                        <select
                            id="interest-payout-frequency"
                            className="flex-1 h-10 bg-[#0f172a] border border-[#1e293b] rounded-lg px-3 text-sm appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#22c55e] transition-all"
                        >
                            <option value="maturity">Maturity</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                    </div>
                    {/* Senior Citizen Toggle */}
                    <div className="flex items-center py-1">
                        <button
                            type="button"
                            role="switch"
                            aria-checked="false"
                            id="senior-citizen"
                            className="relative inline-flex h-6 w-11 items-center rounded-full bg-[#1e293b] transition-colors focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:ring-offset-2 focus:ring-offset-[#020817]"
                        >
                            <span className="inline-block h-5 w-5 transform rounded-full bg-[#0f172a] shadow-md transition-transform duration-200 ease-in-out"></span>
                        </button>
                        <label
                            htmlFor="senior-citizen"
                            className="ml-3 text-sm cursor-pointer"
                        >
                            Senior Citizen
                        </label>
                        <span className="ml-2 text-xs text-[#94a3b8] px-1.5 py-0.5 bg-[#1e293b] rounded-full">
                            +0.5%
                        </span>
                    </div>
                </div>
                {/* Results Section */}
                <div className="bg-linear-to-r from-[#0f172a]/80 to-[#0f172a]/60 rounded-lg border border-[#1e293b] p-4">
                    <div className="text-xs uppercase tracking-wider text-[#94a3b8] mb-3 font-medium">
                        Estimated Returns
                    </div>
                    <div className="flex justify-between">
                        <div className="space-y-1">
                            <div className="text-xs text-[#94a3b8]">
                                Maturity Amount
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-sm mr-1 text-[#94a3b8]">
                                    ₹
                                </span>
                                <span className="text-2xl font-bold text-[#22c55e]">
                                    20,633
                                </span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-xs text-[#94a3b8]">
                                Total Gains
                            </div>
                            <div className="flex items-baseline">
                                <span className="text-sm mr-1 text-[#94a3b8]">
                                    ₹
                                </span>
                                <span className="text-2xl font-bold text-[#22c55e]">
                                    633
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* Visual indicator */}
                    <div className="mt-3 h-1.5 w-full bg-[#1e293b] rounded-full overflow-hidden">
                        <div
                            className="h-full bg-[#22c55e] rounded-full"
                            style={{
                                width: "3.2%",
                            }}
                        ></div>
                    </div>
                    <div className="flex justify-between mt-1">
                        <span className="text-xs text-[#94a3b8]">
                            Principal
                        </span>
                        <span className="text-xs text-[#94a3b8]">
                            +3.2% growth
                        </span>
                    </div>
                </div>
            </div>
            {/* Hidden inputs for form data */}
            <div className="sr-only">
                <input
                    type="hidden"
                    name="fdId"
                    value="cmc8w1is3001lc8w0uqrdu542"
                />
                <input
                    type="hidden"
                    name="tenureNonCumulativeId"
                    value="cmei96vcw000cm07r4ulk6v6w"
                />
                <input type="hidden" name="atMaturity" value="payout" />
                <input type="hidden" name="isOnboard" value="undefined" />
                <input type="hidden" name="actionOnMaturity" value="Payout" />
                <input type="hidden" name="isSenior" value="false" />
            </div>
            {/* CTA Button */}
            <div className="px-6 py-6 border-t border-[#1e293b]">
                <a
                    href="/auth"
                    className="flex h-12 w-full items-center justify-center bg-linear-to-r from-[#22c55e] to-[#16a34a] text-white font-semibold rounded-lg px-4 py-2 transition-all hover:from-[#16a34a] hover:to-[#15803d] shadow-lg shadow-[#22c55e]/20 group"
                >
                    Sign Up to Book
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-center text-xs text-[#94a3b8] mt-3">
                    Secure investment with 100% capital protection
                </p>
            </div>
        </div>
    );
}
