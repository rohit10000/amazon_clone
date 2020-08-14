import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return (
        <div className="home">
            <img className="home__image"
                src="https://ee.co.uk/content/dam/everything-everywhere/images/New_amazon_header.jpg.eeimg.1920.3-1.default.jpg"
                 alt="" />

            <div className="home__row">
                <Product
                    id="1234"
                    title="Henna Montena"
                    price={11.96}
                    rating={5}
                    image={"https://d1478j0kge9vfg.cloudfront.net/homepage/c27ab5188d5f7efcc7bef8715f340a9c_300x442.jpg"}
                />
                <Product
                    id="1234"
                    title="Henna Montena"
                    price={11.96}
                    rating={5}
                    image={"https://d1478j0kge9vfg.cloudfront.net/homepage/c27ab5188d5f7efcc7bef8715f340a9c_300x442.jpg"}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1234"
                    title="Henna Montena"
                    price={11.96}
                    rating={5}
                    image={"https://d1478j0kge9vfg.cloudfront.net/homepage/c27ab5188d5f7efcc7bef8715f340a9c_300x442.jpg"}
                />
                <Product
                    id="1234"
                    title="Henna Montena"
                    price={11.96}
                    rating={5}
                    image={"https://d1478j0kge9vfg.cloudfront.net/homepage/c27ab5188d5f7efcc7bef8715f340a9c_300x442.jpg"}
                />
                <Product
                    id="1234"
                    title="Henna Montena"
                    price={11.96}
                    rating={5}
                    image={"https://d1478j0kge9vfg.cloudfront.net/homepage/c27ab5188d5f7efcc7bef8715f340a9c_300x442.jpg"}
                />
            </div>
            <div className="home__row">
                <Product
                    id="1234"
                    title="Henna Montena"
                    price={11.96}
                    rating={5}
                    image={"https://d1478j0kge9vfg.cloudfront.net/homepage/c27ab5188d5f7efcc7bef8715f340a9c_300x442.jpg"}
                />
            </div>

        </div>

    );
}

export default Home;
