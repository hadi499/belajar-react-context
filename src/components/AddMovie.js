import { useContext, useState } from 'react';
import { MovieContext } from '../context/MovieContext';


const AddMovie = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [movies, setMovies] = useContext(MovieContext);
    const [id, setId] = useState("");

    const updateName = (e) => {
        setName(e.target.value);
    }

    const updatePrice = (e) => {
        setPrice(e.target.value);
    }


    const addMovie = (e) => {
        e.preventDefault();
        setMovies((prevMovies) => [...prevMovies, { name: name, price: price, id: id }]);
    }

    return (
        <form onSubmit={addMovie}>
            <input type="text" name="name" value={name} onChange={updateName} />
            <input type="text" name="price" value={price} onChange={updatePrice} />
            <button>submit</button>
        </form>
    )
};

export default AddMovie;
