import React, { useState, useEffect } from 'react';
import './App.scss';
import Header from './Components/Header';
import axios from 'axios';
import CharactersList from './Components/CharactersList';
import Search from './Components/Search';

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(
                `https://www.breakingbadapi.com/api/characters?name=${query}`
            );
            console.log(result.data);
            setItems(result.data);
            setIsloading(false);
        };
        fetchItems();
    }, [query]);

    return (
        <div className='App'>
            <Header />
            <Search getQuery={(q) => setQuery(q)} />
            <CharactersList items={items} isLoading={isLoading} />
        </div>
    );
}

export default App;
