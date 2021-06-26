import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('')

    // Can make this inline in the JSX
    // const onInputChange = (event) =>{
    //     setTerm(event.target.value);
    // };

    const onSubmit = (event) =>{
        event.preventDefault();

        onFormSubmit(term);
    };

    return(
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>
                        Video Search
                    </label>
                    <input 
                        type="text" 
                        value={term} 
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}


export default SearchBar;