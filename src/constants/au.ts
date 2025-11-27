import type { Scheme } from "./types";

export const CARD = {
    bankName: "AU",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/au.png",
    features: {
        interestRates: "3.5% - 7.60%",
        timePeriod: "7 days - 10 Years",
        minimumAmount: 5000,
        compounding: "QUARTERLY",
    },
};

export const RATES = [
    {
        tenureLabel: "7 days - 45 days",
        rate: { regular: 3.5, senior: 4.0 },
        range: { start: 0.25, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 90 days",
        rate: { regular: 4.75, senior: 5.25 },
        range: { start: 1.5, end: 3 },
    },
    {
        tenureLabel: "3 months - 6 months",
        rate: { regular: 5.25, senior: 5.75 },
        range: { start: 3, end: 6 },
    },
    {
        tenureLabel: "6 months - 12 months",
        rate: { regular: 6.35, senior: 6.85 },
        range: { start: 6, end: 12 },
    },
    {
        tenureLabel: "12 months - 15 months",
        rate: { regular: 6.9, senior: 7.4 },
        range: { start: 12, end: 15 },
    },
    {
        tenureLabel: "15 months - 18 months",
        rate: { regular: 6.9, senior: 7.4 },
        range: { start: 15, end: 18 },
    },
    {
        tenureLabel: "18 months - 24 months",
        rate: { regular: 6.9, senior: 7.4 },
        range: { start: 18, end: 24 },
    },
    {
        tenureLabel: "24 months - 36 months",
        rate: { regular: 7.1, senior: 7.6 },
        range: { start: 24, end: 36 },
        isBest: true,
    },
    {
        tenureLabel: "36 months - 45 months",
        rate: { regular: 7.0, senior: 7.5 },
        range: { start: 36, end: 45 },
    },
    {
        tenureLabel: "45 months - 60 months",
        rate: { regular: 6.75, senior: 7.25 },
        range: { start: 45, end: 60 },
    },
    {
        tenureLabel: "60 months - 120 months",
        rate: { regular: 6.75, senior: 7.25 },
        range: { start: 60, end: 120 },
    },
];

export const SCHEMES: Scheme[] = [
    {
        id: 0,
        rate: { regular: 6.9, senior: 7.4 },
        duration: "1Y",
        quarters: 4,
    },
    {
        id: 1,
        rate: { regular: 7.1, senior: 7.6 },
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
        rate: { regular: 6.75, senior: 7.25 },
        duration: "5Y",
        quarters: 20,
    },
];
