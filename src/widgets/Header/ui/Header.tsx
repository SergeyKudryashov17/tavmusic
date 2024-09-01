import './Header.scss';
import Logo from "@/shared/ukit/Logo";
import CartBtn from "@/features/CartBtn";
import Navigation from "@/features/Navigation";
import ContactList from '@/features/ContactList';

export const Header = () => {
    return (
        <div className="Header">
            <div className="Header__letfPart">
                <Logo classNameContainer="Logo_header"/>
                <ContactList />
            </div>
                
            <div className="Header__rightPart">
                <Navigation />
                <CartBtn />
            </div>
        </div>
    )
}