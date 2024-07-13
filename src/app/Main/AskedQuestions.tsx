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
            question: "What should I do if I lack coding experience?",
            answer: "No worries! Workshops will prepare you. Contribute in various ways and learn from the experience!",
        },
        {
            question: "Are students from other disciplines allowed to participate?",
            answer: "Yes! We welcome all backgrounds. Contribute your expertise in project presentation, design, or conceptualization.",
        },
        {
            question: "Do I need to bring my own food?",
            answer: "Lunch and dinner will be provided. Inform us of dietary restrictions when you register. You can also bring your own food or snacks.",
        },
    ];

    const contentQuestionColumnTwo: Question[] = [
        {
            question: "Can non-Langara students register?",
            answer: "Yes! Non-Langara students can join, but at least 50% of your team must be current Langara students.",
        },
        {
            question: "Who is organizing this hackathon?",
            answer: "The hackathon is being organized by the Langara Computer Science Club.",
        },
        {
            question: "What if I don't have a team upon registration?",
            answer: "No problem! Register solo and join team-building events before the hackathon. We recommend forming a team of 3-4 people.",
        },
    ];

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
