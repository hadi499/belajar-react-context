const Movie = ({ name, price }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p id="price">{price}</p>
        </div>
    )
}

export default Movie;