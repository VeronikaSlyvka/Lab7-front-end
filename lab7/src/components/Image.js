import React, { useState } from 'react';

function Image() {
    const [scale, setScale] = useState(1); // Масштаб картинки
    const [isVisible, setIsVisible] = useState(true); // Чи видно картинку

    const addImage = () => setIsVisible(true);
    const removeImage = () => setIsVisible(false);
    const increaseImage = () => setScale(prev => prev + 0.1); // +10%
    const decreaseImage = () => setScale(prev => prev - 0.1); // -10%

    return (
        <div>
             {/* Відображаємо картинку тільки якщо isVisible = true */}
            {isVisible && (
                <div style={{ textAlign: 'center', margin: '20px' }}>
                    <a href="https://en.wikipedia.org/wiki/Fl%C3%A5m" target="_blank" rel="noreferrer">
                        <img 
                            src="Flam.jpg" 
                            alt="Флом" 
                            style={{ width: '600px', transform: `scale(${scale})`, transition: '0.3s' }} 
                        />
                    </a>
                </div>
            )}
            
            <div style={{ marginTop: '50px' }}>
                <button onClick={addImage}>Додати</button>
                <button onClick={increaseImage}>Збільшити</button>
                <button onClick={decreaseImage}>Зменшити</button>
                <button onClick={removeImage}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;