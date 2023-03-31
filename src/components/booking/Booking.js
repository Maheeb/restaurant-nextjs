import Swal from "sweetalert2";
import {useState} from "react";

function Booking() {
    const [name, setInput1] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setInput2] = useState("");

    const [errors, setErrors] = useState({
        name: "",
        phone: "",
        email: "",

    });

    const handleChange = event => {
        if (event.target.name === "name") {
            setInput1(event.target.value);
        }
        if (event.target.name === "phone") {
            setPhone(event.target.value);
        }
        if (event.target.name === "email") {
            setInput2(event.target.value);
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


        setErrors(errors);
        return formIsValid;
    };
    const handleSubmit = event => {
        event.preventDefault();

        if (validate()) {
            Swal.fire({
                position: '',
                icon: 'success',
                title: 'Congrats, You have placed your booking. We will get back to you !!',
                showConfirmButton: false,
                timer: 20000
            });

            // dispatch(clearCart({type:'yes'}));
            // save the data
            location.reload()
        }
    };
    return(
        <>
            {/* Reservation */}
            <section className="section-reservation bg1-pattern p-t-100 p-b-113">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 p-b-30">
                            <div className="t-center">
                                <span className="tit2 t-center">Reservation</span>
                                <h3 className="tit3 t-center m-b-35 m-t-2">Book table</h3>
                            </div>
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
                                </div>
                                <div className="wrap-btn-booking flex-c-m m-t-6">
                                    {/* Button3 */}
                                    <button
                                        type="submit"
                                        className="btn3 flex-c-m size13 txt11 trans-0-4"
                                    >
                                        Book Table
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="info-reservation flex-w p-t-80">
                        <div className="size23 w-full-md p-t-40 p-r-30 p-r-0-md">
                            <h4 className="txt5 m-b-18">Reserve by Phone</h4>
                            <p className="size25">
                                Donec quis euismod purus. Donec feugiat ligula rhoncus, varius nisl
                                sed, tincidunt lectus.
                                <span className="txt25">Nulla vulputate</span>, lectus vel volutpat
                                efficitur, orci
                                <span className="txt25">lacus sodales</span>
                                sem, sit amet quam:
                                <span className="txt24">(001) 345 6889</span>
                            </p>
                        </div>
                        <div className="size24 w-full-md p-t-40">
                            <h4 className="txt5 m-b-18">For Event Booking</h4>
                            <p className="size26">
                                Donec feugiat ligula rhoncus:
                                <span className="txt24">(001) 345 6889</span>, varius nisl sed,
                                tinci-dunt lectus sodales sem.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}
export default Booking;