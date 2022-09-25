import MoviesList from './MovieList';
import useFetch from './useFetch';

const Home = () => {
    let {data:movies , pending , error} = useFetch("http://localhost:3040/movies");
    return ( 
    <div className='home-content'>
        
    {error && <h1>{error}</h1>}

    {pending && <h1>Loading ..........</h1>}

    {movies && <MoviesList movies={movies} title="All movies" />}

    </div>
    );
}

export default Home;