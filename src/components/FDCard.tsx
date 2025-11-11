import {
    TrendingUpIcon,
    ClockIcon,
    IndianRupeeIcon,
    HistoryIcon,
} from "lucide-react";

export default function FDCard() {
    const features = [
        {
            icon: TrendingUpIcon,
            title: "3.0% - 7.90%",
            description: "Interest rates",
            gradient: "from-emerald-500 to-green-600",
        },
        {
            icon: ClockIcon,
            title: "7 days - 10 Years",
            description: "Time Period",
            gradient: "from-green-500 to-lime-600",
        },
        {
            icon: IndianRupeeIcon,
            title: "5,000 - No Limit",
            description: "Min. - Max amount",
            gradient: "from-teal-500 to-emerald-600",
        },
        {
            icon: HistoryIcon,
            title: "QUARTERLY",
            description: "Compounding",
            gradient: "from-green-600 to-cyan-600",
        },
    ];
    return (
        <div className=" flex items-center justify-center p-8">
            <div className="w-full max-w-4xl">
                <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-800/50 overflow-hidden">
                    <div className="bg-linear-to-r from-slate-800/50 to-slate-900/50 px-8 py-8 border-b border-slate-800/50">
                        <div className="flex items-center gap-5">
                            <div className="relative">
                                <div className="absolute inset-0 bg-linear-to-br from-green-500 to-emerald-500 rounded-2xl blur-lg opacity-50"></div>
                                <img
                                    src="https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/hdfc.png"
                                    alt="HDFC logo"
                                    className="relative h-16 w-16 object-cover rounded-2xl ring-2 ring-slate-700/50"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-white tracking-tight">
                                    HDFC FD Interest Rates
                                </h2>
                                <p className="text-slate-400 text-sm mt-1">
                                    Competitive rates for your fixed deposits
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/50 hover:-translate-y-1"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div
                                                className={`relative shrink-0 w-14 h-14 rounded-xl bg-linear-to-br ${feature.gradient} p-0.5 transition-transform duration-300 group-hover:scale-110`}
                                            >
                                                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
                                                    <Icon
                                                        className="h-6 w-6 text-white"
                                                        strokeWidth={2.5}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-slate-100">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-sm text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
