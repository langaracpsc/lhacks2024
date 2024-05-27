import Footer from "../Footer/footer";
import About from "./about";
import Events from "./events";
import Execs from "./execs";




export default function aboutUsPage(){


    return(<>

        <div className="flex flex-col  gap-8 overflow-x-clip">
        <About/>
        <Events/>
        <Execs/>
        <Footer/>
        </div>
    
    </>)
}