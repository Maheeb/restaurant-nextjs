import Booking from "@/components/booking/Booking";

function Reservation() {
    return(
        <>
            {/* Title Page */}
            <section
                className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
                style={{ backgroundImage: "url(images/bg-title-page-02.jpg)" }}
            >
                <h2 className="tit6 t-center">Reservation</h2>
            </section>

            <Booking/>
        </>

    )
}
export default Reservation;