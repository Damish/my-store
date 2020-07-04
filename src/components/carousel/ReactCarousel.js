import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import image1 from '../Images/BGQQ5S7.jpg'
import image2 from '../Images/Cat.jpg'
import image3 from '../Images/ContentAwareRemoval.jpg'



class ReactCarousel extends Component {
    render() {
        return (
            <div className={"container m-3"}>
            <Carousel>
                <div>
                    <img src={image1} />
                    <p className="carousel-caption d-none d-md-block">Legend 1</p>
                </div>
                <div>
                    <img src={image2} />
                    <p className="carousel-caption d-none d-md-block">Legend 2</p>
                </div>
                <div>
                    <img src={image3} />
                    <p className="carousel-caption d-none d-md-block">Legend 3</p>
                </div>
            </Carousel>
            </div>

        );

    }

}


export default ReactCarousel;