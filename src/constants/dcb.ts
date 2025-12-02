import type { Scheme } from "./types";

const CARD = {
    bankName: "DCB",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/dcb.png",
    features: {
        interestRates: { min: 3.75, max: 7.7 },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 5000,
        compounding: "QUARTERLY",
        instantBooking: true,
        accountRequired: true,
    },
};

const RATES = [
    {
        tenureLabel: "7 days - 45 days",
        rate: { regular: 3.75, senior: 4.0 },
        range: { start: 0.25, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 90 days",
        rate: { regular: 4.5, senior: 4.75 },
        range: { start: 1.5, end: 3 },
    },
    {
        tenureLabel: "3 months - 6 months",
        rate: { regular: 4.75, senior: 5.0 },
        range: { start: 3, end: 6 },
    },
    {
        tenureLabel: "6 months - 10 months",
        rate: { regular: 6.0, senior: 6.25 },
        range: { start: 6, end: 10 },
    },
    {
        tenureLabel: "10 months - 12 months",
        rate: { regular: 6.5, senior: 6.75 },
        range: { start: 10, end: 12 },
    },
    {
        tenureLabel: "12 months - 15 months",
        rate: { regular: 6.9, senior: 7.15 },
        range: { start: 12, end: 15 },
    },
    {
        tenureLabel: "15 months - 16 months",
        rate: { regular: 7.0, senior: 7.5 },
        range: { start: 15, end: 16 },
    },
    {
        tenureLabel: "16 months - 27 months",
        rate: { regular: 6.9, senior: 7.15 },
        range: { start: 16, end: 27 },
    },
    {
        tenureLabel: "27 months - 28 months",
        rate: { regular: 7.1, senior: 7.6 },
        range: { start: 27, end: 28 },
    },
    {
        tenureLabel: "28 months - 37 months",
        rate: { regular: 7.0, senior: 7.25 },
        range: { start: 28, end: 37 },
    },
    {
        tenureLabel: "37 months - 38 months",
        rate: { regular: 7.2, senior: 7.7 },
        range: { start: 37, end: 38 },
        isBest: true,
    },
    {
        tenureLabel: "38 months - 60 months",
        rate: { regular: 7.0, senior: 7.25 },
        range: { start: 38, end: 60 },
    },
    {
        tenureLabel: "60 months - 61 months",
        rate: { regular: 7.1, senior: 7.6 },
        range: { start: 60, end: 61 },
    },
    {
        tenureLabel: "61 months - 120 months",
        rate: { regular: 7.0, senior: 7.25 },
        range: { start: 61, end: 120 },
    },
];

const SCHEMES: Scheme[] = [
    {
        id: 0,
        rate: { regular: 6.9, senior: 7.15 },
        duration: "1Y",
        quarters: 4,
    },
    {
        id: 1,
        rate: { regular: 6.9, senior: 7.15 },
        duration: "2Y",
        quarters: 8,
        hasBadge: true,
    },
    {
        id: 2,
        rate: { regular: 7.2, senior: 7.7 },
        duration: "3Y",
        quarters: 12,
    },
    {
        id: 3,
        rate: { regular: 7.1, senior: 7.6 },
        duration: "5Y",
        quarters: 20,
    },
];

const DCB = { CARD, RATES, SCHEMES };

export { DCB };
