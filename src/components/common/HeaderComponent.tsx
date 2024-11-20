import React from "react";
import type { HeaderComponentType } from "./types/HeaderComponentType";

const HeaderComponent = ({ title, description }: HeaderComponentType): React.JSX.Element => {
    return (
        <>
            <div className="w-[100dvw] h-[50dvh] bg-gradient-to-tr from-[#111020] to-[#18114B] px-8 lg:px-[14%] flex flex-col justify-center">
                <h4 className="bg-clip-text bg-gradient-to-r from-[#5555FF] to-[#F059EA] xl:text-6xl text-4xl text-transparent font-black message-fade-in max-lg:text-center">
                    {title}
                </h4>

                <p className="bg-transparent text-[#909090] xl:text-xl text-lg font-medium message-fade-in max-lg:text-center pt-2">
                    {description}
                </p>
            </div>
        </>
    );
};

export default HeaderComponent;