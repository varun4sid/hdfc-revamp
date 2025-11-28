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

export interface RatesGraphProps {
    onViewChange: () => void;
    isSenior: boolean;
    setIsSenior: (value: boolean) => void;
}

export interface TooltipRenderProps {
    active?: boolean;
    payload?: Array<{ payload: Point; value?: number }>;
}

export type DotRenderProps = {
    cx?: number;
    cy?: number;
    payload?: Point;
};

export type Point = {
    tenure: number;
    tenureLabel: string;
    displayRate: number;
    isBest?: boolean;
    rangeIndex?: number;
};
