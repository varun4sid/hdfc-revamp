import type { Scheme } from "./types";

export const CARD = {
    bankName: "Axis",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/axis.png",
    features: {
        interestRates: { min: 3.0, max: 7.35 },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 5000,
        compounding: "QUARTERLY",
    },
};

export const RATES = [
    {
        tenureLabel: "7 days - 29 days",
        rate: { regular: 3.0, senior: 3.5 },
        range: { start: 0.25, end: 1 },
    },
    {
        tenureLabel: "30 days - 45 days",
        rate: { regular: 3.25, senior: 3.75 },
        range: { start: 1, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 87 days",
        rate: { regular: 4.0, senior: 4.5 },
        range: { start: 1.5, end: 3 },
    },
    {
        tenureLabel: "88 days - 6 months",
        rate: { regular: 4.5, senior: 5.0 },
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
        tenureLabel: "15 months - 60 months",
        rate: { regular: 6.6, senior: 7.1 },
        range: { start: 15, end: 60 },
    },
    {
        tenureLabel: "60 months - 120 months",
        rate: { regular: 6.6, senior: 7.35 },
        range: { start: 60, end: 120 },
        isBest: true,
    },
];

export const SCHEMES: Scheme[] = [
    {
        id: 0,
        rate: { regular: 6.25, senior: 6.75 },
        duration: "1Y",
        quarters: 4,
    },
    {
        id: 1,
        rate: { regular: 6.6, senior: 7.1 },
        duration: "2Y",
        quarters: 8,
    },
    {
        id: 2,
        rate: { regular: 6.6, senior: 7.1 },
        duration: "3Y",
        quarters: 12,
    },
    {
        id: 3,
        rate: { regular: 6.6, senior: 7.35 },
        duration: "5Y",
        quarters: 20,
        hasBadge: true,
    },
];
