import Link from "next/link";

function Welcome() {
    return(
        <>
            {/* Welcome */}
            <section className="section-welcome bg1-pattern p-t-120 p-b-105">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-t-45 p-b-30">
                            <div className="wrap-text-welcome t-center">
                                <span className="tit2 t-center">Italian Restaurant</span>
                                <h3 className="tit3 t-center m-b-35 m-t-5">Welcome</h3>
                                <p className="t-center m-b-22 size3 m-l-r-auto">
                                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                                    Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
                                    ac facilisis ligula sem id neque.
                                </p>
                                <Link href="/about" className="txt4">
                                    Our Story
                                    <i className="fa fa-long-arrow-right m-l-10" aria-hidden="true" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-md-6 p-b-30">
                            <div className="wrap-pic-welcome size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                                <img src="images/our-story-01.jpg" alt="IMG-OUR" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Intro */}
            <section className="section-intro">
                <div
                    className="header-intro parallax100 t-center p-t-135 p-b-158"
                    style={{ backgroundImage: "url(images/bg-intro-01.jpg)" }}
                >
                    <span className="tit2 p-l-15 p-r-15">Discover</span>
                    <h3 className="tit4 t-center p-l-15 p-r-15 p-t-3">Pato Place</h3>
                </div>
                <div className="content-intro bg-white p-t-77 p-b-133">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 p-t-30">
                                {/* Block1 */}
                                <div className="blo1">
                                    <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                                        <a href="#">
                                            <img src="images/intro-01.jpg" alt="IMG-INTRO" />
                                        </a>
                                    </div>
                                    <div className="wrap-text-blo1 p-t-35">
                                        <a href="#">
                                            <h4 className="txt5 color0-hov trans-0-4 m-b-13">
                                                Romantic Restaurant
                                            </h4>
                                        </a>
                                        <p className="m-b-20">
                                            Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
                                            eros.
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-t-30">
                                {/* Block1 */}
                                <div className="blo1">
                                    <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                                        <a href="#">
                                            <img src="images/intro-02.jpg" alt="IMG-INTRO" />
                                        </a>
                                    </div>
                                    <div className="wrap-text-blo1 p-t-35">
                                        <a href="#">
                                            <h4 className="txt5 color0-hov trans-0-4 m-b-13">
                                                Delicious Food
                                            </h4>
                                        </a>
                                        <p className="m-b-20">
                                            Aliquam eget aliquam magna, quis posuere risus ac justo ipsum
                                            nibh urna
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 p-t-30">
                                {/* Block1 */}
                                <div className="blo1">
                                    <div className="wrap-pic-blo1 bo-rad-10 hov-img-zoom">
                                        <a href="#">
                                            <img src="images/intro-04.jpg" alt="IMG-INTRO" />
                                        </a>
                                    </div>
                                    <div className="wrap-text-blo1 p-t-35">
                                        <a href="#">
                                            <h4 className="txt5 color0-hov trans-0-4 m-b-13">
                                                Red Wines You Love
                                            </h4>
                                        </a>
                                        <p className="m-b-20">
                                            Sed ornare ligula eget tortor tempor, quis porta tellus
                                            dictum.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default Welcome;