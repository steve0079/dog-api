import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Display = () => {

    const [image, setImage] = useState({})

    const fetchData = async () => {
        const response = await axios.get('https://dog.ceo/api/breeds/image/random')
        setImage(response.data.message)
        console.log(response)
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className='display'>
            <div className="layer">
                <div className="image">
                    <img src={image} alt="random dog" />
                </div>
                <div className="button">
                    <input type="text" placeholder="search for" />
                    <button className="btn btn-primary" onClick={() => fetchData()}>Another dog, please!</button>
                </div>
            </div>
        </div>
    );
}

export default Display;