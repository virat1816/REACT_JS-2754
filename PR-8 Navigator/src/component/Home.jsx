import React, { useEffect, useState } from 'react'
import { dataOfproduct } from './data'
import Card from './Card';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const filterData = () => {
            const filterProduct = dataOfproduct.filter((pro) => pro.availability === true);
            setProducts(filterProduct);
        };
        filterData()
    }, []);
    return (
        <>
            <div className='row md-4'>
                {products?.map((item, index) => (
                    <Card productname={item.product_name} price={item.product_price} desc={item.desc} status={item.availability} />
                ))}
            </div>
        </>
    )
}

export default Home;