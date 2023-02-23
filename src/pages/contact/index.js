import Map from "@/components/contact/map";
import ContactForm from "@/components/contact/ContactForm";

function Contact() {
    return(
        <>
            {/* Title Page */}
            <section
                className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
                style={{ backgroundImage: "url(images/bg-title-page-02.jpg)" }}
            >
                <h2 className="tit6 t-center">Contact</h2>
            </section>

            <section className="section-contact bg1-pattern p-t-90 p-b-113">

                <Map/>
                <ContactForm/>
            </section>

        </>

    )
}
export default Contact;