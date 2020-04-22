import React, {useContext} from 'react';
import {RecipeContext} from '../context/index';
import '../App.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export default function Search ({search}) {
    const appContext = useContext(RecipeContext);
    const {getSearch, updateSearch} = appContext;

    return (
        <form
            onSubmit = {getSearch}
            className="search-form"
        >
            <input
                className="search-bar"
                type ="text"
                placeholder="Smoothie"
                value ={search}
                onChange ={updateSearch}
            />
            <button className="search-button" type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </form>
    )
}