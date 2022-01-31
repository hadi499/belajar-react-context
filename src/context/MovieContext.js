import { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: "Hari Potter",
            price: "$38",
            id: 1
        },
        {
            name: "Superman",
            price: "$45",
            id: 2
        },
        {
            name: "Spiderman",
            price: "$43",
            id: 3
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}