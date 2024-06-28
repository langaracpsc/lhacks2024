
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

        

        <Accordion   type="single" collapsible>
            <AccordionItem isOpen={arrowColor}   value="item-1" className=" w-72 border rounded-lg max-[662px]:w-52  max-[504px]:w-40   pr-2 pl-2">
                <AccordionTrigger onClick={()=>{setArrowColor(!arrowColor)}} isOpen={arrowColor}  ><p className="w-10/12 ">{content.question}</p></AccordionTrigger>
                <AccordionContent  isOpen={arrowColor}  className="  flex items-center justify-center hover:fill-orange-500">
                    <p className=" w-9/12">{content.answer}</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
      



    </>)




}

