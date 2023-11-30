import React, { useState } from 'react'
import Card from './Card';
import { dataOfproduct } from './data';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [result, setResult] = useState('');

    function FilterProduct() {
        const price = parseFloat(result);
        const done = dataOfproduct.filter((pro) => pro.product_price <= price);
        setProducts(done);
    }
    return (
        <div>
            <div class="row">
                <div class="col-3 bg-secondary" style={{ height: '32rem' }}>
                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <input class="form-control" type="search" placeholder="Search" onChange={(e) => setResult(e.target.value)} />
                        <button class="btn btn-outline-success" type="submit" onClick={FilterProduct}>Search</button>
                    </div>
                </div>
                <div>
                    {products?.map((item, index) => (
                        <Card productname={item.product_name} price={item.product_price} desc={item.desc} status={item.availability} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product;