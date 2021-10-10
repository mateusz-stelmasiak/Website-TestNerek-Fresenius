import React, {useState} from 'react'
import CheeseburgerMenu from 'cheeseburger-menu'
import HamburgerMenu from 'react-hamburger-menu'
import "./BurgerMenu.css"
import {Link} from "react-router-dom";

export default function BurgerMenu(props) {
    let [menuOpen, setMenuOpen] = useState(false);

    let openMenu = () => {
        setMenuOpen(true);
    }

    let closeMenu = () => {
        setMenuOpen(false);
    }

    //add close menu function call to any clicked link
    const childrenWithProps = React.Children.map(props.children.props.children,
        (child) => {
            if (React.isValidElement(child)) {

                return React.cloneElement(child, {
                    onClick: function () {
                        closeMenu();
                        if (child.props.onClick) {
                            child.props.onClick();
                        }
                    }
                });
            }
            return child;
        });

    return (
        <div className="BurgerMenu">

            <HamburgerMenu
                className='BurgerButton'
                isOpen={menuOpen}
                menuClicked={openMenu}
                width={32}
                height={24}
                strokeWidth={3}
                color='var(--primary-color)'
                animationDuration={0.5}
            />


            <CheeseburgerMenu
                right={true}
                backgroundColor="var(--section-bg-color)"
                isOpen={menuOpen}
                closeCallback={closeMenu}
            >
                <div className="CheeseburgerMenu-content">
                    <HamburgerMenu
                        className='BurgerButton'
                        isOpen={menuOpen}
                        menuClicked={closeMenu}
                        width={32}
                        height={24}
                        strokeWidth={3}
                        rotate={0}
                        color='var(--primary-color)'
                        borderRadius={0}
                        animationDuration={0.5}
                    />

                    {childrenWithProps}
                </div>
            </CheeseburgerMenu>

        </div>

    );
}