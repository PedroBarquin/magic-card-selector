import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { cardsRepository } from '../../../infraestructure/repositories/cardsRepository/cardsRepository';
import { Card as ICard } from '../../../domain'
import { Card } from '../../components/Card/Card'


export const Detail = ({ }): JSX.Element => {
  const [card, setCard] = useState<ICard>();
  const { id } = useParams<{id: any}>();

  useEffect(() => {
    cardsRepository.getCardDetail(id).then((result) => {
      if (result?.data?.card) {
        setCard(result?.data?.card)
      }
    })
  }, [])

  return (
    <div className="Detail">
      {card && (
        <>
          <div className='card-detail-card'>
            <Card card={card}/>
          </div>
          <div className='card-detail-info'>
            <div className='card-detail-info__name'>
                {card?.name}
            </div>
            <div className='card-detail-info__cmc'>
                {card?.cmc}
            </div>
          </div>
        </>
      )}
      {!card && (
        <div>No existe una carta con el id seleccionado</div>
      )}
    </div>
  );
}