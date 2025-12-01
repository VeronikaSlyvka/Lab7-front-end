import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class1: '', // стан для 5-го елемента
            class2: ''  // стан для 6-го елемента
        };
    }

    // Логіка для 5-го елемента (n mod 10 + 1 = 5)
    handleElement1Click = () => {
        this.setState(prevState => ({
            class1: prevState.class1 === 'active-get' ? '' : 'active-get'
        }));
    };

    // Логіка для 6-го елемента (наступний)
    handleElement2Click = () => {
        this.setState(prevState => ({
            class2: prevState.class2 === 'active-query' ? '' : 'active-query'
        }));
    };

    render() {
        return (
            <div>
                <h3>Хобі:</h3>
                <ul>
                    {/* Це 5-й елемент на сторінці (враховуючи h2, p, p, h3 і цей li) */}
                    <li 
                        onClick={this.handleElement1Click} 
                        className={this.state.class1}
                    >
                        Повітряна гімнастика
                    </li>
                    
                    {/* Це 6-й елемент */}
                    <li 
                        onClick={this.handleElement2Click} 
                        className={this.state.class2}
                    >
                        Художня гімнастика
                    </li>
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