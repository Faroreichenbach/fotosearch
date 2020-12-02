import React from 'react'
import '../index.css';

function Gallery({retrievedResults}) {

    const imagesGallery = retrievedResults.map((image) => {
        return(
                    <div key={image.id}>
                        <img src={image.urls.small} alt={image.alt_description}/> 
                    </div>
        )
    })



    return (
        <div className="gallery-container">
            {imagesGallery}
        </div>
    )
}

export default Gallery
