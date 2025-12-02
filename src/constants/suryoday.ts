import type { Scheme } from "./types";

const CARD = {
    bankName: "Suryoday",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/suryoday.png",
    features: {
        interestRates: { min: 4, max: 8.05 },
        timePeriod: "7 days - 10 Years",
        minimumAmount: 1000,
        compounding: "QUARTERLY",
        instantBooking: true,
        accountRequired: true,
    },
};

const RATES = [
    {
        tenureLabel: "7 days - 14 days",
        rate: { regular: 4.0, senior: 4.2 },
        range: { start: 0.25, end: 0.5 },
    },
    {
        tenureLabel: "15 days - 45 days",
        rate: { regular: 4.25, senior: 4.45 },
        range: { start: 0.5, end: 1.5 },
    },
    {
        tenureLabel: "46 days - 90 days",
        rate: { regular: 4.5, senior: 4.7 },
        range: { start: 1.5, end: 3 },
    },
    {
        tenureLabel: "3 months - 6 months",
        rate: { regular: 5.0, senior: 5.2 },
        range: { start: 3, end: 6 },
    },
    {
        tenureLabel: "6 months",
        rate: { regular: 6.75, senior: 6.95 },
        range: { start: 6, end: 6 },
    },
    {
        tenureLabel: "6 months 1 day - 9 months",
        rate: { regular: 5.5, senior: 5.7 },
        range: { start: 6, end: 9 },
    },
    {
        tenureLabel: "9 months - 12 months",
        rate: { regular: 6.0, senior: 6.2 },
        range: { start: 9, end: 12 },
    },
    {
        tenureLabel: "12 months",
        rate: { regular: 7.4, senior: 7.6 },
        range: { start: 12, end: 12 },
    },
    {
        tenureLabel: "12 months 1 day - 36 months",
        rate: { regular: 7.25, senior: 7.45 },
        range: { start: 12, end: 36 },
    },
    {
        tenureLabel: "36 months 1 day - 60 months",
        rate: { regular: 6.75, senior: 6.95 },
        range: { start: 36, end: 60 },
    },
    {
        tenureLabel: "60 months",
        rate: { regular: 8.05, senior: 8.1 },
        range: { start: 60, end: 60 },
        isBest: true,
    },
    {
        tenureLabel: "60 months 1 day - 120 months",
        rate: { regular: 7.25, senior: 7.45 },
        range: { start: 60, end: 120 },
    },
];

const SCHEMES: Scheme[] = [
    {
        id: 0,
        rate: { regular: 7.4, senior: 7.6 },
        duration: "1Y",
        quarters: 4,
    },
    {
        id: 1,
        rate: { regular: 7.25, senior: 7.45 },
        duration: "2Y",
        quarters: 8,
        hasBadge: true,
    },
    {
        id: 2,
        rate: { regular: 7.25, senior: 7.45 },
        duration: "3Y",
        quarters: 12,
    },
    {
        id: 3,
        rate: { regular: 8.05, senior: 8.1 },
        duration: "5Y",
        quarters: 20,
    },
];

const SURYODAY = { CARD, RATES, SCHEMES };

export { SURYODAY };
