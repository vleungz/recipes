import React, {useEffect, useState} from 'react';

const RecipeContext = React.createContext();
const APP_KEY = "b05ad7b553544d84accc5577688cb7d6";

const RecipeProvider = (props) => {
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('smoothie');
    const [loading, setLoading] = useState(true);

    const getRecipes = async () => {
        fetch(
            `https://api.spoonacular.com/recipes/search?query=${query}&apiKey=${APP_KEY}`
        )
            .then(response => response.json())
            .then(data => {
                setRecipes(data.results);
            })
        setLoading(false);
    };

    useEffect(() => {
        getRecipes()
    }, [query]);

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setLoading(true);
        setQuery(search);
        setSearch('');
        setLoading(false);
    };

    return (
        <RecipeContext.Provider value={{
            APP_KEY,
            loading,
            search,
            recipes,
            updateSearch,
            getSearch,
        }}>
            {props.children}
        </RecipeContext.Provider>
    )
}
const RecipeConsumer = RecipeContext.Consumer;
export { RecipeProvider, RecipeConsumer, RecipeContext };