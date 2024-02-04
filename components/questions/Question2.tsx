'use client'

import React, {useContext} from 'react'
import {motion} from 'framer-motion'
import { SurveyContext } from "@/providers/SurveyProvider";

const Question2 = () => {
  const {delta}= useContext(SurveyContext)

  return (
    <motion.div
    initial={{ x: `${delta?'50%':'-50%'}`, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.3, ease:'easeInOut'}}>
      <h1>Question 2</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus vitae soluta explicabo nobis! Quasi earum quisquam at nesciunt in laboriosam.</p>
    </motion.div>
  )
}

export default Question2
