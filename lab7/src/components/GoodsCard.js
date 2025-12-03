import React from 'react';
import '../App.css';

function GoodsCard(props) {
    return (
        <div className="goods-card">
            <div className="image-box">
                <img src={props.image} alt={props.name} />
            </div>
            <h3>{props.name}</h3>
            <p>Вартість: <b>{props.price} грн</b></p>
        </div>
    );
}

export default GoodsCard;