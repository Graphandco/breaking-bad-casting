import React from 'react';
import Card from './Card';
import Spinner from '../img/spinner.gif';

const CharactersList = ({ items, isLoading }) => {
    return isLoading ? (
        <div className='loading'>
            <img src={Spinner} alt='Spinner' />
        </div>
    ) : (
        <section className='char-grid'>
            {items.map((item) => (
                <Card key={item.char_id} item={item} />
            ))}
        </section>
    );
};

export default CharactersList;
