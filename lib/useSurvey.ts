'use client'
import { ReactElement, useState, useContext } from "react"
import { motion } from 'framer-motion'
import { SurveyContext } from "@/providers/SurveyProvider";

const useSurvey = (questions: ReactElement[]) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [previousIndex, setPreviousIndex] = useState(0)
    const { delta, setDelta } = useContext(SurveyContext)


    function nextQuestion() {

        if (currentIndex >= questions.length - 1) {

            return
        }
        else
            setPreviousIndex(currentIndex)
        setCurrentIndex(prev => prev + 1)
        setDelta(true)

        

    }
    function previousQuestion() {

        if (currentIndex <= 0) {

            return
        }
        else
            setPreviousIndex(currentIndex)
        setCurrentIndex(prev => prev - 1)
        setDelta(false)



    }
    function skipToQuestion(i: any) {
        setPreviousIndex(currentIndex)
        if(i>currentIndex){
            setDelta(true)
        setCurrentIndex(i)

        }
        else
        setDelta(false)
        setCurrentIndex(i)

        // console.log(i)

    }
    return (
        {
            questions,
            currentIndex,
            previousIndex,
            currentQuestion: questions[currentIndex],
            nextQuestion,
            previousQuestion,
            skipToQuestion
        }
    )
}

export default useSurvey
