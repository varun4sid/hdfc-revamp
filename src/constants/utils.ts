export function getAmountString(amount: number) {
    const num = Math.floor(Math.abs(amount));
    if (num === 0) return "Zero Only";

    const ones = [
        "",
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen",
        "Sixteen",
        "Seventeen",
        "Eighteen",
        "Nineteen",
    ];
    const tens = [
        "",
        "",
        "Twenty",
        "Thirty",
        "Forty",
        "Fifty",
        "Sixty",
        "Seventy",
        "Eighty",
        "Ninety",
    ];

    function twoDigitsToWords(n: number) {
        if (n === 0) return "";
        if (n < 20) return ones[n];
        const t = Math.floor(n / 10);
        const r = n % 10;
        return tens[t] + (r ? ` ${ones[r]}` : "");
    }

    // Indian grouping: last 3 digits, then groups of 2 (thousand, lakh, crore)
    let remaining = num;
    const hundreds = remaining % 1000;
    remaining = Math.floor(remaining / 1000);

    const units = ["Thousand", "Lakh", "Crore"];
    const parts: string[] = [];

    // Process higher groups (thousand, lakh, crore...)
    let idx = 0;
    while (remaining > 0 && idx < units.length) {
        const group = remaining % 100;
        if (group) {
            const grpWords = twoDigitsToWords(group);
            parts.unshift(`${grpWords} ${units[idx]}`.trim());
        }
        remaining = Math.floor(remaining / 100);
        idx++;
    }

    // Process hundreds (last three digits)
    if (hundreds) {
        const h = Math.floor(hundreds / 100);
        const rem = hundreds % 100;
        let hundredsPart = "";
        if (h) hundredsPart += `${ones[h]} Hundred`;
        if (rem) {
            hundredsPart += (hundredsPart ? " " : "") + twoDigitsToWords(rem);
        }
        parts.push(hundredsPart.trim());
    }

    const result = parts.join(" ").replace(/\s+/g, " ").trim();
    return result ? `${result} Only` : "Zero Only";
}

export function getResults(
    amount: number,
    rate: number,
    periods: number
): {
    maturityAmount: number;
    interestEarned: number;
    growthRate: number;
} {
    const maturityAmount = amount * Math.pow(1 + rate / (100 * 4), periods);
    const interestEarned = maturityAmount - amount;
    const growthRate = (interestEarned / amount) * 100;

    return {
        maturityAmount: parseFloat(maturityAmount.toFixed()),
        interestEarned: parseFloat(interestEarned.toFixed()),
        growthRate: parseFloat(growthRate.toFixed(2)),
    };
}
