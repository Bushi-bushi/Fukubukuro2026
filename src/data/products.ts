export interface Product {
    id: string;
    name: string;
    price: number;
    totalValue: number;
    limit: number;
    description: string[];
    target: string;
    isPremium?: boolean;
}

export const products: Product[] = [
    {
        id: 'ume',
        name: '梅 (UME)',
        price: 14800,
        totalValue: 25000,
        limit: 20,
        description: [
            '初めての方に最適',
            '普段使いしやすいアイテム',
            '未発売新作1点確定封入'
        ],
        target: '初めての方／ライト層'
    },
    {
        id: 'take',
        name: '竹 (TAKE)',
        price: 25800,
        totalValue: 37000,
        limit: 15,
        description: [
            'リピーター様に人気',
            '充実のラインナップ',
            '未発売新作1点確定封入',
            'コーディネートの幅が広がるセット'
        ],
        target: 'リピーター／メイン層'
    },
    {
        id: 'matsu',
        name: '松 (MATSU)',
        price: 79800,
        totalValue: 100000,
        limit: 7,
        description: [
            'コアファン向け豪華セット',
            '圧倒的なボリュームと満足感',
            '未発売新作1点確定封入',
            '特別な一点物が入る可能性も...？'
        ],
        target: 'コアファン'
    },
    {
        id: 'premium',
        name: 'プレミアム (PREMIUM)',
        price: 258000,
        totalValue: 294600,
        limit: 1,
        description: [
            '限定1個・抽選販売',
            '最高峰のコレクション',
            '全ての新作アイテムを網羅',
            'デザイナーによる特別選定品'
        ],
        target: 'コレクター',
        isPremium: true
    }
];
