import React from "react";
import { Link } from "react-router-dom";
import { FaListCheck, FaPaintbrush } from "react-icons/fa6";
import { IoDocumentAttachOutline } from "react-icons/io5";
import "../styles/pages/index.css";

const IndexPage = (): React.JSX.Element => {
    return (
        <>
            <div className="w-[100dvw] h-[100dvh] bg-gradient-to-tr from-[#111020] to-[#18114B] grid lg:grid-cols-2 place-items-center px-8 xl:px-[14%]">
                <div className="w-full h-full bg-transparent flex flex-col justify-center gap-y-6 max-lg:pt-12">
                    <h4 className="bg-clip-text bg-gradient-to-r from-[#5555FF] to-[#F059EA] xl:text-6xl text-4xl text-transparent font-black message-fade-in max-lg:text-center">
                        WebhookAPI
                    </h4>

                    <p className="bg-transparent text-[#909090] xl:text-xl text-lg font-medium message-fade-in max-lg:text-center">
                        API that allows you to send webhooks via requests in <br className="max-md:hidden" />
                        Minecraft: Bedrock Edition add-ons.
                    </p>

                    <div className="bg-transparent pt-2 flex max-lg:justify-center gap-x-3">
                        <Link to="/documentation" className="duration-150 text-[#FF55FF] bg-transparent border-[3px] font-bold uppercase text-lg p-3 border-[#FF55FF] rounded-sm hover:text-[#F0F0F0] hover:bg-[#FF55FF] message-fade-in">
                            Documentation
                        </Link>

                        <Link to="/installation" className="duration-150 text-[#00AA00] bg-transparent border-[3px] font-bold uppercase text-lg p-3 border-[#00AA00] rounded-sm hover:text-[#F0F0F0] hover:bg-[#00AA00] message-fade-in">
                            INSTALLATION
                        </Link>
                    </div>
                </div>

                <div className="bg-transparent flex flex-col items-end justify-center">
                    <img
                        src="/imgs/showcase.png"
                        alt="/"
                        width={422}
                        height={236}
                        className="bg-transparent rounded-md shadow-md shadow-black rotate-1 select-none image-showcase-fade-in max-sm:scale-75 border-2 border-[#FF55FF]"
                    />

                    <img
                        src="/imgs/showcase.png"
                        alt="/"
                        width={422}
                        height={236}
                        className="bg-transparent rounded-md shadow-md shadow-black rotate-1 -mt-[20%] xl:-mr-[20%] -mr-[10%] select-none image-showcase-fade-in max-sm:scale-75 border-2 border-[#FF55FF]"
                    />
                </div>
            </div>

            <div className="py-16 px-8 lg:px-[14%] grid lg:grid-cols-2 gap-12">
                <div className="bg-transparent flex flex-col gap-y-6 p-6">
                    <h2 className="bg-transparent">
                        Easy to install.
                    </h2>

                    <p className="bg-transparent text-xl text-[#909090] font-medium">
                        Our websites provides <Link to="/installation" className="bg-transparent hover:text-[#FF55FF] duration-150 text-[#6649F0]">lots of installation guides</Link> to make your experience with our API even easier.
                    </p>
                </div>

                <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <FaListCheck
                        size={150}
                        className="bg-transparent fill-[#FF55FF]"
                    />
                </div>
            </div>

            <div className="py-16 px-8 lg:px-[14%] grid lg:grid-cols-2 gap-12 bg-[#141025]">
                <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <FaPaintbrush
                        size={150}
                        className="bg-transparent fill-[#FF55FF]"
                    />
                </div>

                <div className="bg-transparent flex flex-col gap-y-6 p-6">
                    <h2 className="bg-transparent">
                        Customizable.
                    </h2>

                    <p className="bg-transparent text-xl text-[#909090] font-medium">
                        You can set your default embed color, thumbnail URL icon, footer or even extend our embed class. 
                    </p>
                </div>
            </div>

            <div className="py-16 px-8 lg:px-[14%] grid lg:grid-cols-2 gap-12">
                <div className="bg-transparent flex flex-col gap-y-6 p-6">
                    <h2 className="bg-transparent">
                        Well-Documented.
                    </h2>

                    <p className="bg-transparent text-xl text-[#909090] font-medium">
                        If you have got some troubles, while using our API - check <Link to="/installation" className="bg-transparent hover:text-[#FF55FF] duration-150 text-[#6649F0]">in documentation</Link> information about arguments, methods or even copy examples!
                    </p>
                </div>

                <div className="w-full h-full flex items-center justify-center bg-transparent">
                    <IoDocumentAttachOutline
                        size={150}
                        className="bg-transparent stroke-[#FF55FF]"
                    />
                </div>
            </div>
        </>
    );
};

export default IndexPage;