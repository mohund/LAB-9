import { useState } from 'react';
import RecipesResult from './RecipesResult';

const Search = () => {
    const [searchQuery, setSearch] = useState('');
    const [recipes, setRecipes] = useState('');

    const handleClick = async () => {
        if (!searchQuery.trim()) {
            alert("Please enter a valid search query!"); 
            return;
        }

        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=7ca58aae15f64d22a16003be2bce994e&query=${searchQuery}`
        );
        const responseJSON = await response.json();
        setRecipes(responseJSON.results);
        setSearch(''); 
    };

    return (
        <>
            <div className="search-wrapper">
                <input
                    type="text"
                    placeholder="Search by ingredients..."
                    value={searchQuery} 
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={handleClick}>Search</button>
            </div>
            {recipes ? <RecipesResult recipes={recipes} /> : null}
        </>
    );
};

export default Search;
