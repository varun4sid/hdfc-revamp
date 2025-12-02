import type { Scheme } from "./types";

const CARD = {
    bankName: "Bank of Baroda",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/bob.png",
    features: {
        interestRates: { min: 3.5, max: 7.0 },
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
        rate: { regular: 3.5, senior: 4.0 },
        range: { start: 0.25, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 180 days",
        rate: { regular: 5.0, senior: 5.5 },
        range: { start: 1.5, end: 6 },
    },
    {
        tenureLabel: "6 months - 7 months",
        rate: { regular: 5.5, senior: 6.0 },
        range: { start: 6, end: 7 },
    },
    {
        tenureLabel: "7 months - 9 months",
        rate: { regular: 5.75, senior: 6.25 },
        range: { start: 7, end: 9 },
    },
    {
        tenureLabel: "9 months - 12 months",
        rate: { regular: 6.0, senior: 6.5 },
        range: { start: 9, end: 12 },
    },
    {
        tenureLabel: "12 months",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 12, end: 12 },
    },
    {
        tenureLabel: "12 months - 36 months",
        rate: { regular: 6.5, senior: 7.0 },
        range: { start: 12, end: 36 },
        isBest: true,
    },
    {
        tenureLabel: "36 months - 60 months",
        rate: { regular: 6.4, senior: 7.0 },
        range: { start: 36, end: 60 },
    },
    {
        tenureLabel: "60 months - 120 months",
        rate: { regular: 6.0, senior: 7.0 },
        range: { start: 60, end: 120 },
    },
];

const SCHEMES: Scheme[] = [
    {
        id: 0,
        rate: { regular: 6.5, senior: 7.0 },
        duration: "1Y",
        quarters: 4,
        hasBadge: true,
    },
    {
        id: 1,
        rate: { regular: 6.5, senior: 7.0 },
        duration: "2Y",
        quarters: 8,
    },
    {
        id: 2,
        rate: { regular: 6.4, senior: 7.0 },
        duration: "3Y",
        quarters: 12,
    },
    {
        id: 3,
        rate: { regular: 6.0, senior: 7.0 },
        duration: "5Y",
        quarters: 20,
    },
];

const BOB = { CARD, RATES, SCHEMES };

export { BOB };
