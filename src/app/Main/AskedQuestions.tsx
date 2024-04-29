import QuestionBox from "./QuestionBox"



interface Questions{

    
    question:string[]
    answer:string[]

}


export default function AskedQuestions(){

    let contentQuestions: Questions = {
        question :["What is teh event about","-","-","-","-","-","-","-","-","-","-","-"],
        answer:["Is about being friendly","-","-","-","-","-","-","-","-","-","-","-"]
    }


    return(<>
        <div className="flex flex-col border border-white-500 rounded-lg w-11/12 h-fit justify-center align-center gap-7 pt-4 pr-4 pb-4 pl-4">

            <div className="flex justify-center items-center">

                <h1 className=" text-5xl max-[854px]:text-4xl max-[565px]:text-2xl">Frequently Asked Questions</h1>
                
            </div>
            <div className="flex items-center justify-center">
                
            <div className="grid grid-cols-2 gap-3">
                {contentQuestions.question.map(((item, index) => <QuestionBox question={contentQuestions.question[index]} answer={contentQuestions.answer[index]} key={index} />))}

            </div>

            </div>


        </div>
        </>)



}