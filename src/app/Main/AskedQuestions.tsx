
"use client"
import QuestionBox from "./QuestionBox"

import { useState } from "react"


interface Questions {


    question: string[]
    answer: string[]

}


export default function AskedQuestions() {
    let contentQuestionColumnOne: Questions = {
        question: ["What should I do if I lack coding experience?","Are students from disciplines other than computer science or computer studies allowed to participate?","Do I need to bring my own food?"],
        answer: ["If you're unfamiliar with coding, worry not! We will have multiple workshops to prepare you for the hackathon! Even if coding isn't your strong suit, your participation is still highly encouraged. You can contribute to your team in various other capacities and learn from the experience!","Yes! We encourage students from diverse backgrounds to join in. While programming is a vital component of a hackathon, there are numerous other facets to a successful project. You can contribute your expertise to areas such as project presentation, design, or conceptualization!"," Lunch and dinner will be provided for all participants! Please let us know your dietary restrictions when you register. You are also welcome to bring your own food or snacks!"]
    }
    let contentQuestionColumnTwo: Questions = {
        question: ["Can individuals who are not students at Langara register for the hackathon?","Who is organizing this hackathon?","What if I don't have a team upon registration?"],
        answer: ["Absolutely! We welcome non-Langara students to participate. However, at least 50% of your team must be current Langara students.","The hackathon is being organized by the Langara Computer Science Club.","Don't worry! Even if you don't currently have a team, you can still register for the hackathon. We will have team building events in the days leading up to the hackathon! Although a team isn't mandatory, we highly, highly recommend you to form a team of 3 - 4 people!"]
    }

 








    // useEffect(()=>{

    //     sethalfOne(contentQuestions)
    //     sethalfArrayQone(true)


    // },[])


    return (<>
        <div id="boxOfQuestions" className="flex flex-col border-2 border-white-500 rounded-lg w-11/12 h-fit justify-center align-center gap-7 pt-4 pr-4 pb-4 pl-4">

            <div className="flex justify-center items-center">

                <h1 className=" text-5xl max-[854px]:text-4xl max-[565px]:text-xl max-[364px]:text-lg">Frequently Asked Questions</h1>

            </div>
            <div className="flex flex-row max-[406px]:flex-col max-[406px]:justify-center max-[406px]:items-center items-baseline justify-center gap-5">


                <div className="flex flex-col gap-3 w-fit h-max  ">
                    {contentQuestionColumnOne.question.map(((item, index) => (

                        <QuestionBox question={contentQuestionColumnOne.question[index]} answer={contentQuestionColumnOne.answer[index]} key={index} />
                    )))}

                </div>
                
                <div className="flex flex-col gap-3 w-fit h-max ">
                    {contentQuestionColumnTwo.question.map(((item, index) => (
                        <QuestionBox question={contentQuestionColumnTwo.question[index]} answer={contentQuestionColumnTwo.answer[index]} key={index} />
                    )))}

                </div>






                {/* <div className="flex flex-col gap-3 ">
                {halfArrayAone.map(((item, index) => <QuestionBox question={halfArrayQtwo[index]} answer={halfArrayAtwo[index]} key={index} />))}

            </div> */}

            </div>


        </div>
    </>)



}