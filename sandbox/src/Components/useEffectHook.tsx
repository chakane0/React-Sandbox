import React, {useEffect, useState} from 'react';
// import { Promise } from 'bluebird';

export default function UseEffectHook() {
    const [title, setTitle] = useState("...loading");
    const [year, setYear] = useState<number>(1932);
    
    // required for typescript, this is how we define what type our value is going to be
    type movie = {
        title: string;
        year: number;
    }
    type guitar = {
        make: string;
        model: string;
        year: number;
        origin: string;
    }

    // mock api call
    function fetchMovieTitle(): Promise<movie> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(
                    {
                        title: "Dune 2", 
                        year: 2025,
                    }
                )
            }, 3500);
        });
    };

    useEffect(() => {
        fetchMovieTitle().then(movie => {
            setTitle(movie.title);
            setYear(movie.year);
        })
    });


    async function fetchGuitar(signal?: AbortSignal): Promise<guitar> {

        if(signal?.aborted) throw new DOMException("Aborted", "AbortError");
        return { 
            make: "Fender",
            model: "Stratocaster",
            year: 1959,
            origin: "Mexico" 
        }
    }

    const [make, setMake] = useState("");
    const [model, setModel] = useState("");
    const [gyear, setgYear] = useState(0);
    const [origin, setOrigin] = useState("");
    
    function Guitar() {
        useEffect(() => {
            const controller = new AbortController();
            fetchGuitar(controller.signal).then((data) => {
                setMake(data.make);
                setModel(data.model);
                setgYear(data.year);
                setOrigin(data.origin);
            })
            .catch((err) => {
                if(err instanceof DOMException && err.name === "AbortError") return;
            })
            return () => controller.abort();
        }, []);
    }
   

    return(
        <>
            <>
                <p>Movie title:  {title}</p>
                <p>Release year: {year}</p>
                <p>-----------------------</p>
                <p>Guitar Make: {make}</p>
                <p>Guitar Model: {model}</p>
                <p>Guitar year: {gyear}</p>
                <p>Guitar origin: {origin}</p>
                {/* <button onClick={}>Cancel API Request</button> */}
            </>
        </>
    );
}