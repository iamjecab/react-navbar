import React, { useState } from "react";
import {
    Container,
    LogoContainer,
    Logo,
    IconContainer,
    HamBurgerIcon,
    CloseIcon,
    Menu,
    Link,
    SocialsContainer,
    FaceBook,
    Twitter,
    Linkdin,
    DesktopMenu,
} from "./NavbarElements";

const Navbar = ({ links }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showHamburger, setshowHamburger] = useState(true);

    const clickHandler = () => {
        setShowMenu(!showMenu);
        setshowHamburger(!showHamburger);
    };
    return (
        <>
            <Container>
                <LogoContainer>
                    <Logo>Codding Addict</Logo>
                </LogoContainer>
                {showMenu ? (
                    <Menu>
                        {links.map((link, index) => {
                            return <Link key={index}>{link}</Link>;
                        })}
                    </Menu>
                ) : null}
                <IconContainer>
                    {showHamburger ? (
                        <HamBurgerIcon onClick={clickHandler} />
                    ) : (
                        <CloseIcon onClick={clickHandler} />
                    )}
                </IconContainer>
                <DesktopMenu>
                    {links.map((link, index) => {
                        return <Link key={index}>{link}</Link>;
                    })}
                </DesktopMenu>
                <SocialsContainer>
                    <FaceBook />
                    <Twitter />
                    <Linkdin />
                </SocialsContainer>
            </Container>
        </>
    );
};

export default Navbar;
