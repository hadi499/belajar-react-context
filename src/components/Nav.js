import { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext);
    return (
        <nav>
            <h3>my app</h3>
            <p>List Movies: {movies.length}</p>

        </nav>
    )

};
export default Nav;