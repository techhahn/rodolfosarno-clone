import styled from 'styled-components';
import {motion} from 'framer-motion';

const Logo = styled.a`
    color: ${(props) => props.theme.fgColor};
    text-decoration: none;
    left: 2%;
    top: 5%;
    font-size: 26px;
    font-style: italic;
    letter-spacing: 6px;
    position: fixed;
    z-index: 8;
`;

const Menu = styled.div`
    position: fixed;
    top: 4.5%;
    right: 2.5%;
    z-index: 1001;
    width: 35px;
    z-index: 8;

    .menu-btn {
        background-color: transparent;
        border: none;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: stretch;
        padding: 0;
        width: 35px;
        cursor: pointer;
        height: 40px;
        transition: opacity 0.5s ease;

        &:focus {
            outline: none;
        }

        &__row {
            height: 27px;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
        }

        &__dot {
            width: 3px;
            height: 3px;
            background-color: ${(props) => props.theme.fgColor};
        }

        &--open {
            z-index: 2;
            position: relative;
            opacity: ${(props) => props.isOpen ? 0 : 1};
        }

        &--close {
            top: 0;
            left: 0;
            z-index: 1;
            position: absolute;

            .menu-btn__row:nth-child(2) {
                justify-content: space-around;
            }

            .menu-btn__dot {
                background-color: #ffffff;
            }
        }
    }
`;

const Navigation = styled(motion.nav)`
    position: fixed;
    left: 0%;
    top: 0%;
    z-index: 7;
    display: flex;
    width: 100%;
    min-height: 100%;
    margin-right: 0px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #2625ff;
`;

const NavContainer = styled(motion.div)`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > .main-links {
        overflow: hidden;
        margin-right: 7%;
        margin-bottom: 5%;
    }
`;

const NavLink = styled(motion.a)`
    display: block;
    color: #ffffff;
    font-size: 115px;
    line-height: 90px;
    letter-spacing: 2.5px;
    text-decoration: none;

    .text {
        display: block;
        margin-bottom: 1.5%;
    }

    .line {
        height: 6px;
        width: 100%;
        display: block;
        transform: scaleX(0);
        transform-origin: 0% 50%;
        background-color: #ffffff;
    }
`;

const FooterContainer = styled.div`
    position: absolute;
    bottom: 10%;
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;

    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;

const NavLinkSM = styled(NavLink)`
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 1px;
    
    .line {
        height: 1px;
    }
`;

const Dot = styled.span`
    width: 3px;
    height: 3px;
    display: block;
    margin-right: 20px;
    margin-left: 20px;
    border-radius: 100px;
    background-color: #fff;
`;

const LineContainer = styled.div`
    position: absolute;
    bottom: 2.5%;
    display: flex;
    width: 80%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;

    .line {
        width: 100%;
        height: 1px;
        justify-content: flex-end;
        background-color: #fff;
        opacity: 0.2;
        transform-origin: 0% 50%;
    }

    .wrapper {
        overflow: hidden;
        margin-top: 1%;

        p {
            align-self: auto;
            color: #fff;
            font-size: 12px;
            line-height: 20px;
            text-align: center;
            letter-spacing: 6px;
            margin: 0;
        }
    }
`;

export {Logo, Menu, Navigation, NavContainer, NavLink, FooterContainer, NavLinkSM, Dot, LineContainer}