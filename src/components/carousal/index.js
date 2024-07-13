import React from 'react'
import CarousalImg1 from "../../assets/carousal-img/1.jpg"
import CarousalImg2 from "../../assets/carousal-img/2.jpg"
import CarousalImg3 from "../../assets/carousal-img/3.jpg"

const Carousal = () => {
    return (
        <>
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                {/* <!-- Indicators/dots --> */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                {/* <!-- The slideshow/carousel --> */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={CarousalImg1} alt="Img1" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src={CarousalImg2} alt="Img2" className="d-block w-100"/>
                    </div>
                    <div className="carousel-item">
                        <img src={CarousalImg3} alt="Img3" className="d-block w-100"/>
                    </div>
                </div>

                {/* <!-- Left and right controls/icons --> */}
                {/* <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button> */}
            </div>
        </>
    )
}

export default Carousal
