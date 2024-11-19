import React from "react";
import { Link } from "react-router-dom";
import { MdNearbyError } from "react-icons/md";

const NotFoundPage = (): React.JSX.Element => {
    return (
        <>
            <div className="w-[100dvw] h-[100dvh] bg-gradient-to-tr from-[#111020] to-[#18114B] grid lg:grid-cols-2 place-items-center px-8 xl:px-[14%]">
                <div className="w-full h-full bg-transparent flex flex-col justify-center gap-y-6 max-lg:pt-12">
                    <h4 className="bg-clip-text bg-gradient-to-r from-[#5555FF] to-[#F059EA] xl:text-6xl text-4xl text-transparent font-black message-fade-in max-lg:text-center">
                        ERROR: 404
                    </h4>

                    <p className="bg-transparent text-[#909090] xl:text-xl text-lg font-medium message-fade-in max-lg:text-center">
                        This subsite does not exist. Do you think this might be an issue? <br className="max-md:hidden" />
                        Contact me on Discord: <span className="bg-transparent text-[#FF55FF]">@m0lc14kk</span>
                    </p>

                    <div className="bg-transparent pt-2 flex max-lg:justify-center gap-x-3">
                        <Link to={`${process.env.PUBLIC_URL}/`} className="duration-150 text-[#FF55FF] bg-transparent border-[3px] font-bold uppercase text-lg p-3 border-[#FF55FF] rounded-sm hover:text-[#F0F0F0] hover:bg-[#FF55FF] message-fade-in">
                            BACK TO HOME
                        </Link>
                    </div>
                </div>

                <div className="bg-transparent flex flex-col items-end justify-center">
                    <MdNearbyError
                        size={200}
                        className="bg-transparent select-none image-showcase-fade-in fill-[#949494]"
                    />
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;