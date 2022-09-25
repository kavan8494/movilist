import {useState} from 'react';
import {useHistory} from 'react-router-dom'
const CreateMovies = () => {
    const [movieName, setmovieName] = useState("");
    const [hero, sethero] = useState("");
    const [heroine, setheroine] = useState("");
    const [gener, setgenere] = useState("");
    const [imdb, setimdb] = useState("");
    const [story, setstory] = useState("");
    let history = useHistory();
    const handelSubmit = (e)=>{
        e.preventDefault();
        let movie = {movieName,hero,heroine,gener,imdb,story};  ``

        console.log(movie);

        fetch("http://localhost:3040/movies",{
            method:"POST",
            headers:{"Content-Type" : "application/json"}, 
            body: JSON.stringify(movie),
        }).then(()=>{
            history.go(-2);
            history.push("/movie1")
        })
    }
    
    return (
        <div className="add-movies">
            {/* <h1>{movieName}</h1> */}

    <form className="create-movie" onSubmit={handelSubmit}>

    <label>Movie Name : </label> <input type="text" value={movieName} onChange={(e)=>{setmovieName(e.target.value)}}/>

    <label>Hero : </label> <input type="text" value={hero} onChange={(e)=>{sethero(e.target.value)}} />

    <label>Heroine : </label> <input type="text" value={heroine} onChange={(e)=>{setheroine(e.target.value)}} />

    <label>Genere : </label> <input type="text" value={gener} onChange={(e)=>{setgenere(e.target.value)}} />

    <label>Rating : </label> <input type="number" min="1" max="10" step="0.1" value={imdb} onChange={(e)=>{setimdb(e.target.value)}} />

    <label>Story : </label> <textarea cols="50" rows="5" value={story} onChange={(e)=>{setstory(e.target.value)}}></textarea>

    <input type="submit" />

    </form>
            
        </div>
    );
}
export default CreateMovies;