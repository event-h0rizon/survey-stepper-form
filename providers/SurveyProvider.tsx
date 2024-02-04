'use client'

import React, {useState, createContext, ReactNode, ReactElement } from 'react';

type ContextType = {
  delta: boolean;
  setDelta: (delta: boolean) => void;
  selectedValue1: string;
  setSelectedValue1: (selectedValue1: string) => void;

};
interface MyComponentProps {
    children: ReactNode;
  }

const SurveyContext = createContext<ContextType>({
  delta: true,
  setDelta: () => {},
  selectedValue1: 'option1',
  setSelectedValue1: () => {},
});

const SurveyProvider: React.FC<MyComponentProps> = ({ children }) => {
  const [delta, setDelta] = useState(true);
  const [selectedValue1, setSelectedValue1] = useState('option1');


  return (
    <SurveyContext.Provider value={{ delta, setDelta, selectedValue1, setSelectedValue1 }}>
      {children}
    </SurveyContext.Provider>
  );
};

export { SurveyContext, SurveyProvider };
