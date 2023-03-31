import Swal from "sweetalert2";
import {useState} from "react";

function ContactForm() {

    const [name, setInput1] = useState("");
    const [email, setInput2] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setEmail] = useState("");

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",

    });

    const handleChange = event => {
        if (event.target.name === "name") {
            setInput1(event.target.value);
        }
        if (event.target.name === "email") {
            setInput2(event.target.value);
        }
        if (event.target.name === "phone") {
            setPhone(event.target.value);
        }
        if (event.target.name === "message") {
            setEmail(event.target.value);
        }

    };
    const validate = () => {
        let errors = {};
        let formIsValid = true;

        if (!name) {
            formIsValid = false;
            errors["name"] = "Cannot be empty";
        }
        if (!email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }
        if (!phone) {
            formIsValid = false;
            errors["phone"] = "Cannot be empty";
        }
        if (!message) {
            formIsValid = false;
            errors["message"] = "Cannot be empty";
        }

        setErrors(errors);
        return formIsValid;
    };
    const handleSubmit = event => {
        event.preventDefault();

        if (validate()) {
            Swal.fire({
                position: '',
                icon: 'success',
                title: 'Your message has been sent to us !!',
                showConfirmButton: false,
                timer: 1500
            });

            // dispatch(clearCart({type:'yes'}));
            // save the data
            location.reload()
        }
    };


    return(
        <div className="container">
            <h3 className="tit7 t-center p-b-62 p-t-105">Send us a Message</h3>
            <form className="wrap-form-reservation size22 m-l-r-auto" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-md-4">
                        {/* Name */}
                        <span className="txt9">Name*</span>
                        <div className="wrap-inputname size12 bo2 bo-rad-10 m-t-3 m-b-23">
                            <input
                                className="bo-rad-10 sizefull txt10 p-l-20"
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={handleChange}
                            />
                            {errors.name && <p style={{color:'red'}}>{errors.name}</p>}

                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* Email */}
                        <span className="txt9">Email*</span>
                        <div className="wrap-inputemail size12 bo2 bo-rad-10 m-t-3 m-b-23">
                            <input
                                className="bo-rad-10 sizefull txt10 p-l-20"
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleChange}
                            />
                            {errors.email && <p style={{color:'red'}}>{errors.email}</p>}

                        </div>
                    </div>
                    <div className="col-md-4">
                        {/* Phone */}
                        <span className="txt9">Phone*</span>
                        <div className="wrap-inputphone size12 bo2 bo-rad-10 m-t-3 m-b-23">
                            <input
                                className="bo-rad-10 sizefull txt10 p-l-20"
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={phone}
                                onChange={handleChange}
                            />
                            {errors.phone && <p style={{color:'red'}}>{errors.phone}</p>}

                        </div>
                    </div>
                    <div className="col-12">
                        {/* Message */}
                        <span className="txt9">Message*</span>
                        <textarea
                            className="bo-rad-10 size35 bo2 txt10 p-l-20 p-t-15 m-b-10 m-t-3"
                            name="message"
                            placeholder="Message"
                            value={message}
                            onChange={handleChange}
                        />
                        {errors.message && <p style={{color:'red'}}>{errors.message}</p>}

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