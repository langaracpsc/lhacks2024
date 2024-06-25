import Footer from "../Footer/footer";
import Header from "../Header/header";
import HandbookUnite from "./HandbookUnite";
import Schedule from "./Schedule";

export default function HandbookPage(){
    return(<>
        <div className="flex flex-col  gap-14 overflow-x-clip">
            <Header/>
            <HandbookUnite/> 
            <Footer />
        </div>
    
    </>)
}