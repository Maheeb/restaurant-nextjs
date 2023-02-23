function Menu() {
    return(
        <>
            {/* Our menu */}
            <section className="section-ourmenu bg2-pattern p-t-115 p-b-120">
                <div className="container">
                    <div className="title-section-ourmenu t-center m-b-22">
                        <span className="tit2 t-center">Discover</span>
                        <h3 className="tit5 t-center m-t-2">Our Menu</h3>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-sm-6">
                                    {/* Item our menu */}
                                    <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                                        <img src="images/our-menu-01.jpg" alt="IMG-MENU" />
                                        {/* Button2 */}
                                        <a href="#" className="btn2 flex-c-m txt5 ab-c-m size4">
                                            Lunch
                                        </a>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    {/* Item our menu */}
                                    <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                                        <img src="images/our-menu-05.jpg" alt="IMG-MENU" />
                                        {/* Button2 */}
                                        <a href="#" className="btn2 flex-c-m txt5 ab-c-m size5">
                                            Dinner
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Item our menu */}
                                    <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                                        <img src="images/our-menu-13.jpg" alt="IMG-MENU" />
                                        {/* Button2 */}
                                        <a href="#" className="btn2 flex-c-m txt5 ab-c-m size6">
                                            Happy Hour
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row">
                                <div className="col-12">
                                    {/* Item our menu */}
                                    <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                                        <img src="images/our-menu-08.jpg" alt="IMG-MENU" />
                                        {/* Button2 */}
                                        <a href="#" className="btn2 flex-c-m txt5 ab-c-m size7">
                                            Drink
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Item our menu */}
                                    <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                                        <img src="images/our-menu-10.jpg" alt="IMG-MENU" />
                                        {/* Button2 */}
                                        <a href="#" className="btn2 flex-c-m txt5 ab-c-m size8">
                                            Starters
                                        </a>
                                    </div>
                                </div>
                                <div className="col-12">
                                    {/* Item our menu */}
                                    <div className="item-ourmenu bo-rad-10 hov-img-zoom pos-relative m-t-30">
                                        <img src="images/our-menu-16.jpg" alt="IMG-MENU" />
                                        {/* Button2 */}
                                        <a href="#" className="btn2 flex-c-m txt5 ab-c-m size9">
                                            Dessert
                                        </a>
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
export default Menu;