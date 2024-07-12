
"use client"
import QuestionBox from "./QuestionBox"

import { useState } from "react"


interface Questions {


    question: string[]
    answer: string[]

}


export default function AskedQuestions() {
    let contentQuestionColumnOne: Questions = {
        question: ["What should I do if I lack coding experience?","Are students from other disciplines allowed to participate?","Do I need to bring my own food?"],
        answer: ["No worries! Workshops will prepare you. Contribute in various ways and learn from the experience!","Yes! We welcome all backgrounds. Contribute your expertise in project presentation, design, or conceptualization.","Lunch and dinner will be provided. Inform us of dietary restrictions when you register. You can also bring your own food or snacks."]
    }
    let contentQuestionColumnTwo: Questions = {
        question: ["Can non-Langara students register?","Who is organizing this hackathon?","What if I don't have a team upon registration?"],
        answer: ["Yes! Non-Langara students can join, but at least 50% of your team must be current Langara students.","The hackathon is being organized by the Langara Computer Science Club.","No problem! Register solo and join team-building events before the hackathon. We recommend forming a team of 3-4 people."]
    }


 








    // useEffect(()=>{

    //     sethalfOne(contentQuestions)
    //     sethalfArrayQone(true)


    // },[])


    return (
        <>
       
        <div id="faq"  className="flex flex-col   w-11/12 h-fit justify-center align-center gap-7 pt-4 pr-4 pb-4 pl-4">

            <div className="flex justify-center items-center">

                <h1 className=" text-5xl max-[854px]:text-4xl max-[565px]:text-xl max-[364px]:text-lg">Frequently Asked Questions</h1>

            </div>
            <div className="flex flex-row max-[569px]:flex-col max-[569px]:justify-center max-[569px]:items-center items-baseline justify-center gap-5">


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