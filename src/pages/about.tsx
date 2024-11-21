import React from "react";
import HeaderComponent from "../components/common/HeaderComponent";
import QuestionComponent from "../components/pages/about/QuestionComponent";
import type { QuestionComponentType } from "../components/pages/about/types/QuestionComponentType";
import { aboutQuestions } from "../config/AboutQuestions";

const AboutPage = (): React.JSX.Element => {
    return (
        <>
            <HeaderComponent
                title="ABOUT"
                description="Basic information about project and it's enviroment."
            />

            <div className="bg-transparent py-16 px-8 lg:px-[14%]">
                <p className="bg-transparent text-[#909090] font-medium text-lg">
                    Main purpose of this project is to provide Minecraft: Bedrock Edition creator developers a much easier way to send messages via webhooks to their Discord channel. This API is providing them types for embeds, possible content to send within message and other utility functions to deal with webhooks even easier. 
                </p>
            </div>

            <div className="bg-[#141025] py-16 px-8 lg:px-[14%]">
                <h3 className="bg-clip-text bg-gradient-to-r from-[#5555FF] to-[#F059EA] text-transparent font-black message-fade-in max-lg:text-center">
                    FAQ
                </h3>

                <p className="bg-transparent text-[#909090] font-medium text-lg pt-2">
                    Frequently asked question about the project.
                </p>

                <div className="bg-transparent flex flex-col gap-y-4 pt-4">
                    {aboutQuestions.map(({ question, answer }: QuestionComponentType) =>                     
                        <QuestionComponent
                            question={question}
                            answer={answer}
                        />
                    )}
                </div>
            </div>
        </>
    );
};
 
export default AboutPage;