import React from 'react'

const Card = (props) => {
    const { productname, desc, price , status} = props;
    return (
        <div>
            <div class="card" style={{width: '20rem', marginLeft: '10px', margin: '0 auto'}}>
                <div class="card-body">
                    <h5 class="card-title">{productname}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">{price}</h6>
                    <p class="card-text">{desc}</p>
                    <p class='card-text'>{status}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;