import React, { useState, useRef, useEffect, useContext } from 'react'

//css file
import "./home.css"
import Carousal from '../../components/carousal'
import FooterIndex from '../../components/footer'
import { BsHandbag, BsHeart } from 'react-icons/bs'
// Dummy Json File
import { B2B_DATA, CATEGORY_LIST, DEFAULT_Data } from '../../data/data'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { CartContext } from '../../utils/cartContext'

const Home = () => {
    // states
    const [data, setData] = useState(DEFAULT_Data);
    const [data2, setData2] = useState(B2B_DATA);
    const [categoryList, setCategoryList] = useState(CATEGORY_LIST);
    const [activeCategory, setActiveCategory] = useState(null);

    // refs
    const dessertRef = useRef(null);
    const b2bRef = useRef(null);
    const { addToCart } = useContext(CartContext);

    const handleCategoryClick = (categoryName) => {
        setActiveCategory(categoryName);

        if (categoryName === 'Dessert (NEW)') {
            dessertRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (categoryName === '2B2B Deals') {
            b2bRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

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
                                        {categoryList.map((item, index) => (
                                            <div
                                                className={`category-card ${activeCategory === item.categoryName ? 'active' : ''}`}
                                                key={index}
                                                onClick={() => handleCategoryClick(item.categoryName)}
                                            >
                                                <div className='category-highlight'>
                                                    <h5 className='category-title'>{item.categoryName}</h5>
                                                    <div>
                                                        <MdOutlineKeyboardArrowRight />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className='col-md-9 col-12'>
                                    <div className='Search-main-section'>
                                        <input type='search' placeholder='Search' className='search-input' />
                                    </div>
                                    {/* Deffault Data */}
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <h2 className='content-heading' ref={dessertRef}>Dessert (New)</h2>
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
                                                            <button className='btn cart-button dp-flex' onClick={() => addToCart(item)}> <BsHandbag /> Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* B2B Data */}
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <h2 className='content-heading' ref={b2bRef}>B2B2 Deals</h2>
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
                                                            <button className='btn cart-button dp-flex' onClick={() => addToCart(item)}> <BsHandbag /> Add To Cart</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
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
