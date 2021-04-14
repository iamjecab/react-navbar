import styled from "styled-components";
import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const Container = styled.nav`
    position: relative;
    display: flex;
    width: 100%;
    height: 100px;
    align-items: center;
    box-shadow: 3px 3px 5px gray;
    justify-content: space-between;
`;

export const LogoContainer = styled.div`
    width: 50%;
    margin: 0 10px;
    @media (min-width: 800px) {
        width: 33%;
        display: flex;
        margin: 0 20px;
    }
    @media (min-width: 1100px) {
        justify-content: flex-end;
        padding-right: 15px;
    }
`;

export const Logo = styled.h1`
    font-size: 1.7rem;
    text-shadow: 1px 1px 4px grey;
    color: #49a6e9;
`;

export const IconContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    @media (min-width: 800px) {
        display: none;
    }
`;

export const HamBurgerIcon = styled(TiThMenu)`
    font-size: 1.7rem;
    margin: 0 10px;
    color: #49a6e9;
    cursor: pointer;
    &:hover {
        color: black;
    }
`;

export const CloseIcon = styled(AiOutlineClose)`
    font-size: 1.7rem;
    margin: 0 10px;
    color: #49a6e9;
    cursor: pointer;
    &:hover {
        color: black;
    }
`;

export const Menu = styled.div`
    position: absolute;
    width: 100%;
    height: 200px;
    background-color: red;
    top: 99px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    box-shadow: 3px 3px 5px gray;
`;

export const DesktopMenu = styled.div`
    /* transform: translateX(100%); */
    width: 0%;
    @media (min-width: 800px) {
        width: 33%;
        display: flex;
        justify-content: center;
    }
    @media (min-width: 1100px) {
        justify-content: center;
    }
`;

export const Link = styled.a`
    padding: 5px 5px 5px 15px;
    text-transform: capitalize;
    font-weight: 600;
    color: #324d67;
    cursor: pointer;
    text-decoration: none;
    transition: all 400ms ease;

    &:hover {
        transform: translate(5px);
        background-color: #49a6e9;
    }
    @media (min-width: 800px) {
        padding: 0;
        margin: 0 10px;
        font-size: 17px;
        &:hover {
            color: #49a6e9;
            transform: translate(0);
            background-color: white;
        }
    }
`;

export const SocialsContainer = styled.div`
    width: 0%;
    @media (min-width: 800px) {
        width: 33%;
        display: flex;
        justify-content: flex-end;
        margin: 0 20px;
        font-size: 1rem;
        svg {
            margin-left: 40px;
            cursor: pointer;
            color: #49a6e9;
            &:hover {
                color: black;
            }
        }
    }
    @media (min-width: 1100px) {
        justify-content: flex-start;
        padding-left: 15px;
    }
`;

export const FaceBook = styled(FaFacebookF)``;

export const Twitter = styled(FaTwitter)``;

export const Linkdin = styled(FaLinkedinIn)``;
