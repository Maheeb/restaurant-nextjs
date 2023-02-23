function ContactForm() {
    return(
        <div className="container">
            <h3 className="tit7 t-center p-b-62 p-t-105">Send us a Message</h3>
            <form className="wrap-form-reservation size22 m-l-r-auto">
                <div className="row">
                    <div className="col-md-4">
                        {/* Name */}
                        <span className="txt9">Name</span>
                        <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                            <input
                                className="bo-rad-10 sizefull txt10 p-l-20"
                                type="text"
                                name="name"
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* Email */}
                        <span className="txt9">Email</span>
                        <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                            <input
                                className="bo-rad-10 sizefull txt10 p-l-20"
                                type="text"
                                name="email"
                                placeholder="Email"
                            />
                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* Phone */}
                        <span className="txt9">Phone</span>
                        <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                            <input
                                className="bo-rad-10 sizefull txt10 p-l-20"
                                type="text"
                                name="phone"
                                placeholder="Phone"
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Message */}
                        <span className="txt9">Message</span>
                        <textarea
                            className="bo-rad-10 size35 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-3"
                            name="message"
                            placeholder="Message"
                            defaultValue={""}
                        />
                    </div>
                </div>
                <div className="wrap-btn-booking flex-c-m m-t-13">
                    {/* Button3 */}
                    <button type="submit" className="btn3 flex-c-m size36 txt11 trans-0-4">
                        Submit
                    </button>
                </div>
            </form>
            <div className="row p-t-135">
                <div className="col-sm-8 col-md-4 col-lg-4 m-l-r-auto p-t-30">
                    <div className="dis-flex m-l-23">
                        <div className="p-r-40 p-t-6">
                            <img src="images/icons/map-icon.png" alt="IMG-ICON" />
                        </div>
                        <div className="flex-col-l">
                            <span className="txt5 p-b-10">Location</span>
                            <span className="txt23 size38">
            8th floor, 379 Hudson St, New York, NY 10018
          </span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-md-3 col-lg-4 m-l-r-auto p-t-30">
                    <div className="dis-flex m-l-23">
                        <div className="p-r-40 p-t-6">
                            <img src="images/icons/phone-icon.png" alt="IMG-ICON" />
                        </div>
                        <div className="flex-col-l">
                            <span className="txt5 p-b-10">Call Us</span>
                            <span className="txt23 size38">(+1) 96 716 6879</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-8 col-md-5 col-lg-4 m-l-r-auto p-t-30">
                    <div className="dis-flex m-l-23">
                        <div className="p-r-40 p-t-6">
                            <img src="images/icons/clock-icon.png" alt="IMG-ICON" />
                        </div>
                        <div className="flex-col-l">
                            <span className="txt5 p-b-10">Opening Hours</span>
                            <span className="txt23 size38">
            09:30 AM – 11:00 PM <br />
            Every Day
          </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default ContactForm