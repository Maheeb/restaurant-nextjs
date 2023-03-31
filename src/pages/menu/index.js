import Menus from "@/components/menu/Menus";
import Lunch from "@/components/menu/Lunch";
import Dinner from "@/components/menu/Dinner";
import SignUp from "@/components/home/SignUp";

function Menu() {
return(
    <>
        {/* Title Page */}
        <section
            className="bg-title-page flex-c-m p-t-160 p-b-80 p-l-15 p-r-15"
            style={{ backgroundImage: "url(images/bg-title-page-01.jpg)" }}
        >
            <h2 className="tit6 t-center">Pato Menu</h2>
        </section>

       <Menus/>
        <Lunch/>
        <Dinner/>
        {/*<SignUp/>*/}
    </>

)
}
export default Menu;