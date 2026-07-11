interface Navigator {
    userAgentData?: {
        mobile: boolean;
        platform: string;
        brands: { brand: string; version: string }[];
    };
}