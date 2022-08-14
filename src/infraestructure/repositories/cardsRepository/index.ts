import { Response } from '../../http/http';
import { CardsResponse, CardDetailResponse } from '../../../domain'

export interface CardsRepositoryDef {
    getAllCards: (page?: number) => Promise<Response<CardsResponse>>;
    getCardDetail: (id: number) => Promise<Response<CardDetailResponse>>
}