export interface Card {
    id: string;
    name: string;
    imageUrl: string;
    manaCost: string;
    cmc: number;
    type: string;
    rarity: string;
    setName: string;
    flavor?: string;
    text: string;
    artist: string;
}

export interface CardsResponse {
    cards: Card[];
}

export interface CardDetailResponse {
    card: Card;
}