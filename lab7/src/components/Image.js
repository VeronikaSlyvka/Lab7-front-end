import React, { useState } from 'react';

function Image() {
    const [imgWidth, setImgWidth] = useState(800); 
    const [isVisible, setIsVisible] = useState(true); 

    const addImage = () => {
        setIsVisible(true);
        setImgWidth(800);
    };

    const removeImage = () => {
        setIsVisible(false);
    };

    const increaseImage = () => {
        setImgWidth(prevWidth => prevWidth + 50); 
    };

    const decreaseImage = () => {
        setImgWidth(prevWidth => (prevWidth > 50 ? prevWidth - 50 : prevWidth)); 
    };

    return (
        <div>
            {isVisible && (
                <div style={{ margin: '20px' }}>
                    <a href="https://en.wikipedia.org/wiki/Fl%C3%A5m" target="_blank" rel="noreferrer">
                        <img 
                            src={process.env.PUBLIC_URL + '/Flam.jpg'}
                            alt="Флом" 
                            style={{ width: `${imgWidth}px`, maxWidth: '100%' }} 
                        />
                    </a>
                </div>
            )}
            
            <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                <button onClick={addImage}>Додати</button>
                <button onClick={increaseImage}>Збільшити</button>
                <button onClick={decreaseImage}>Зменшити</button>
                <button onClick={removeImage}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;