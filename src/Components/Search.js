import React, { useState } from 'react';

const Search = ({ getQuery }) => {
    const [text, setText] = useState('');

    const onChange = (q) => {
        setText(q);
        getQuery(q);
    };

    return (
        <section className='search'>
            <form>
                <input
                    type='test'
                    className='form-control'
                    placeholder='Chercher un personnage'
                    value={text}
                    onChange={(e) => onChange(e.target.value)}
                    autoFocus
                ></input>
            </form>
        </section>
    );
};

export default Search;
