import type { Scheme } from "./types";

const CARD = {
    bankName: "Bandhan",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/bandhan.png",
    features: {
        interestRates: { min: 2.95, max: 7.7 },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 5000,
        compounding: "QUARTERLY",
        instantBooking: true,
        accountRequired: true,
    },
};

const RATES = [
    {
        tenureLabel: "7 days - 30 days",
        rate: { regular: 2.95, senior: 3.7 },
        range: { start: 0.25, end: 1 },
    },
    {
        tenureLabel: "31 days - 2 months",
        rate: { regular: 3.45, senior: 4.2 },
        range: { start: 1, end: 2 },
    },
    {
        tenureLabel: "2 months - 12 months",
        rate: { regular: 4.2, senior: 4.95 },
        range: { start: 2, end: 12 },
    },
    {
        tenureLabel: "12 months - 24 months",
        rate: { regular: 7.0, senior: 7.5 },
        range: { start: 12, end: 24 },
    },
    {
        tenureLabel: "24 months - 36 months",
        rate: { regular: 7.2, senior: 7.7 },
        range: { start: 24, end: 36 },
        isBest: true,
    },
    {
        tenureLabel: "36 months - 60 months",
        rate: { regular: 7.0, senior: 7.5 },
        range: { start: 36, end: 60 },
    },
    {
        tenureLabel: "60 months - 120 months",
        rate: { regular: 5.85, senior: 6.6 },
        range: { start: 60, end: 120 },
    },
];

const SCHEMES: Scheme[] = [
    {
        id: 0,
        rate: { regular: 7.0, senior: 7.5 },
        duration: "1Y",
        quarters: 4,
    },
    {
        id: 1,
        rate: { regular: 7.2, senior: 7.7 },
        duration: "2Y",
        quarters: 8,
        hasBadge: true,
    },
    {
        id: 2,
        rate: { regular: 7.0, senior: 7.5 },
        duration: "3Y",
        quarters: 12,
    },
    {
        id: 3,
        rate: { regular: 7.0, senior: 7.5 },
        duration: "5Y",
        quarters: 20,
    },
];

const BANDHAN = { CARD, RATES, SCHEMES };

export { BANDHAN };
