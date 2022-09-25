import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
const MovieDetails = () => {
    const {id} = useParams();
            let {data:movie , pending ,error} = useFetch(` http://localhost:3040/movies/${id}`);
    return ( 
        <div>
            {error && <h1>{error}</h1>}
            {pending && <h1>Loading ..........</h1>}
            {movie && 
            <div>
                <img src={movie.poster}/>
                <h1>{movie.movieName}</h1>
                <h2>Hero : {movie.hero}</h2>
                <h2>Heroine : {movie.heroine}</h2>
                <h2>Genere : {movie.gener}</h2>
                <h2>IMBD rating : {movie.rating}</h2>
                <p>Story line : {movie.story}</p>
            </div>
            }
        </div>
    );
}
export default MovieDetails;