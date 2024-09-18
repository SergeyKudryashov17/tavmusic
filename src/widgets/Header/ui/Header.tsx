import './Header.scss';
import Logo from "@/shared/ukit/Logo";
import CartBtn from "@/features/CartBtn";
import Navigation from "@/features/Navigation";
import ContactList from '@/features/ContactList';
import Container from '@/shared/ukit/Container';

export const Header = () => {
    return (
        <div className="Header">
            <Container>
                <div className="Header__wrapper">
                    <div className="Header__letfPart">
                        <Logo classNameContainer="Logo_header"/>
                        <ContactList />
                    </div>
                        
                    <div className="Header__rightPart">
                        <Navigation />
                        <CartBtn productCount={1}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}