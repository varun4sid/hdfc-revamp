import type { Scheme } from "./types";

export const CARD = {
    bankName: "HDFC",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/hdfc.png",
    features: {
        interestRates: { min: 3.0, max: 7.9 },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 5000,
        compounding: "QUARTERLY",
    },
};

export const RATES = [
    {
        tenureLabel: "7 days - 29 days",
        rate: { regular: 2.75, senior: 3.25 },
        range: { start: 0.25, end: 1 },
    },
    {
        tenureLabel: "30 days - 45 days",
        rate: { regular: 3.25, senior: 3.75 },
        range: { start: 1, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 90 days",
        rate: { regular: 4.25, senior: 4.75 },
        range: { start: 1.5, end: 3 },
    },
    {
        tenureLabel: "3 months - 6 months",
        rate: { regular: 4.25, senior: 4.75 },
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
        tenureLabel: "15 months - 18 months",
        rate: { regular: 6.35, senior: 6.85 },
        range: { start: 15, end: 18 },
    },
    {
        tenureLabel: "18 months - 21 months",
        rate: { regular: 6.6, senior: 7.1 },
        range: { start: 18, end: 21 },
        isBest: true,
    },
    {
        tenureLabel: "21 months - 36 months",
        rate: { regular: 6.45, senior: 6.95 },
        range: { start: 21, end: 36 },
    },
    {
        tenureLabel: "36 months - 55 months",
        rate: { regular: 6.4, senior: 6.9 },
        range: { start: 36, end: 55 },
    },
    {
        tenureLabel: "55 months - 60 months",
        rate: { regular: 6.4, senior: 6.9 },
        range: { start: 55, end: 60 },
    },
    {
        tenureLabel: "60 months - 120 months",
        rate: { regular: 6.15, senior: 6.65 },
        range: { start: 60, end: 120 },
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
        rate: { regular: 6.45, senior: 6.95 },
        duration: "2Y",
        quarters: 8,
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
        rate: { regular: 6.4, senior: 6.9 },
        duration: "5Y",
        quarters: 20,
    },
];
