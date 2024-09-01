import logo from '../assets/logo.png';
import { LogoPropsType } from '../LogoPropsType';
import './Logo.scss';

export const Logo = ({ classNameContainer, classNameImg }: LogoPropsType) => {
    return (
        <div className={`Logo ${classNameContainer}`}>
            <img className={`Logo__img ${classNameImg}`} src={logo} alt="TAV Music" />
        </div>
    )
}