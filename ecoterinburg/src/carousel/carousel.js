import React from 'react'
import './carousel.css' //will be added later

const Carousel = (props) => {
    const {children} = props

    return (
        <div className="carousel-container">
            <div className="carousel-wrapper">
            <button className="left-arrow">
        &lt;
    </button>
                <div className="carousel-content-wrapper">
                <button className="right-arrow">
        &gt;
    </button>
                    <div className="carousel-content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel