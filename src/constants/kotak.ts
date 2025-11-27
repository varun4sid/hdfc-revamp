import type { Scheme } from "./types";

export const CARD = {
    bankName: "Kotak",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/kotak.png",
    features: {
        interestRates: "2.75% - 6.75%",
        timePeriod: "7 days - 10 Years",
        minimumAmount: 5000,
        compounding: "QUARTERLY",
    },
};

export const RATES = [
    {
        tenureLabel: "7 days - 30 days",
        rate: { regular: 2.75, senior: 3.25 },
        range: { start: 0.25, end: 1 },
    },
    {
        tenureLabel: "31 days - 45 days",
        rate: { regular: 3.0, senior: 3.5 },
        range: { start: 1, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 90 days",
        rate: { regular: 3.5, senior: 4.0 },
        range: { start: 1.5, end: 3 },
    },
    {
        tenureLabel: "91 days",
        rate: { regular: 5.0, senior: 5.5 },
        range: { start: 3, end: 3 },
    },
    {
        tenureLabel: "92 days - 179 days",
        rate: { regular: 4.25, senior: 4.75 },
        range: { start: 3, end: 6 },
    },
    {
        tenureLabel: "6 months",
        rate: { regular: 5.75, senior: 6.25 },
        range: { start: 6, end: 6 },
    },
    {
        tenureLabel: "6 months - 9 months",
        rate: { regular: 5.5, senior: 6.0 },
        range: { start: 6, end: 9 },
    },
    {
        tenureLabel: "9 months - 12 months",
        rate: { regular: 6.0, senior: 6.5 },
        range: { start: 9, end: 12 },
    },
    {
        tenureLabel: "12 months - 13 months",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 12, end: 13 },
    },
    {
        tenureLabel: "13 months",
        rate: { regular: 6.5, senior: 7.0 },
        range: { start: 12, end: 12 },
    },
    {
        tenureLabel: "13 months - 24 months",
        rate: { regular: 6.7, senior: 7.2 },
        range: { start: 13, end: 24 },
        isBest: true,
    },
    {
        tenureLabel: "24 months - 60 months",
        rate: { regular: 6.4, senior: 6.9 },
        range: { start: 24, end: 60 },
    },
    {
        tenureLabel: "60 months - 120 months",
        rate: { regular: 6.25, senior: 6.75 },
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
        rate: { regular: 6.7, senior: 7.2 },
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
