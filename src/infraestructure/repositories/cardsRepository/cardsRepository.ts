import { CardsRepositoryDef } from './index';
import { httpClient, Response } from '../../http/http';
import { CardsResponse, CardDetailResponse } from '../../../domain'

const baseUrl = 'https://api.magicthegathering.io/v1'

class CardsRepository implements CardsRepositoryDef {
    
    getAllCards(page = 1): Promise<Response<CardsResponse>> {
        return httpClient.get(`${baseUrl}/cards?page=${page}`)
    };

    getCardDetail(id: number): Promise<Response<CardDetailResponse>> {
        return httpClient.get(`${baseUrl}/cards/${id}`)
    }
}

export const cardsRepository = new CardsRepository();