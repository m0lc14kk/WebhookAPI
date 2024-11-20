import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import type { QuestionComponentType } from "./types/QuestionComponentType";

const QuestionComponent = ({ question, answer }: QuestionComponentType) => {
    const [isToggled, setToggled] = useState<boolean>(false);
    
    return (
        <>
            <div className="bg-transparent flex flex-col">
                <div className="w-full p-6 border-l-[3px] bg-[#101010] border-l-[#FF55FF] flex justify-between items-center cursor-pointer" onClick={(): void => setToggled(!isToggled)}>
                    <h1 className="bg-transparent text-xl">
                        {question}
                    </h1>

                    <IoIosArrowDown
                        size={25}
                        className={`bg-transparent duration-150 ${isToggled ? "-rotate-90" : "rotate-0"}`}
                    />
                </div>

                <p className={`bg-[#121212] text-lg text-[#949494] ${isToggled ? "opacity-100 h-auto p-6" : "min-h-0 h-0 opacity-100 text-transparent"} duration-150`}>
                    {answer}
                </p>
            </div>
        </>
    );
};

export default QuestionComponent;