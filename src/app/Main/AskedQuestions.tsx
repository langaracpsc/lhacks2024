// "use client"
import QuestionBox from "./QuestionBox";
import { useState } from "react";

interface Question {
    question: string;
    answer: string;
}

export default function AskedQuestions() {
    const contentQuestionColumnOne: Question[] = [
        {
            question: "What should I do if I don't have coding experience?",
            answer: "Don't worry! We will have pre-hackathon workshops in the week leading up to the hackathon to teach you some basic software development skills. Stay tuned for more information!",
        },
        {
            question: "Are students from other disciplines allowed to participate?",
            answer: "Yes! Students from all backgrounds are welcome. There are many other ways that you can contribute such as project presentation, design, or conceptualization.",
        },
        {
            question: "Do I need to bring my own food?",
            answer: "We will be providing meals for both days! Please make sure to inform us of dietary restrictions when you register. You are welcome to bring your own food or snacks.",
        },
        {
            question: "What are the prizes?",
            answer: "Prizes will be announced soon™!",
        },
        {
            question: "What should I bring?",
            answer: "Bring everything and anything you need to stay motivated over the 30 hours of hacking! We reccomend your laptop and charger, chargers for your peripherals, a reusable water bottle, and extra snacks if you need them. We'll provide everything else!"
        },
    ];

    const contentQuestionColumnTwo: Question[] = [
        {
            question: "Can non-Langara students register?",
            answer: "Yes! Non-Langara students are welcome to register.",
        },
        {
            question: "Who is organizing this hackathon?",
            answer: "The hackathon is being organized by the Langara Computer Science Club!",
        },
        {
            question: "What if I don't have a team upon registration?",
            answer: "No problem! We will have tons of team-building opportunities before the hackathon begins.",
        },
        {
            question: "Do I have to join a team?",
            answer: "No, but we highly reccomend forming a team of three to four people. Forming a team is a vital part of the hackathon experience and you will be missing out if you compete by yourself."
        },
        {
            question: "How big can a team be?",
            answer: "A team can have anywhere between one to four people."
        },
        {
            question: "I still have a question!",
            answer: "Feel free to reach out to us at langaracompsciclub@gmail.com ."
        }
    ];
    
    // useEffect(()=>{

    //     sethalfOne(contentQuestions)
    //     sethalfArrayQone(true)


    // },[])


    return (
        <>
            <div className="flex flex-col w-11/12 h-fit justify-center align-center gap-7">
                <div className="flex justify-center items-center">
                    <h1 className="text-5xl max-[854px]:text-4xl max-[565px]:text-xl max-[364px]:text-lg">Frequently Asked Questions</h1>
                </div>
                <div className="flex flex-row max-[569px]:flex-col max-[569px]:justify-center max-[569px]:items-center items-baseline justify-center gap-5">
                    <div className="flex flex-col gap-3 w-fit h-max">
                        {contentQuestionColumnOne.map((qa, index) => (
                            <QuestionBox key={index} question={qa.question} answer={qa.answer} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-3 w-fit h-max">
                        {contentQuestionColumnTwo.map((qa, index) => (
                            <QuestionBox key={index} question={qa.question} answer={qa.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
