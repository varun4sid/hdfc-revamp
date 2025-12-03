import type { Scheme } from "./types";

const CARD = {
    bankName: "PNB",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/pnb.png",
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
        tenureLabel: "7 days - 14 days",
        rate: { regular: 3.0, senior: 3.5 },
        range: { start: 0.25, end: 0.5 },
    },
    {
        tenureLabel: "15 days - 29 days",
        rate: { regular: 3.0, senior: 3.5 },
        range: { start: 0.5, end: 1 },
    },
    {
        tenureLabel: "30 days - 45 days",
        rate: { regular: 3.0, senior: 3.5 },
        range: { start: 1, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 60 days",
        rate: { regular: 4.5, senior: 5.0 },
        range: { start: 1.5, end: 2 },
    },
    {
        tenureLabel: "2 months - 3 months",
        rate: { regular: 4.5, senior: 5.0 },
        range: { start: 2, end: 3 },
    },
    {
        tenureLabel: "3 months - 6 months",
        rate: { regular: 4.9, senior: 5.4 },
        range: { start: 3, end: 6 },
    },
    {
        tenureLabel: "6 months - 9 months",
        rate: { regular: 5.6, senior: 6.1 },
        range: { start: 6, end: 9 },
    },
    {
        tenureLabel: "9 months - 10 months",
        rate: { regular: 5.6, senior: 6.1 },
        range: { start: 9, end: 10 },
    },
    {
        tenureLabel: "303 days",
        rate: { regular: 5.5, senior: 6.0 },
        range: { start: 10, end: 10 },
    },
    {
        tenureLabel: "10 months - 12 months",
        rate: { regular: 5.6, senior: 6.1 },
        range: { start: 10, end: 12 },
    },
    {
        tenureLabel: "12 months",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 12, end: 12 },
    },
    {
        tenureLabel: "12 months - 389 days",
        rate: { regular: 6.4, senior: 6.9 },
        range: { start: 12, end: 13 },
    },
    {
        tenureLabel: "390 days",
        rate: { regular: 6.5, senior: 7.0 },
        range: { start: 13, end: 13 },
        isBest: true,
    },
    {
        tenureLabel: "391 days - 505 days",
        rate: { regular: 6.4, senior: 6.9 },
        range: { start: 13, end: 16.75 },
    },
    {
        tenureLabel: "506 days",
        rate: { regular: 6.3, senior: 6.8 },
        range: { start: 16.75, end: 16.75 },
    },
    {
        tenureLabel: "507 days - 2 years",
        rate: { regular: 6.4, senior: 6.9 },
        range: { start: 16.75, end: 24 },
    },
    {
        tenureLabel: "2 years - 3 years",
        rate: { regular: 6.4, senior: 6.9 },
        range: { start: 24, end: 36 },
    },
    {
        tenureLabel: "3 years - 1203 days",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 36, end: 40 },
    },
    {
        tenureLabel: "1204 days",
        rate: { regular: 6.15, senior: 6.65 },
        range: { start: 40, end: 40 },
    },
    {
        tenureLabel: "1205 days - 5 years",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 40, end: 60 },
    },
    {
        tenureLabel: "5 years - 1894 days",
        rate: { regular: 6.0, senior: 6.8 },
        range: { start: 60, end: 63 },
    },
    {
        tenureLabel: "1895 days",
        rate: { regular: 5.85, senior: 6.65 },
        range: { start: 63, end: 63 },
    },
    {
        tenureLabel: "1896 days - 10 years",
        rate: { regular: 6.0, senior: 6.8 },
        range: { start: 63, end: 120 },
    },
];

const SCHEMES: Scheme[] = [
    {
        id: 0,
        rate: { regular: 6.4, senior: 6.9 },
        duration: "1Y",
        quarters: 4,
    },
    {
        id: 1,
        rate: { regular: 6.5, senior: 7.0 },
        duration: "390D",
        quarters: 5,
        hasBadge: true,
    },
    {
        id: 2,
        rate: { regular: 6.4, senior: 6.9 },
        duration: "3Y",
        quarters: 12,
    },
    {
        id: 3,
        rate: { regular: 6.0, senior: 6.8 },
        duration: "5Y",
        quarters: 20,
    },
];

const FEATURES = [
    "The PNB FD tenures range from 7 days to 10 years.",
    "The minimum deposit amount needed to open an FD in PNB is Rs 1000 with no limit on the maximum deposit.",
    "Senior citizens can avail of a 0.50% extra PNB FD interest rates for an amount exceeding Rs.10,000.",
    "Auto-renewal facility is available on the deposit, on maturity.",
    "TDS is deducted at the prevalent rate at source if Form 15G/15H is not submitted.",
];

const PNB = { CARD, RATES, SCHEMES, FEATURES };

export { PNB };
