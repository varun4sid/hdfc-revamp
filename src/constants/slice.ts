import type { Scheme } from "./types";

const CARD = {
    bankName: "Slice",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/slice.png",
    features: {
        interestRates: { min: 3.0, max: 7.9 },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 5000,
        compounding: "QUARTERLY",
        instantBooking: true,
        accountRequired: true,
    },
};

const RATES = [
    {
        tenureLabel: "7 days - 29 days",
        rate: { regular: 3.5, senior: 3.75 },
        range: { start: 0.25, end: 1 },
    },
    {
        tenureLabel: "30 days - 45 days",
        rate: { regular: 4.25, senior: 4.5 },
        range: { start: 1, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 3 months",
        rate: { regular: 4.5, senior: 4.75 },
        range: { start: 1.5, end: 3 },
    },
    {
        tenureLabel: "3 months - 6 months",
        rate: { regular: 5.25, senior: 5.5 },
        range: { start: 3, end: 6 },
    },
    {
        tenureLabel: "6 months - 12 months",
        rate: { regular: 6.25, senior: 6.5 },
        range: { start: 6, end: 12 },
    },
    {
        tenureLabel: "12 months - 18 months",
        rate: { regular: 7.25, senior: 7.25 },
        range: { start: 12, end: 18 },
    },
    {
        tenureLabel: "18 months 1 day - 18 months 2 day",
        rate: { regular: 7.75, senior: 7.75 },
        range: { start: 18, end: 18 },
        isBest: true,
    },
    {
        tenureLabel: "18 months 3 day - 36 months",
        rate: { regular: 7.5, senior: 7.5 },
        range: { start: 18, end: 36 },
    },
    {
        tenureLabel: "36 months - 60 months",
        rate: { regular: 7.0, senior: 7.25 },
        range: { start: 36, end: 60 },
    },
    {
        tenureLabel: "60 months - 120 months",
        rate: { regular: 6.5, senior: 6.75 },
        range: { start: 60, end: 120 },
    },
];

const SCHEMES: Scheme[] = [
    {
        id: 0,
        rate: { regular: 7.25, senior: 7.25 },
        duration: "1Y",
        quarters: 4,
    },
    {
        id: 1,
        rate: { regular: 7.75, senior: 7.75 },
        duration: "1Y 6M",
        quarters: 6,
        hasBadge: true,
    },
    {
        id: 2,
        rate: { regular: 7.5, senior: 7.5 },
        duration: "3Y",
        quarters: 12,
    },
    {
        id: 3,
        rate: { regular: 7.0, senior: 7.25 },
        duration: "5Y",
        quarters: 20,
    },
];

const SLICE = { CARD, RATES, SCHEMES };

export { SLICE };
