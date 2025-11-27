import type { Scheme } from "./types";

export const CARD = {
    bankName: "SBI",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/sbi.png",
    features: {
        interestRates: "3.05% - 7.05%",
        timePeriod: "7 days - 10 Years",
        minimumAmount: 1000,
        compounding: "QUARTERLY",
    },
};

export const RATES = [
    {
        tenureLabel: "7 days - 45 days",
        rate: { regular: 3.05, senior: 3.55 },
        range: { start: 0.25, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 180 days",
        rate: { regular: 4.9, senior: 5.4 },
        range: { start: 1.5, end: 6 },
    },
    {
        tenureLabel: "6 months - 7 months",
        rate: { regular: 5.65, senior: 6.15 },
        range: { start: 6, end: 7 },
    },
    {
        tenureLabel: "7 months - 12 months",
        rate: { regular: 5.9, senior: 6.4 },
        range: { start: 7, end: 12 },
    },
    {
        tenureLabel: "12 months - 24 months",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 12, end: 24 },
    },
    {
        tenureLabel: "24 months - 36 months",
        rate: { regular: 6.45, senior: 6.95 },
        range: { start: 24, end: 36 },
        isBest: true,
    },
    {
        tenureLabel: "36 months - 60 months",
        rate: { regular: 6.3, senior: 6.8 },
        range: { start: 36, end: 60 },
    },
    {
        tenureLabel: "60 months - 120 months",
        rate: { regular: 6.05, senior: 7.05 },
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
        rate: { regular: 6.45, senior: 6.95 },
        duration: "3Y",
        quarters: 12,
    },
    {
        id: 3,
        rate: { regular: 6.3, senior: 6.8 },
        duration: "5Y",
        quarters: 20,
    },
];
