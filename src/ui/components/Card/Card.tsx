import React from 'react';
import { Card as ICard } from '../../../domain'
import { useNavigate } from "react-router-dom";


export type CardProps = {
    card: ICard;
}

export const Card = ({ card }: CardProps): JSX.Element => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/${card.id}`)
    }
    return (
        <div className='card' onClick={onClickHandler}>
            <img
                src={card.imageUrl}
                alt={`card ${card.name}`}
            />
        </div>
    );
}