
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"


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

    return (<>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="  w-44 border border-white rounded-lg max-[418px]:w-32">
                <AccordionTrigger  ><p>{content.question}</p></AccordionTrigger>
                <AccordionContent>
                    <p>{content.answer}</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>



    </>)




}

