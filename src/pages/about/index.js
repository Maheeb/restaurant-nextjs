import Story from "@/components/about/story";
import Chef from "@/components/about/chef";
import SignUp from "@/components/home/SignUp";

function About() {
    return(
        <>
            {/* Title Page */}
            <section
                className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
                style={{ backgroundImage: "url(images/bg-title-page-03.jpg)" }}
            >
                <h2 className="tit6 t-center">About Us</h2>
            </section>

            <Story/>
            <Chef/>
            {/*<SignUp/>*/}
        </>

    )
}
export default About;