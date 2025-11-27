import type { Scheme } from "./types";

export const CARD = {
    bankName: "RBL",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/rbl.png",
    features: {
        interestRates: { min: 3.5, max: 7.7 },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 5000,
        compounding: "QUARTERLY",
        instantBooking: true,
        accountRequired: true,
    },
};

export const RATES = [
    {
        tenureLabel: "7 days - 14 days",
        rate: { regular: 3.5, senior: 4.0 },
        range: { start: 0.25, end: 0.5 },
    },
    {
        tenureLabel: "15 days - 45 days",
        rate: { regular: 4.0, senior: 4.5 },
        range: { start: 0.5, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 90 days",
        rate: { regular: 4.5, senior: 5.0 },
        range: { start: 1.5, end: 3 },
    },
    {
        tenureLabel: "3 months - 6 months",
        rate: { regular: 4.75, senior: 5.25 },
        range: { start: 3, end: 6 },
    },
    {
        tenureLabel: "6 months - 8 months",
        rate: { regular: 5.5, senior: 6.0 },
        range: { start: 6, end: 8 },
    },
    {
        tenureLabel: "8 months - 12 months",
        rate: { regular: 6.05, senior: 6.55 },
        range: { start: 8, end: 12 },
    },
    {
        tenureLabel: "12 months - 18 months",
        rate: { regular: 7.0, senior: 7.5 },
        range: { start: 12, end: 18 },
    },
    {
        tenureLabel: "18 months - 36 months",
        rate: { regular: 7.2, senior: 7.7 },
        range: { start: 18, end: 36 },
        isBest: true,
    },
    {
        tenureLabel: "36 months - 60 months",
        rate: { regular: 7.0, senior: 7.5 },
        range: { start: 36, end: 60 },
    },
    {
        tenureLabel: "60 months - 120 months",
        rate: { regular: 6.7, senior: 7.2 },
        range: { start: 60, end: 120 },
    },
];

export const SCHEMES: Scheme[] = [
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
        rate: { regular: 6.7, senior: 7.2 },
        duration: "5Y",
        quarters: 20,
    },
];
