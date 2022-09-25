import {useState , useEffect} from 'react';
const useFetch = (req) => {
    let [data , setData] =  useState(null); 
    let [pending , setPending] = useState(true);
    let [error ,seterror] = useState(null); 
    useEffect(()=>{
        setTimeout(()=>{fetch(req)
        .then((response)=>{
            if(response.ok===false)
            {
                throw Error("Data is not found , please search for movies insted")
            }
            return response.json();
        })
        .then((movies)=>{ 
            setData(movies);
            setPending(false)
        })
        .catch((error)=>{
            seterror(error.message);
            setPending(false);
        })
    } ,1000)
    } , [req])
    return {data , pending , error}
}
export default useFetch;




