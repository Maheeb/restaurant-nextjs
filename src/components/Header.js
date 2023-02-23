function Header() {
    return(
        <>
            {/* Header */}
            <header>
                {/* Header desktop */}
                <div className="wrap-menu-header gradient1 trans-0-4">
                    <div className="container h-full">
                        <div className="wrap_header trans-0-3">
                            {/* Logo */}
                            <div className="logo">
                                <a href="/">
                                    <img
                                        src="images/icons/logo.png"
                                        alt="IMG-LOGO"
                                        data-logofixed="images/icons/logo2.png"
                                    />
                                </a>
                            </div>
                            {/* Menu */}
                            <div className="wrap_menu p-l-45 p-l-0-xl">
                                <nav className="menu">
                                    <ul className="main_menu">
                                        <li>
                                            <a href="/">Home</a>
                                        </li>
                                        <li>
                                            <a href="/menu">Menu</a>
                                        </li>
                                        <li>
                                            <a href="/reservation">Reservation</a>
                                        </li>
                                        <li>
                                            <a href="/gallery">Gallery</a>
                                        </li>
                                        <li>
                                            <a href="/about">About</a>
                                        </li>

                                        <li>
                                            <a href="/contact">Contact</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            {/* Social */}
                            <div className="social flex-w flex-l-m p-r-20">
                                <a href="#">
                                    <i className="fa fa-tripadvisor" aria-hidden="true" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-facebook m-l-21" aria-hidden="true" />
                                </a>
                                <a href="#">
                                    <i className="fa fa-twitter m-l-21" aria-hidden="true" />
                                </a>
                                <button className="btn-show-sidebar m-l-33 trans-0-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

                {/* Sidebar */}
                <aside className="sidebar trans-0-4">
                    {/* Button Hide sidebar */}
                    <button className="btn-hide-sidebar ti-close color0-hov trans-0-4" />
                    {/* - */}
                    <ul className="menu-sidebar p-t-95 p-b-70">
                        <li className="t-center m-b-13">
                            <a href="/" className="txt19">
                                Home
                            </a>
                        </li>
                        <li className="t-center m-b-13">
                            <a href="menu.html" className="txt19">
                                Menu
                            </a>
                        </li>
                        <li className="t-center m-b-13">
                            <a href="gallery.html" className="txt19">
                                Gallery
                            </a>
                        </li>
                        <li className="t-center m-b-13">
                            <a href="about.html" className="txt19">
                                About
                            </a>
                        </li>
                        <li className="t-center m-b-13">
                            <a href="blog.html" className="txt19">
                                Blog
                            </a>
                        </li>
                        <li className="t-center m-b-33">
                            <a href="contact.html" className="txt19">
                                Contact
                            </a>
                        </li>
                        <li className="t-center">
                            {/* Button3 */}
                            <a
                                href="reservation.html"
                                className="btn3 flex-c-m size13 txt11 trans-0-4 m-l-r-auto"
                            >
                                Reservation
                            </a>
                        </li>
                    </ul>
                    {/* - */}
                    <div className="gallery-sidebar t-center p-l-60 p-r-60 p-b-40">
                        {/* - */}
                        <h4 className="txt20 m-b-33">Gallery</h4>
                        {/* gallery */}
                        <div className="wrap-gallery-sidebar flex-w">
                            <a
                                className="item-gallery-sidebar wrap-pic-w"
                                href="images/photo-gallery-01.jpg"
                                data-lightbox="gallery-footer"
                            >
                                <img src="images/photo-gallery-thumb-01.jpg" alt="GALLERY" />
                            </a>
                            <a
                                className="item-gallery-sidebar wrap-pic-w"
                                href="images/photo-gallery-02.jpg"
                                data-lightbox="gallery-footer"
                            >
                                <img src="images/photo-gallery-thumb-02.jpg" alt="GALLERY" />
                            </a>
                            <a
                                className="item-gallery-sidebar wrap-pic-w"
                                href="images/photo-gallery-03.jpg"
                                data-lightbox="gallery-footer"
                            >
                                <img src="images/photo-gallery-thumb-03.jpg" alt="GALLERY" />
                            </a>
                            <a
                                className="item-gallery-sidebar wrap-pic-w"
                                href="images/photo-gallery-05.jpg"
                                data-lightbox="gallery-footer"
                            >
                                <img src="images/photo-gallery-thumb-05.jpg" alt="GALLERY" />
                            </a>
                            <a
                                className="item-gallery-sidebar wrap-pic-w"
                                href="images/photo-gallery-06.jpg"
                                data-lightbox="gallery-footer"
                            >
                                <img src="images/photo-gallery-thumb-06.jpg" alt="GALLERY" />
                            </a>
                            <a
                                className="item-gallery-sidebar wrap-pic-w"
                                href="images/photo-gallery-07.jpg"
                                data-lightbox="gallery-footer"
                            >
                                <img src="images/photo-gallery-thumb-07.jpg" alt="GALLERY" />
                            </a>
                            <a
                                className="item-gallery-sidebar wrap-pic-w"
                                href="images/photo-gallery-09.jpg"
                                data-lightbox="gallery-footer"
                            >
                                <img src="images/photo-gallery-thumb-09.jpg" alt="GALLERY" />
                            </a>
                            <a
                                className="item-gallery-sidebar wrap-pic-w"
                                href="images/photo-gallery-10.jpg"
                                data-lightbox="gallery-footer"
                            >
                                <img src="images/photo-gallery-thumb-10.jpg" alt="GALLERY" />
                            </a>
                            <a
                                className="item-gallery-sidebar wrap-pic-w"
                                href="images/photo-gallery-11.jpg"
                                data-lightbox="gallery-footer"
                            >
                                <img src="images/photo-gallery-thumb-11.jpg" alt="GALLERY" />
                            </a>
                        </div>
                    </div>
                </aside>


        </>

    )
}
export default Header;