import React from "react";
import { Link } from "react-router-dom";
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

                    <div className="bg-transparent pt-2 flex max-lg:justify-center">
                        <Link to="/documentation" className="duration-150 text-[#FF55FF] bg-transparent border-[3px] font-bold uppercase text-lg p-3 border-[#FF55FF] rounded-sm hover:text-[#F0F0F0] hover:bg-[#FF55FF] message-fade-in">
                            Documentation
                        </Link>
                    </div>
                </div>

                <div className="bg-transparent flex flex-col items-end justify-center">
                    <img
                        src="/imgs/showcase.png"
                        alt="/"
                        width={422}
                        height={236}
                        className="bg-transparent rounded-md shadow-md shadow-black rotate-1 select-none image-showcase-fade-in max-sm:scale-75"
                    />

                    <img
                        src="/imgs/showcase.png"
                        alt="/"
                        width={422}
                        height={236}
                        className="bg-transparent rounded-md shadow-md shadow-black rotate-1 -mt-[20%] xl:-mr-[20%] -mr-[10%] select-none image-showcase-fade-in max-sm:scale-75"
                    />
                </div>
            </div>

            <div className="py-16 px-8 lg:px-[14%]">
                <h1>
                    Easy to install!
                </h1>


            </div>
        </>
    );
};

export default IndexPage;