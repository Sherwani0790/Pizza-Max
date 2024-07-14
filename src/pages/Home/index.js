import React, { useState } from 'react'

//css file
import "./home.css"
import Carousal from '../../components/carousal'
import FooterIndex from '../../components/footer'
import { BsHandbag, BsHeart } from 'react-icons/bs'
// Dummy Json File
import { B2B_DATA, CATEGORY_LIST, DEFAULT_Data } from '../../data/data'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
    // states
    const [data, setData] = useState(DEFAULT_Data);
    const [data2, setData2] = useState(B2B_DATA);
    const [categoryList, setCategoryList] = useState(CATEGORY_LIST);
    return (
        <>
            <div className='home-main-section'>
                <div className='home-category-section'>
                    <section>
                        <Carousal />
                    </section>
                    {/* main-section */}
                    <section className='p-40'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-3 col-12'>
                                    <h3>All Category</h3>
                                    {/* List Collection */}
                                    <div className='category-list'>
                                        {categoryList.map((item, ind) => (
                                            <>
                                                <div className='category-card' key={ind}>

                                                    <div className='category-highlight'>
                                                        <h5 className='category-title'>{item.categoryName}</h5>
                                                        <div className=''>
                                                            <MdOutlineKeyboardArrowRight />
                                                        </div>
                                                    </div>
                                                </div >
                                            </>
                                        ))}
                                    </div >
                                </div >

                                <div className='col-md-9 col-12'>
                                    <div className='Search-main-section'>
                                        <input type='search' placeholder='Search' className='search-input' />
                                    </div>
                                    {/* Deffault Data */}
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <h2 className='content-heading'>Dessert (New) </h2>
                                        </div>
                                        {data.map((item, index) => (
                                            <div className='col-md-12 col-lg-6 col-xl-4' key={index}>
                                                <div className='chart-card'>
                                                    <div className='card-img'>
                                                        <img className='card-img-style' src={item.img} alt='Product' />
                                                        <div className='card-img-text'>
                                                            <div className='dp-flex justify-content-between align-items-center'>
                                                                <h4 className='card-title'>{item.mainHeading}</h4>
                                                                <div className='card-icon'>
                                                                    <BsHeart />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className='card-text'>{item.description}</p>
                                                            </div>
                                                            <div className='card-price'>
                                                                <p>{item.price}</p>
                                                            </div>
                                                        </div>
                                                        <div className='dp-flex justify-content-center'>
                                                            <button className='btn cart-button dp-flex'> <BsHandbag /> Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* B2B Data */}
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <h2 className='content-heading'>B2B2 Deals</h2>
                                        </div>
                                        {data2.map((item, index) => (
                                            <div className='col-md-12 col-lg-6 col-xl-4' key={index}>
                                                <div className='chart-card'>
                                                    <div className='card-img'>
                                                        <img className='card-img-style' src={item.img} alt='Product' />
                                                        <div className='card-img-text'>
                                                            <div className='dp-flex justify-content-between align-items-center'>
                                                                <h4 className='card-title'>{item.mainHeading}</h4>
                                                                <div className='card-icon'>
                                                                    <BsHeart />
                                                                </div>
                                                            </div>
                                                            <div>
                                                                <p className='card-text'>{item.description}</p>
                                                            </div>
                                                            <div className='card-price'>
                                                                <p>{item.price}</p>
                                                            </div>
                                                        </div>
                                                        <div className='dp-flex justify-content-center'>
                                                            <button className='btn cart-button dp-flex'> <BsHandbag /> Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div >
                        </div>
                    </section>
                </div>
            </div>
            <footer className="pt-2">
                <FooterIndex />
            </footer>

        </>
    )
}

export default Home
