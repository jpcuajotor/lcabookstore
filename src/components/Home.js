import React from 'react'
// import backImg from '../img/home.jpg';
import Products from './Products';

const Home = () => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="header-info">
                    <h1><span className="header-home">LCA's Online Shop</span></h1>
                    <p>Robust Learning, Endless Creativity</p>
                </div>
            </div>
            <div className="products-home">
                <Products/>

            </div>

        </React.Fragment>
    )
}

export default Home
