import React from 'react'
interface MyComponentProps {
  index: number;
  skipToQuestion: (index:number)=>void;
  currentIndex: number
}

// Functional component receiving props with TypeScript types
const StepBar: React.FC<MyComponentProps> = ({ index, skipToQuestion, currentIndex }) => {
  return (
    <div key={index} className="">
      <div onClick={() => skipToQuestion(index)} className={`${currentIndex === index ? 'bg-black' : ''} border-2 border-white rounded-full w-[2rem] h-[2rem] flex justify-center items-center hover:cursor-pointer hover:bg-opacity-55`}>{index + 1}</div>
    </div>
  )
}

export default StepBar
