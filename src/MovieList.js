import { Link } from "react-router-dom"; // link hook
// const MoviesList =(props) => {
//     let movies=props.movies       //props object
//     let title=props.title
const MoviesList = ({movies,title}) => {//destructuring :convert the object to destructuring
const deleteMovie=(id)=>{

    fetch(`http://localhost:3040/movies/${id}`,
      {  method:"DELETE"}
    ).then(()=>{
        alert('movie has been deleted')
    })
}
// alert("delete");
    return (
        <div>
             <h1>{title}</h1>          {/*  this type are fetching the value of js */}
             { movies.map((movie)=>(    //movies is key value of let varible 
            <div className="movies-list">
              <Link style={{textDecoration:'none'}} to={`/movie${movie.id}`}>     {/* passing the value of movie id */}
                <h2>Movie : {movie.movieName}</h2>
                <h2>Movie : {movie.id}</h2>
                <h3>Hero : {movie.hero}</h3>
                <h3>Heroine : {movie.heroine}</h3>
                <h3>Gener : {movie.gener}</h3>
                <h3>imdb:{movie.imdb}</h3>
                <p>image:{movie.image}</p>
                <button onClick={()=>{deleteMovie(movie.id)}}>Delete</button>
                </Link>
            </div>
        )) }
        </div>
    );
}
export default MoviesList;
