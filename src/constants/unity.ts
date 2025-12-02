import type { Scheme } from "./types";

export const UNITY = {
    bankName: "Unity",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/unity.png",
    features: {
        interestRates: {
            min: 7,
            max: 8.25,
        },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 1000,
        compounding: "QUARTERLY",
        instantBooking: true,
        accountRequired: false,
    },
};

export const RATES = [
    {
        tenureLabel: "7 days - 45 days",
        rate: { regular: 4.0, senior: 4.0 },
        range: { start: 0.25, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 60 days",
        rate: { regular: 4.75, senior: 5.25 },
        range: { start: 1.5, end: 2 },
    },
    {
        tenureLabel: "61 days - 164 days",
        rate: { regular: 5.0, senior: 5.5 },
        range: { start: 2, end: 5.5 },
    },
    {
        tenureLabel: "165 days - 6 months",
        rate: { regular: 5.5, senior: 6.0 },
        range: { start: 5.5, end: 6 },
    },
    {
        tenureLabel: "6 months - 12 months",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 6, end: 12 },
    },
    {
        tenureLabel: "12 months - 500 days",
        rate: { regular: 6.5, senior: 7.0 },
        range: { start: 12, end: 16.75 },
    },
    {
        tenureLabel: "501 days - 60 months",
        rate: { regular: 6.75, senior: 7.25 },
        range: { start: 16.75, end: 60 },
        isBest: true,
    },
    {
        tenureLabel: "60 months - 120 months",
        rate: { regular: 6.0, senior: 6.5 },
        range: { start: 60, end: 120 },
    },
];

export const SCHEMES: Scheme[] = [
    {
        id: 0,
        rate: { regular: 6.25, senior: 6.75 },
        duration: "6M 1D",
        quarters: 2,
    },
    {
        id: 1,
        rate: { regular: 6.75, senior: 7.25 },
        duration: "501D",
        quarters: 5.5,
        hasBadge: true,
    },
    {
        id: 2,
        rate: { regular: 6.75, senior: 7.25 },
        duration: "701D",
        quarters: 7.66,
    },
    {
        id: 3,
        rate: { regular: 6.4, senior: 6.9 },
        duration: "1001D",
        quarters: 11,
    },
];
