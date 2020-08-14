import React from "react";
import StarIcon from '@material-ui/icons/Star';
import "./Product.css"

function Product({id, title, image, price, rating}){
    return(
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>Rs.</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating).fill().map(function (_){
                            return (<StarIcon/>)
                        })
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button>Add to basket</button>
        </div>


    );
}
export default Product;
