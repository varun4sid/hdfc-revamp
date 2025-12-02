import type { Scheme } from "./types";

export const CARD = {
    bankName: "Utkarsh",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/utkarsh.png",
    features: {
        interestRates: { min: 4, max: 8.05 },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 1000,
        compounding: "QUARTERLY",
        instantBooking: true,
        accountRequired: true,
    },
};

export const RATES = [
    {
        tenureLabel: "7 days - 45 days",
        rate: { regular: 4.0, senior: 4.5 },
        range: { start: 0.25, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 90 days",
        rate: { regular: 4.5, senior: 5.0 },
        range: { start: 1.5, end: 3 },
    },
    {
        tenureLabel: "3 months - 6 months",
        rate: { regular: 5.0, senior: 5.5 },
        range: { start: 3, end: 6 },
    },
    {
        tenureLabel: "6 months - 12 months",
        rate: { regular: 6.0, senior: 6.5 },
        range: { start: 6, end: 12 },
    },
    {
        tenureLabel: "12 months - 24 months",
        rate: { regular: 7.25, senior: 7.75 },
        range: { start: 12, end: 24 },
    },
    {
        tenureLabel: "24 months - 36 months",
        rate: { regular: 7.5, senior: 8.0 },
        range: { start: 24, end: 36 },
        isBest: true,
    },
    {
        tenureLabel: "36 months - 48 months",
        rate: { regular: 7.25, senior: 7.75 },
        range: { start: 36, end: 48 },
    },
    {
        tenureLabel: "48 months - 60 months",
        rate: { regular: 7.0, senior: 7.5 },
        range: { start: 48, end: 60 },
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
        rate: { regular: 7.25, senior: 7.75 },
        duration: "1Y",
        quarters: 4,
    },
    {
        id: 1,
        rate: { regular: 7.5, senior: 8.0 },
        duration: "2Y",
        quarters: 8,
        hasBadge: true,
    },
    {
        id: 2,
        rate: { regular: 7.25, senior: 7.75 },
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
