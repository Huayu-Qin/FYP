import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://newsapi.org/v2/top-headlines?country=ie&category=health&apiKey=${process.env.REACT_APP_API_KEY}`)
            .then((response) => {setData(response.data); console.log(response)})
            .catch((error) => console.log(error))
    }, [])
    return (
        <NewsContext.Provider value={{data}}>{props.children}</NewsContext.Provider>
    )
}
