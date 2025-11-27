import type { Scheme } from "./types";

export const CARD = {
    bankName: "IndusInd",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/indus.png",
    features: {
        interestRates: { min: 3.0, max: 7.9 },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 5000,
        compounding: "QUARTERLY",
    },
};

export const RATES = [
    {
        tenureLabel: "7 days - 30 days",
        rate: { regular: 3.25, senior: 3.75 },
        range: { start: 0.25, end: 1 },
    },
    {
        tenureLabel: "31 days - 45 days",
        rate: { regular: 3.5, senior: 4.0 },
        range: { start: 1, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 60 days",
        rate: { regular: 4.5, senior: 5.0 },
        range: { start: 1.5, end: 2 },
    },
    {
        tenureLabel: "2 months - 3 months",
        rate: { regular: 4.75, senior: 5.25 },
        range: { start: 2, end: 3 },
    },
    {
        tenureLabel: "3 months - 6 months",
        rate: { regular: 5.0, senior: 5.5 },
        range: { start: 3, end: 6 },
    },
    {
        tenureLabel: "6 months - 7 months",
        rate: { regular: 5.75, senior: 6.25 },
        range: { start: 6, end: 7 },
    },
    {
        tenureLabel: "7 months - 9 months",
        rate: { regular: 6.0, senior: 6.5 },
        range: { start: 7, end: 9 },
    },
    {
        tenureLabel: "9 months - 12 months",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 9, end: 12 },
    },
    {
        tenureLabel: "12 months - 18 months",
        rate: { regular: 6.75, senior: 7.25 },
        range: { start: 12, end: 18 },
    },
    {
        tenureLabel: "18 months - 19 months",
        rate: { regular: 7.0, senior: 7.5 },
        range: { start: 18, end: 19 },
        isBest: true,
    },
    {
        tenureLabel: "19 months - 36 months",
        rate: { regular: 6.9, senior: 7.4 },
        range: { start: 19, end: 36 },
    },
    {
        tenureLabel: "36 months - 60 months",
        rate: { regular: 6.65, senior: 7.15 },
        range: { start: 36, end: 60 },
    },
    {
        tenureLabel: "60 months and above",
        rate: { regular: 6.5, senior: 7.0 },
        range: { start: 60, end: 120 },
    },
];

export const SCHEMES: Scheme[] = [
    {
        id: 0,
        rate: { regular: 6.75, senior: 7.25 },
        duration: "1Y",
        quarters: 4,
    },
    {
        id: 1,
        rate: { regular: 6.9, senior: 7.4 },
        duration: "2Y",
        quarters: 8,
        hasBadge: true,
    },
    {
        id: 2,
        rate: { regular: 6.9, senior: 7.4 },
        duration: "3Y",
        quarters: 12,
    },
    {
        id: 3,
        rate: { regular: 6.65, senior: 7.15 },
        duration: "5Y",
        quarters: 20,
    },
];
