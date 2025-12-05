import { CheckCircleIcon } from "lucide-react";
import { HDFC as BANK } from "../constants/hdfc";

function Features() {
    return (
        <div className="flex items-center justify-center p-8">
            <div className="w-full max-w-4xl">
                <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-800/50 overflow-hidden">
                    <div className="bg-linear-to-r from-slate-800/50 to-slate-900/50 px-8 py-8 border-b border-slate-800/50">
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <div className="absolute inset-0 bg-linear-to-br from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-50"></div>
                                <img
                                    src={BANK.CARD.bankLogo}
                                    alt={BANK.CARD.bankName + " logo"}
                                    className="relative h-16 w-16 object-cover rounded-2xl ring-2 ring-slate-700/50"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">
                                    {BANK.CARD.bankName} FD Interest Rates
                                </h2>
                                <p className="text-slate-400 text-sm mt-1">
                                    Competitive rates for your fixed deposits
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="feature-container">
                        <ul className="list-inside p-8 space-y-4">
                            {BANK.FEATURES.map((feature, index) => (
                                <li
                                    key={index}
                                    className="text-slate-300 text-m"
                                >
                                    <CheckCircleIcon className="inline-block w-5 h-5 mr-2 text-green-400 mb-1" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
