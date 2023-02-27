import {useEffect, useState} from "react";

function Album() {
    const albums = {
        "interiors": [
            {
                "id": 13,
                "image": "images/photo-gallery-13.jpg"
            }
            ,
            {
                "id": 14,
                "image": "images/photo-gallery-14.jpg"
            }
            ,
            {
                "id": 15,
                "image": "images/photo-gallery-15.jpg"
            }
        ],
        "foods": [
            {
                "id": 16,
                "image": "images/photo-gallery-16.jpg"
            }
            ,
            {
                "id": 17,
                "image": "images/photo-gallery-17.jpg"
            }
            ,
            {
                "id": 18,
                "image": "images/photo-gallery-18.jpg"
            }
        ],
        "events": [
            {
                "id": 19,
                "image": "images/photo-gallery-19.jpg"
            }
            ,
            {
                "id": 20,
                "image": "images/photo-gallery-20.jpg"
            }
            ,
            {
                "id": 21,
                "image": "images/photo-gallery-21.jpg"
            }
        ],
        "vips": [
            {
                "id": 13,
                "image": "images/photo-gallery-13.jpg"
            }
            ,
            {
                "id": 14,
                "image": "images/photo-gallery-14.jpg"
            }
        ],
    };

    const albumArray = Object.values(albums).flatMap(array => array.map(({id, image}) => ({id, image})));

    // console.log(albumArray);
    const [type, setUpdateType] = useState('all');
    const [items, setItems] = useState(albumArray);
    const [active, setActive] = useState('is-actived');


    const handleClick = (val) => {
        return () => {
            setActive(val)
            if (val==='all') {
                setItems(albumArray)
            }
            else
            {
                const filteredAlbums = Object.keys(albums).filter(key => key === val).map(key => albums[key]);
                setItems(filteredAlbums[0])
            }
            setUpdateType(val)
        }
    }
    // console.log(items)


    return (
        <>
            {/* Gallery */}
            <div className="section-gallery p-t-118 p-b-100">
                <div
                    className="wrap-label-gallery filter-tope-group size27 flex-w flex-sb-m m-l-r-auto flex-col-c-sm p-l-15 p-r-15 m-b-60">
                    <button
                        className={`label-gallery txt26 trans-0-4 ${active==='all' ? 'is-actived' : ''}`}
                        data-filter="*"
                        onClick={handleClick("all")}
                    >
                        All Photo
                    </button>
                    <button className={`label-gallery txt26 trans-0-4 ${active==='interiors' ? 'is-actived' : ''}`} data-filter=".interior"
                            onClick={handleClick("interiors")}>
                        Interior
                    </button>
                    <button className={`label-gallery txt26 trans-0-4 ${active==='foods' ? 'is-actived' : ''}`} data-filter=".food"
                            onClick={handleClick("foods")}>
                        Food
                    </button>
                    <button className={`label-gallery txt26 trans-0-4 ${active==='events' ? 'is-actived' : ''}`} data-filter=".events"
                            onClick={handleClick("events")}>
                        Events
                    </button>
                    <button className={`label-gallery txt26 trans-0-4 ${active==='vips' ? 'is-actived' : ''}`} data-filter=".guests"
                            onClick={handleClick("vips")}>
                        Vip guests
                    </button>
                </div>
                <div className="wrap-gallery isotope-grid flex-w p-l-25 p-r-25">


                    {items.length>0 && items.map((value, index) => (
                    <div className="item-gallery isotope-item bo-rad-10 hov-img-zoom events guests" key={index}>
                        <img src={value.image} alt="IMG-GALLERY"/>
                        <div className="overlay-item-gallery trans-0-4 flex-c-m">
                            <a
                                className="btn-show-gallery flex-c-m fa fa-search"
                                href={value.image}
                                data-lightbox="gallery"
                            />
                        </div>
                    </div>
                    ))}
                </div>
                {/*<div className="pagination flex-c-m flex-w p-l-15 p-r-15 m-t-24 m-b-50">*/}
                {/*    <a*/}
                {/*        href="#"*/}
                {/*        className="item-pagination flex-c-m trans-0-4 active-pagination"*/}
                {/*    >*/}
                {/*        1*/}
                {/*    </a>*/}
                {/*    <a href="#" className="item-pagination flex-c-m trans-0-4">*/}
                {/*        2*/}
                {/*    </a>*/}
                {/*    <a href="#" className="item-pagination flex-c-m trans-0-4">*/}
                {/*        3*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </>

    )
}

export default Album