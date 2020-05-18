import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

import {Logo, Menu, Navigation, NavContainer, NavLink, FooterContainer, NavLinkSM, Dot, LineContainer} from './styled';

const MainLink = ({text}) => {
    return(
        <div className="main-links">
            <NavLink href="#" whileHover="hover" initial="initial" variants={{
                open: {
                    y: '0%',
                    transition: {
                        duration: 0.3
                    }
                },
                close: {
                    y: '105%',
                    transition: {
                        duration: 0.3
                    }
                },
                initial: {
                    y: '105%'
                }
            }}>
                <span className="text">{text}</span>
                <motion.span
                    variants={{initial: {scaleX: 0}, hover: {scaleX: 1}}}
                    transition={{duration: 0.4}}
                    className="line"
                ></motion.span>
            </NavLink>
        </div>
    );
}

const FooterLink = ({text}) => {
    return(
        <div className="main-links">
            <NavLinkSM href="#" whileHover="hover" initial="initial">
                <span className="text">{text}</span>
                <motion.span
                    variants={{initial: {scaleX: 1}, hover: {scaleX: 0}}}
                    transition={{duration: 0.3}}
                    className="line"
                ></motion.span>
            </NavLinkSM>
        </div>
    );
}

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const navVariants = {
        open: {
            y: '0%',
            transition: {
                duration: 0.5
            }
        },
        close: {
            y: '-100%',
            transition: {
                delay: 0.8,
                duration: 0.5
            }
        },
    }

    return (
        <>
            <Logo href="#">R.</Logo>

            <Menu
                isOpen={menuOpen}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <button className="menu-btn menu-btn--open">
                    <span className="menu-btn__row">
                        <span className="menu-btn__dot"></span>
                        <span className="menu-btn__dot"></span>
                        <span className="menu-btn__dot"></span>
                    </span>
                    <span className="menu-btn__row">
                        <span className="menu-btn__dot"></span>
                        <span className="menu-btn__dot"></span>
                        <span className="menu-btn__dot"></span>
                    </span>
                    <span className="menu-btn__row">
                        <span className="menu-btn__dot"></span>
                        <span className="menu-btn__dot"></span>
                        <span className="menu-btn__dot"></span>
                    </span>
                </button>
                <button className="menu-btn menu-btn--close">
                    <span className="menu-btn__row">
                        <span className="menu-btn__dot"></span>
                        <span className="menu-btn__dot"></span>
                    </span>
                    <span className="menu-btn__row">
                        <span className="menu-btn__dot"></span>
                    </span>
                    <span className="menu-btn__row">
                        <span className="menu-btn__dot"></span>
                        <span className="menu-btn__dot"></span>
                    </span>
                </button>
            </Menu>

            <AnimatePresence>
                { menuOpen ? <Navigation
                    initial="close"
                    animate={menuOpen ? "open" : "close"}
                    variants={navVariants}
                    exit="close"
                >
                    <NavContainer variants={{
                        open: {
                            transition: {staggerChildren: 0.1, staggerDirection: -1, delayChildren: 0.5, duration: 0.3}
                        },
                        close: {
                            transition: {staggerChildren: 0.1, staggerDirection: -1, delayChildren: 0.3, duration: 0.3}
                        }
                    }}>
                        <MainLink text="About"/>
                        <MainLink text="Work"/>
                    </NavContainer>

                    <FooterContainer>
                        <motion.div className="wrapper"
                            variants={{
                                open: {
                                    y: '0%',
                                    transition: {duration: 0.3, delay: 0.9}
                                },
                                close: {
                                    y: '105%',
                                    transition: {duration: 0.3, delay: 0.2}
                                }
                            }}
                        >
                            <FooterLink text="Hello" />
                            <Dot/>
                            <FooterLink text="In" />
                        </motion.div>
                    </FooterContainer>

                    <LineContainer>
                        <motion.div className="line"
                            variants={{
                                open: {
                                    scaleX: 1,
                                    transition: {duration: 0.3, delay: 1.2}
                                },
                                close: {
                                    scaleX: 0,
                                    transition: {duration: 0.3, delay: 0}
                                }
                            }}
                        ></motion.div>
                        <div className="wrapper">
                            <motion.p
                                variants={{
                                    open: {
                                        y: '0%',
                                        transition: {duration: 0.3, delay: 0.9}
                                    },
                                    close: {
                                        y: '105%',
                                        transition: {duration: 0.3, delay: 0}
                                    }
                                }}
                            >WRK.20</motion.p>
                        </div>
                    </LineContainer>
                </Navigation> : null }
            </AnimatePresence>
        </>
    )
}

export default Header;