function Story() {
    return(
        <>
            {/* Our Story */}
            <section className="bg2-pattern p-t-116 p-b-110 t-center p-l-15 p-r-15">
                <span className="tit2 t-center">Italian Restaurant</span>
                <h3 className="tit3 t-center m-b-35 m-t-5">Our Story</h3>
                <p className="t-center size32 m-l-r-auto">
                    Fusce at risus eget mi auctor pulvinar. Suspendisse maximus venenatis
                    pretium. Orci varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Aliquam purus purus, lacinia a scelerisque in,
                    luctus vel felis. Donec odio diam, dignissim a efficitur at, efficitur et
                    est. Pellentesque semper est ut pulvinar ullamcorper. Class aptent taciti
                    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Nulla et leo accumsan, egestas velit ac, fringilla tortor. Sed varius
                    justo sed luctus mattis.
                </p>
            </section>
            {/* Video */}
            <section
                className="section-video parallax100"
                style={{ backgroundImage: "url(images/header-menu-01.jpg)" }}
            >
                <div className="content-video t-center p-t-225 p-b-250">
                    <span className="tit2 p-l-15 p-r-15">Discover</span>
                    <h3 className="tit4 t-center p-l-15 p-r-15 p-t-3">Our Video</h3>
                    <div
                        className="btn-play ab-center size16 hov-pointer m-l-r-auto m-t-43 m-b-33"
                        data-toggle="modal"
                        data-target="#modal-video-01"
                    >
                        <div className="flex-c-m sizefull bo-cir bgwhite color1 hov1 trans-0-4">
                            <i className="fa fa-play fs-18 m-l-2" aria-hidden="true" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Delicious & Romantic*/}
            <section className="bg1-pattern p-t-120 p-b-105">
                <div className="container">
                    {/* Delicious */}
                    <div className="row">
                        <div className="col-md-6 p-t-45 p-b-30">
                            <div className="wrap-text-delicious t-center">
                                <span className="tit2 t-center">Delicious</span>
                                <h3 className="tit3 t-center m-b-35 m-t-5">RECIPES</h3>
                                <p className="t-center m-b-22 size3 m-l-r-auto">
                                    Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
                                    Sed fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi,
                                    ac facilisis ligula sem id neque.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6 p-b-30">
                            <div className="wrap-pic-delicious size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                                <img src="images/our-story-01.jpg" alt="IMG-OUR" />
                            </div>
                        </div>
                    </div>
                    {/* Romantic */}
                    <div className="row p-t-170">
                        <div className="col-md-6 p-b-30">
                            <div className="wrap-pic-romantic size2 bo-rad-10 hov-img-zoom m-l-r-auto">
                                <img src="images/our-story-02.jpg" alt="IMG-OUR" />
                            </div>
                        </div>
                        <div className="col-md-6 p-t-45 p-b-30">
                            <div className="wrap-text-romantic t-center">
                                <span className="tit2 t-center">Romantic</span>
                                <h3 className="tit3 t-center m-b-35 m-t-5">Restaurant</h3>
                                <p className="t-center m-b-22 size3 m-l-r-auto">
                                    Fusce iaculis, quam quis volutpat cursus, tellus quam varius eros,
                                    in euismod lorem nisl in ante. Maecenas imperdiet vulputate dui
                                    sit amet vestibulum. Nulla quis suscipit nisl.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner */}
            <div
                className="parallax0 parallax100"
                style={{ backgroundImage: "url(images/bg-cover-video-02.jpg)" }}
            >
                <div className="overlay0-parallax t-center size33" />
            </div>
        </>

    )
}
export default Story;
