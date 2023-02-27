function Lunch(props) {

    const lunches = [
        {
            "id": 1,
            "title": "SED VARIUS",
            "content": "Aenean pharetra tortor dui in pellentesque",
            "price": "29.79",
            "image": "images/lunch-01.jpg"
        },
        {
            "id": 2,
            "title": "TEMPUS ALIQUET",
            "content": "Aenean condimentum ante erat",
            "price": "45.09",
            "image": "images/lunch-02.jpg"
        },
        {
            "id": 3,
            "title": "DUIS MASSA",
            "content": "Proin lacinia nisl ut ultricies posuere nulla",
            "price": "12.75",
            "image": "images/lunch-03.jpg"
        },
        {
            "id": 4,
            "title": "SBRISALONA",
            "content": "Proin lacinia nisl ut ultricies posuere nulla",
            "price": "429.79",
            "image": "images/lunch-04.jpg"
        },
        {
            "id": 5,
            "title": "CRAS EGET MAGNA",
            "content": "Sed fermentum eros vitae eros",
            "price": "45.09",
            "image": "images/lunch-05.jpg"
        },
        {
            "id": 6,
            "title": "NULLAM MAXIMUS",
            "content": "Duis massa nibh porttitor nec imperdiet eget",
            "price": "12.75",
            "image": "images/lunch-06.jpg"
        }
    ];

    return (
        <>
            {/* Lunch */}
            <section className="section-lunch bgwhite">
                <div
                    className="header-lunch parallax0 parallax100"
                    style={{backgroundImage: "url(images/header-menu-01.jpg)"}}
                >
                    <div className="bg1-overlay t-center p-t-170 p-b-165">
                        <h2 className="tit4 t-center">Lunch</h2>
                    </div>
                </div>


                <div className="container">
                    <div className="row p-t-108 p-b-70">
                        {lunches.length > 0 && lunches.map((value, index) => (
                            <div className="col-md-8 col-lg-6 m-l-r-auto">

                                <div className="blo3 flex-w flex-col-l-sm m-b-30">
                                    <div className="pic-blo3 size20 bo-rad-10 hov-img-zoom m-r-28">
                                        <a href="#">
                                            <img src={value.image} alt="IMG-MENU"/>
                                        </a>
                                    </div>
                                    <div className="text-blo3 size21 flex-col-l-m">
                                        <a href="#" className="txt21 m-b-3">
                                            {value.title}
                                        </a>
                                        <span className="txt23">
                     {value.content}
              </span>
                                        <span className="txt22 m-t-20">${value.price}</span>
                                    </div>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>


            </section>
        </>

    )
}


export default Lunch;