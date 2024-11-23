import React from "react";
import { MdNearbyError } from "react-icons/md";

const NotFoundReferenceComponent = (): React.JSX.Element => {
    return (
        <>
            <div className="w-full bg-gradient-to-tr grid lg:grid-cols-2 place-items-center lg:pr-[20%] p-6">
                <div className="bg-transparent flex flex-col items-end justify-center">
                    <MdNearbyError
                        size={200}
                        className="bg-transparent select-none fill-[#949494]"
                    />
                </div>

                <div className="w-full h-full bg-transparent flex flex-col justify-center gap-y-6 max-lg:pt-12">
                    <h3 className="bg-clip-text bg-gradient-to-r from-[#5555FF] to-[#F059EA] text-transparent font-black max-lg:text-center">
                        ERROR: 404
                    </h3>

                    <p className="bg-transparent text-[#909090] text-lg font-medium max-lg:text-center">
                        This subsite does not exist. Do you think this might be an issue? <br className="max-md:hidden" />
                        Contact me on Discord: <span className="bg-transparent text-[#FF55FF]">@m0lc14kk</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default NotFoundReferenceComponent;