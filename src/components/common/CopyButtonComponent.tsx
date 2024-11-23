import React, { useState } from "react";
import { FaCopy } from "react-icons/fa6";
import type { CopyButtonComponentType } from "./types/CopyButtonComponentType";

const CopyButtonComponent = ({ textToCopy }: CopyButtonComponentType): React.JSX.Element => {
    const [ lastClicked, setLastClicked ] = useState<number>(0);
    const handleClick = () => {
        if (lastClicked > Date.now()) return;
        navigator.clipboard.writeText(textToCopy);
        setLastClicked(Date.now() + 500);
    };
    
    return (
        <>
            <button className="bg-transparent bg-[#141025]" onClick={handleClick}>
                <FaCopy
                    size={20}
                    className="bg-transparent fill-[#949494] duration-150 hover:fill-[#FF55FF]"
                />
            </button>
        </>
    );
};

export default CopyButtonComponent;