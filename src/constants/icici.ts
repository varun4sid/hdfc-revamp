import type { Scheme } from "./types";

const CARD = {
    bankName: "ICICI",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/icici.png",
    features: {
        interestRates: { min: 2.75, max: 7.2 },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 10000,
        compounding: "QUARTERLY",
        instantBooking: true,
        accountRequired: true,
    },
};

const RATES = [
    {
        tenureLabel: "7 days - 45 days",
        rate: { regular: 2.75, senior: 3.25 },
        range: { start: 0.25, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 90 days",
        rate: { regular: 4.0, senior: 4.5 },
        range: { start: 1.5, end: 3 },
    },
    {
        tenureLabel: "91 days - 184 days",
        rate: { regular: 4.5, senior: 5.0 },
        range: { start: 3, end: 6 },
    },
    {
        tenureLabel: "185 days - 12 months",
        rate: { regular: 5.5, senior: 6.0 },
        range: { start: 6, end: 12 },
    },
    {
        tenureLabel: "12 months - 18 months",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 12, end: 18 },
    },
    {
        tenureLabel: "18 months - 24 months",
        rate: { regular: 6.4, senior: 6.9 },
        range: { start: 18, end: 24 },
    },
    {
        tenureLabel: "24 months - 60 months",
        rate: { regular: 6.6, senior: 7.2 },
        range: { start: 24, end: 60 },
        isBest: true,
    },
    {
        tenureLabel: "60 months - 120 months",
        rate: { regular: 6.6, senior: 7.1 },
        range: { start: 60, end: 120 },
    },
];

const SCHEMES: Scheme[] = [
    {
        id: 0,
        rate: { regular: 6.25, senior: 6.75 },
        duration: "1Y",
        quarters: 4,
    },
    {
        id: 1,
        rate: { regular: 6.4, senior: 6.9 },
        duration: "2Y",
        quarters: 8,
    },
    {
        id: 2,
        rate: { regular: 6.6, senior: 7.2 },
        duration: "3Y",
        quarters: 12,
        hasBadge: true,
    },
    {
        id: 3,
        rate: { regular: 6.6, senior: 7.2 },
        duration: "5Y",
        quarters: 20,
    },
];

const FEATURES = [
    "ICICI FD tenures range from 7 days to 10 years.",
    "The minimum deposit amount needed to open an FD in ICICI is Rs 10,000, with no limit on the maximum deposit.",
    "Senior citizens can avail of a 0.50% extra ICICI FD interest rate.",
    "Auto-renewal facility is available on the deposit, on maturity.",
    "TDS is deducted at the prevalent rate if Form 15G/15H is not submitted.",
];

const ICICI = { CARD, RATES, SCHEMES, FEATURES };

export { ICICI };
