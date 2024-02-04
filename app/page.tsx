'use client'
import { useContext, useState } from "react";
import Question1 from "@/components/questions/Question1";
import Question2 from "@/components/questions/Question2";
import Question3 from "@/components/questions/Question3";
import useSurvey from "@/lib/useSurvey";
import { ReactElement } from "react";
import {motion} from 'framer-motion'
import { SurveyContext } from "@/providers/SurveyProvider";
import StepBar from "@/components/StepBar";

export default function Home() {
  const questionsArray: ReactElement[] = [<Question1 />, <Question2 />, <Question3 />]
  // const [delta, setDelta] = useState(0)

  const { questions, currentQuestion, nextQuestion, previousQuestion, currentIndex, previousIndex, skipToQuestion } = useSurvey(questionsArray)
  return (
    <main className="h-screen w-[100vw] overflow-hidden bg-blue-400 px-6 py-2 text-white">
      <header>
        <div className="text-2xl font-mono font-bold text-center py-2">Take our survey</div>
      </header>
      <div className="flex justify-evenly gap-6 bg-black bg-opacity-25 rounded-lg py-4">
        {questionsArray.map((question, index) =>
          (<StepBar key={index} index={index} currentIndex={currentIndex} skipToQuestion={skipToQuestion}/>))}
      </div>
      <div className="py-6 text-4xl">
        {currentQuestion}
      </div>
      <footer className="flex gap-4 pt-9">
        {currentIndex !== 0 && <button onClick={previousQuestion} className="px-2 py-1 border border-white rounded-lg">Previous</button>}
        {currentIndex !== questions.length - 1 && <button onClick={nextQuestion} className="px-2 py-1 border border-white rounded-lg">Next</button>}
      </footer>
    </main>
  );
}
