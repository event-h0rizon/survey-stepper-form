'use client'

import React, { useState, useContext } from 'react'
import { motion } from 'framer-motion'
import { SurveyContext } from "@/providers/SurveyProvider";


const Question1 = () => {
    const { delta, selectedValue1, setSelectedValue1 } = useContext(SurveyContext)

    const handleRadioChange = (event: any) => {
        setSelectedValue1(event.target.value);
    };

    return (
        <motion.div
            initial={{ x: `${delta ? '50%' : '-50%'}`, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}>
            <h1>Question 1</h1>
            <div>
                <label className='flex items-center gap-4'>
                    <input
                        type="radio"
                        value="option1"
                        checked={selectedValue1 === 'option1'}
                        onChange={handleRadioChange}
                        className="h-6 w-6 mr-2"
                    />
                    Option 1
                </label>

                <label className='flex items-center gap-4'>
                    <input
                        type="radio"
                        value="option2"
                        checked={selectedValue1 === 'option2'}
                        onChange={handleRadioChange}
                        className="h-6 w-6 mr-2"
                    />
                    Option 2
                </label>

                <label className='flex items-center gap-4'>
                    <input
                        type="radio"
                        value="option3"
                        checked={selectedValue1 === 'option3'}
                        onChange={handleRadioChange}
                        className="h-6 w-6 mr-2"
                    />
                    Option 3
                </label>
            </div>
            <p>Selected value: {selectedValue1}</p>
        </motion.div>
    )
}

export default Question1
