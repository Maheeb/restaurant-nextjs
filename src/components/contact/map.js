function Map() {
    return(
        <>
            {/* Map */}
            <div className="container">
                <div className="map bo8 bo-rad-10 of-hidden">
                    <div
                        className="contact-map size37"
                        id="google_map"
                        data-map-x="40.704644"
                        data-map-y="-74.011987"
                        data-pin="images/icons/icon-position-map.png"
                        data-scrollwhell={0}
                        data-draggable={1}
                    />
                </div>
            </div>
        </>

    )
}
export default Map;