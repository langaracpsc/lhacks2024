
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
            <AccordionItem value="item-1" className="  w-44 border border-white rounded-lg max-[453px]:w-32 hover:border-orange-500  pr-2">
                <AccordionTrigger  ><p>{content.question}</p></AccordionTrigger>
                <AccordionContent className="flex items-center justify-center hover:fill-orange-500">
                    <p>{content.answer}</p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>



    </>)




}

