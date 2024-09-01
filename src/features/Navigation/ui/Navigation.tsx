import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import { getClassName } from '../utils/getClassName';

export const Navigation = () => {
    return (
        <nav className="Navigation">
            <ul className="Navigation__list">
                <li className="Navigation__item">
                    <NavLink to="/" className={getClassName}>Главная</NavLink>
                </li>
                <li className="Navigation__item">
                    <div className={getClassName({isActive: false, isPending: false, isTransitioning: false})}>Каталог</div>
                </li>
                <li className="Navigation__item">
                    <NavLink to="/blog" className={getClassName}>Блог</NavLink>
                </li>
                <li className="Navigation__item">
                    <NavLink to="/about" className={getClassName}>О нас</NavLink>
                </li>
                <li className="Navigation__item">
                    <NavLink to="/delivery" className={getClassName}>Доставка</NavLink>
                </li>
                <li className="Navigation__item">
                    <NavLink to="/contacts" className={getClassName}>Контакты</NavLink>
                </li>
            </ul>
        </nav>
    );
}