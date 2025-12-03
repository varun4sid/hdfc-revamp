import type { Scheme } from "./types";

const CARD = {
    bankName: "Canara",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/canara.png",
    features: {
        interestRates: { min: 3.05, max: 7.05 },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 1000,
        compounding: "QUARTERLY",
        instantBooking: true,
        accountRequired: true,
    },
};

const RATES = [
    {
        tenureLabel: "7 days - 45 days",
        rate: { regular: 3.25, senior: 3.25 },
        range: { start: 0.25, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 90 days",
        rate: { regular: 4.25, senior: 4.25 },
        range: { start: 1.5, end: 3 },
    },
    {
        tenureLabel: "3 months - 6 months",
        rate: { regular: 4.5, senior: 4.5 },
        range: { start: 3, end: 6 },
    },
    {
        tenureLabel: "6 months - 9 months",
        rate: { regular: 5.5, senior: 6.0 },
        range: { start: 6, end: 9 },
    },
    {
        tenureLabel: "9 months - 12 months",
        rate: { regular: 5.75, senior: 6.25 },
        range: { start: 9, end: 12 },
    },
    {
        tenureLabel: "12 months - 15 months",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 12, end: 15 },
    },
    {
        tenureLabel: "444 days",
        rate: { regular: 6.5, senior: 7.0 },
        range: { start: 15, end: 15 },
    },
    {
        tenureLabel: "15 months - 24 months",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 15, end: 24 },
    },
    {
        tenureLabel: "24 months - 120 months",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 24, end: 120 },
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
        rate: { regular: 6.5, senior: 7 },
        duration: "444D",
        quarters: 5,
        hasBadge: true,
    },
    {
        id: 2,
        rate: { regular: 6.25, senior: 6.75 },
        duration: "3Y",
        quarters: 12,
    },
    {
        id: 3,
        rate: { regular: 6.25, senior: 6.75 },
        duration: "5Y",
        quarters: 20,
    },
];

const FEATURES = [
    "The Canara FD tenures range from 7 days to 10 years.",
    "The minimum deposit amount needed to open an FD in Canara is Rs 1000 with no limit on the maximum deposit.",
    "Senior citizens can avail of a 0.50% extra Canara FD interest rates for an amount exceeding Rs.10,000.",
    "Auto-renewal facility is available on the deposit, on maturity.",
    "TDS is deducted at the prevalent rate at source if Form 15G/15H is not submitted.",
];

const CANARA = { CARD, RATES, SCHEMES, FEATURES };

export { CANARA };
