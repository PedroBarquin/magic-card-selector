import React, { useEffect, useState } from 'react';
import { cardsRepository } from '../../../infraestructure/repositories/cardsRepository/cardsRepository';
import { Card as ICard } from '../../../domain'
import { Card } from  '../../components/Card/Card'
import './Home.css';

export const Home = ({ }): JSX.Element => {
    const [cards, setCards] = useState<ICard[]>([]);

    useEffect(() => {
        cardsRepository.getAllCards(1).then((result) => {
            if (result?.data?.cards?.length) {
                setCards(result?.data?.cards);
            }
       });
    }, [])
  return (
      <div className="Home">
           {cards?.length > 0 && (
                <div className='app-cards-results'>
                    {cards.map((card) => (
                        <>
                            {card.imageUrl && (
                                <Card card={card} />
                            )}
                        </>
                    ))}
                </div>
            )}
            {!cards || cards?.length === 0 && (
                <div>No hay resultados</div>
          )}
    </div>
  );
}