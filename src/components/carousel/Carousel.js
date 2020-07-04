import React, {Component} from 'react';

import image1 from '../Images/BGQQ5S7.jpg'
import image2 from '../Images/Cat.jpg'
import image3 from '../Images/ContentAwareRemoval.jpg'

class Carousel extends Component {
    render() {

        return (
            <div className={"container col-md-7"}>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src={image1} alt="First slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                Nulla vitae elit libero, a pharetra augue mollis interdum.
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={image2} alt="Second slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src={image3} alt="Third slide"/>
                            <div className="carousel-caption d-none d-md-block">
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button"
                       data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button"
                       data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                {/*{*/}
                {/*    $('.carousel').carousel({*/}
                {/*        interval: 2000*/}
                {/*    })*/}
                {/*}*/}

            </div>



        );
    }
}

export default Carousel;