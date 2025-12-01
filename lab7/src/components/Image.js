import React, { useState } from 'react';

function Image() {
    // Початкова ширина 600px (як було приблизно в прикладі)
    const [imgWidth, setImgWidth] = useState(800); 
    const [isVisible, setIsVisible] = useState(true); 

    const addImage = () => {
        setIsVisible(true);
        setImgWidth(800); // При додаванні повертаємо стандартний розмір
    };

    const removeImage = () => {
        setIsVisible(false);
    };

    const increaseImage = () => {
        // Збільшуємо ширину на 50px (або можна множити: prev * 1.1)
        setImgWidth(prevWidth => prevWidth + 50); 
    };

    const decreaseImage = () => {
        // Зменшуємо, але не даємо стати менше 50px
        setImgWidth(prevWidth => (prevWidth > 50 ? prevWidth - 50 : prevWidth)); 
    };

    return (
        <div>
             {/* Блок картинки */}
            {isVisible && (
                <div style={{ margin: '20px' }}>
                    <a href="https://en.wikipedia.org/wiki/Fl%C3%A5m" target="_blank" rel="noreferrer">
                        <img 
                            src="Flam.jpg" 
                            alt="Флом" 
                            // Тепер ми змінюємо реальну ширину, і контейнер буде розтягуватися
                            style={{ width: `${imgWidth}px`, maxWidth: '100%' }} 
                        />
                    </a>
                </div>
            )}
            
            {/* Блок кнопок */}
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