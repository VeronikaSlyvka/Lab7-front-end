import React from 'react';
import GoodsCard from './GoodsCard';
import '../App.css';

function GoodsGallery() {
    const goods = [
        { id: 1, name: 'Aerial silk | Medium stretch', price: 2500, image: 'goods/silk.jpg' },
        { id: 2, name: 'Aerial Rope | Corde lisse | 8m', price: 2100, image: 'goods/rope.jpg' },
        { id: 3, name: 'Aerial Spiral - 7 Feet', price: 9000, image: 'goods/spiral.jpg' },
        { id: 4, name: 'Aerial Straps | PRO Velvet', price: 1800, image: 'goods/straps.jpg' },
        { id: 5, name: 'Cloud Swing | Ecru | 6m', price: 2200, image: 'goods/swing.jpg' },
        { id: 6, name: 'Trapeze | Fixed Trapeze', price: 3500, image: 'goods/trapeze.jpg' },
        { id: 7, name: 'HOME Quadripod', price: 17000, image: 'goods/quadripod.jpg' },
        { id: 8, name: 'Aerial Pole | Chinese Pole', price: 12000, image: 'goods/pole.jpg' },
    ];

    return (
        <div className="gallery-container">
            <h2>Магазин спорядження для повітряної гімнастики</h2>
            <div className="goods-grid">
                {goods.map(item => (
                    <GoodsCard 
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                    />
                ))}
            </div>
        </div>
    );
}

export default GoodsGallery;