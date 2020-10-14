import React from 'react';
import Masque from '../img/masque.png';

const Card = ({ item }) => {
    return (
        <div className='char-card'>
            <img src={item.img} alt='Character' />
            <div className='char-desc'>
                <img src={Masque} alt='Masque' />
                <div className='name'>
                    <div className='real-name'>{item.name}</div>
                    <div className='nickname'>"{item.nickname}"</div>
                </div>
                <div className='actor'>{item.portrayed}</div>
                {console.log(item)}
                {item.appearance !== null && 
                <div className='saisons'>
                    <span className=''>
                        {item.appearance.length > 1 
                            ? 'Saisons : '
                            : 'Saison : '}
                    </span>
                    <div className='saisons-list'>
                        {item.appearance.map((saison, index) => (
                            <div className='number' key={index}>
                                {saison}
                            </div>
                        ))}
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default Card;
