export type Scheme = {
    id: number;
    rate: {
        regular: number;
        senior: number;
    };
    duration: string;
    quarters: number;
    hasBadge?: boolean;
};

export type Yield = {
    maturityAmount: number;
    interestEarned: number;
    growthRate: number;
};
