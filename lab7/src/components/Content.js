import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {}; 
    }

    componentDidMount() {
        const allElements = document.querySelectorAll('h1, h2, h3, h4, p, li, a, img');

        allElements.forEach((element, index) => {
            if (!element.id) {
                element.id = `el-${index + 1}`;
            }
        });

        const n = 144;
        const targetIndex1 = (n % 10) + 1; // 5
        const targetIndex2 = targetIndex1 + 1; // 6

        const element1 = document.getElementById(`el-${targetIndex1}`); 
        const element2 = document.querySelector(`#el-${targetIndex2}`);

        if (element1) {
            element1.onclick = () => {
                element1.classList.toggle('active-get');
            };
        }

        if (element2) {
            element2.onclick = () => {
                element2.classList.toggle('active-query');
            };
        }
    }

    render() {
        return (
            <div>
                <h3>Хобі:</h3>
                <ul>
                    <li>Повітряна гімнастика</li>
                    <li>Художня гімнастика</li>
                    <li>Фігурне катання</li>
                    <li>Театр</li>
                </ul>

                <h3>Улюблені серіали:</h3>
                <ol>
                    <li>"Sherlock"</li>
                    <li>"Friends"</li>
                    <li>"Only murders in the bulding"</li>
                    <li>"Deception"</li>
                </ol>

                <p>Флом, Норвегія (норв. Flåm) — невелике селище та популярний туристичний центр у Норвегії, розташоване у фюльке Вестланн. Воно знаходиться у найвнутрішнішій частині Аурландс-фіорду, гілки найдовшого у світі Согне-фіорду. Флом славиться своєю неймовірною природною красою та Фломською залізницею (Flåmsbana), яка вважається однією з наймальовничіших залізничних маршрутів у світі.</p>
                
                <p>Основні пам'ятки Флома:<br />
                - Фломська залізниця: подорож на 20 км від Флома до гористих районів Мюрдал<br />
                - Аурландс-фіорд та Нерой-фіорд: об'єкти Всесвітньої спадщини ЮНЕСКО<br />
                - Велосипедні та піші маршрути через неймовірні ландшафти<br />
                - Музей Фломської залізниці з історією будівництва цього унікального шляху</p>
            </div>
        );
    }
}

export default Content;