
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react"


interface QuestionType {
    question: string
    answer:string

}

let state =false

function ChangeColors(){
    
    if(state == false){
        state=true
        return true;
    }else{
        state =false
        return false;
    }
    


}

export default function QuestionBox(content: QuestionType) {

    const[arrowColor,setArrowColor] = useState<boolean>(false)



    return (<>

        <div  >

        <Accordion  type="single" collapsible>
            <AccordionItem isOpen={arrowColor}   value="item-1" className=" w-56 border rounded-lg max-[453px]:w-32   pr-2">
                <AccordionTrigger onClick={()=>{setArrowColor(!arrowColor)}} isOpen={arrowColor}   ><p>{content.question}</p></AccordionTrigger>
                <AccordionContent  isOpen={arrowColor}  className="  flex items-center justify-center hover:fill-orange-500">
                    <p>{content.answer}</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        </div>



    </>)




}

