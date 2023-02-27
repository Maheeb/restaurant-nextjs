function Map() {
    return(
        <>
            {/* Map */}
            <div className="container">
                <div className="map bo8 bo-rad-10 of-hidden">
                    {/*<div*/}
                    {/*    className="contact-map size37"*/}
                    {/*    id="google_map"*/}
                    {/*    data-map-x="40.704644"*/}
                    {/*    data-map-y="-74.011987"*/}
                    {/*    data-pin="images/icons/icon-position-map.png"*/}
                    {/*    data-scrollwhell={0}*/}
                    {/*    data-draggable={1}*/}
                    {/*/>*/}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd"
                        height="500" width="1400" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                </div>
            </div>
        </>

    )
}
export default Map;