export const RATES = [
    {
        tenure: 4.5,
        tenureLabel: "90 days - 6 months",
        rate: { regular: 4.25, senior: 4.75 },
        range: { start: 3, end: 6 },
    },
    {
        tenure: 7.5,
        tenureLabel: "6 months - 9 months",
        rate: { regular: 5.5, senior: 6.0 },
        range: { start: 6, end: 9 },
    },
    {
        tenure: 10.5,
        tenureLabel: "9 months - 12 months",
        rate: { regular: 5.75, senior: 6.25 },
        range: { start: 9, end: 12 },
    },
    {
        tenure: 13.5,
        tenureLabel: "12 months - 15 months",
        rate: { regular: 6.25, senior: 6.75 },
        range: { start: 12, end: 15 },
    },
    {
        tenure: 16.5,
        tenureLabel: "15 months - 18 months",
        rate: { regular: 6.35, senior: 6.85 },
        range: { start: 15, end: 18 },
    },
    {
        tenure: 19.5,
        tenureLabel: "18 months - 21 months",
        rate: { regular: 6.6, senior: 7.1 },
        range: { start: 18, end: 21 },
        isBest: true,
    },
    {
        tenure: 22.5,
        tenureLabel: "21 months - 24 months",
        rate: { regular: 6.45, senior: 6.95 },
        range: { start: 21, end: 24 },
    },
    {
        tenure: 29.5,
        tenureLabel: "24 months - 35 months",
        rate: { regular: 6.45, senior: 6.95 },
        range: { start: 24, end: 35 },
    },
    {
        tenure: 45.5,
        tenureLabel: "36 months - 55 months",
        rate: { regular: 6.4, senior: 6.9 },
        range: { start: 36, end: 55 },
    },
    {
        tenure: 57.5,
        tenureLabel: "55 months - 60 months",
        rate: { regular: 6.4, senior: 6.9 },
        range: { start: 55, end: 60 },
    },
    {
        tenure: 90,
        tenureLabel: "60 months - 120 months",
        rate: { regular: 6.15, senior: 6.65 },
        range: { start: 60, end: 120 },
    },
];

export const CARD = {
    bankName: "HDFC",
    bankLogo:
        "https://bhihtsmosmghzjnmhufc.supabase.co/storage/v1/object/public/superfd-images/bank-logos/hdfc.png",
    features: {
        interestRates: "3.0% - 7.90%",
        timePeriod: "7 days - 10 Years",
        minimumAmount: "₹5,000",
        compounding: "QUARTERLY",
    },
};
