import React, { useEffect, useState } from 'react';


const Header = props => {
    const [getButton, setButton] = useState(false)


    return (
        <header id="header" role="banner" className={getButton ? "menu--open" : ""}>
            <div class="group">

                <a className="logo">
                    <svg width="52" height="52" viewBox="0 0 52 52" xmlns="http://www.w3.org/2000/svg">
                        <title>Mor Shervy Design Limited Logo</title>
                        <g fill="#FFF">
                            <path class="circle" d="M6.188 26c0-10.938 8.875-19.813 19.813-19.813 10.938 0 19.813 8.875 19.813 19.813 0 10.938-8.875 19.813-19.813 19.813-10.938 0-19.813-8.875-19.813-19.813zm-5.188 0c0 13.813 11.188 25 25 25 13.813 0 25-11.188 25-25 0-13.813-11.188-25-25-25-13.813 0-25 11.188-25 25z"></path>
                            <path d="M15.438 22.125h8.625v15.375h-8.625v-15.375zM27.938 14.438h8.625v23.063h-8.625v-23.063z"></path>
                        </g>
                    </svg>
                    <div className="logo-name">
                        <h1>Mor Shervy</h1>
                        <h2>Fron-end Developer</h2>
                    </div>
                </a>

                <button id="mobile-menu" class="menu__button" type="button" aria-controls="nav" onClick={() => setButton(!getButton)}></button>

                <nav id="nav" role="navigation" className="menu">
                    <ul id="menu-nav_menu" className>
                        <li id="menu-item-4166" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-9 current_page_item menu-item-4166 active">
                            <a title="About Mor Shervy - Web Designer & Front-end Developer">
                                ABOUT
                            </a>
                        </li>
                        <li id="menu-item-4167" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-4167">
                            <a title="About Mor Shervy - Web Designer & Front-end Developer">
                                PROTFOLIO
                            </a>
                        </li>
                        <li id="menu-item-4528" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4528">
                            <a title="About Mor Shervy - Web Designer & Front-end Developer">
                                SKILLS
                            </a>
                        </li>
                        <li id="menu-item-4164" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4164">
                            <a title="About Mor Shervy - Web Designer & Front-end Developer">
                                PROJECTS
                            </a>
                        </li>
                        <li id="menu-item-4953" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4953">
                            <a title="About Mor Shervy - Web Designer & Front-end Developer">
                                CONTACT ME
                            </a>
                        </li>
                        <li id="menu-item-4651" className="hire menu-item menu-item-type-post_type menu-item-object-page menu-item-4651">
                            <a title="About Mor Shervy - Web Designer & Front-end Developer">
                                STAM
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </header >
    )
}

export default Header;