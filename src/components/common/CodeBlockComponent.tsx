import React from "react";
import type { CodeBlockComponentType } from "./types/CodeBlockComponentType";
import CopyButtonComponent from "./CopyButtonComponent";
import "../../styles/components/common/CodeBlockComponent.css";

const CodeBlockComponent = ({ children, copyText, language }: CodeBlockComponentType): React.JSX.Element => {
    return (
        <>
            <code className="mt-4 rounded-sm px-6 py-3 flex flex-col bg-[#190820] fira-code">
                <div className="bg-transparent flex justify-between">
                    <p className="bg-transparent font-medium text-[#949494] text-lg font-mono">
                        {language}
                    </p>

                    <CopyButtonComponent textToCopy={copyText} />
                </div>

                <hr className="border-none h-[1px] w-full bg-[#94949420] my-2" />
                <p className="bg-transparent text-lg font-mono fira-code">
                    <span className="bg-transparent text-[#404040] overflow-hidden whitespace-nowrap text-ellipsis block max-w-full"></span>
                    <span className="overflow-x-scroll overflow-y-hidden whitespace-nowrap text-ellipsis block max-w-full scrollbar-hidden bg-transparent">
                        {children}
                    </span>
                </p>
            </code>
        </>
    );
};

export default CodeBlockComponent;
