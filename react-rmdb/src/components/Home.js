import React, {useState, useEffect} from "react";

//config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL, API_URL,API_KEY } from "../config";

//API

import API from '../API'


//Components

//Hook

//Image
import NoImage from '../images/no_image.jpg';

const Home = () =>{
    const [state, setState] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError]=useState(false);
     
    //async function with empty as default
    const fetchMovies = async(page, searchTerm = "")=>{
        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm,page);
            console.log(movies)
        }catch(error){
            setError(true);
        }
    };

    //initial render
    useEffect(()=>{
        fetchMovies(1);
        //when specified condition as empty arr it will run jsut once
    },[])


    return <div>Home page</div>
}

export default Home;