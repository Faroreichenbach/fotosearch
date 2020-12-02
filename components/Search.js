import React, {useState, useEffect} from 'react'
import unsplashApi from '../apis/unsplashApi'
import Gallery from './Gallery';
import '../index.css';

function Search({title, placeholder}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
    const [retrievedResults, setRetrievedResults] = useState([]);

    const onSearchInputChange = e => {
        setSearchTerm(e.target.value)
    }

    //Throttle API calls
    useEffect(() => {
        const timerId  = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm)
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    },[searchTerm])



    useEffect(() => {

        //Declaration of function call to API
        const initiateSearchCall = async () => {
            const {data} = await unsplashApi.get('/search/photos', {
                params: {
                    query: debouncedSearchTerm
                },
            });

            console.log(data.results)

            //Update state with results from API
            setRetrievedResults(data.results);

        }

        //Initiate function call to API
        if(debouncedSearchTerm !== ''){
            initiateSearchCall()
        }

    },[debouncedSearchTerm])

    
 


    
    
    return (
        <div className="search-container">
            
            <div className="search-form"> 
                <h1>{title}</h1>
                <form className="form-field">
                    <input type="text" 
                        onChange={onSearchInputChange}
                        value={searchTerm}
                        placeholder={placeholder}
                        />    
                </form>
            </div>
            
           

           <div className="gallery-list">
            < Gallery retrievedResults= {retrievedResults}/>
           </div>
            

        </div>
    )
}

export default Search
