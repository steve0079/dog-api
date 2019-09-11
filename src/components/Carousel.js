import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Carousel = () => {
    const [image, setImage] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://dog.ceo/api/breeds/image/random/5')
            setImage(response.data.message);
        };

        fetchData();
    }, []);

    return (
        <div className="bkgrnd">
            <div className="row">
                {image.map((image) =>
                    <ul key={image} className="sized-image" >
                        <img src={image} alt="" />
                    </ul>
                )}
            </div>
        </div>
    )
};

export default Carousel;

