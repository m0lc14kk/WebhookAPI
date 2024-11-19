import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/index.css";

const IndexPage = (): React.JSX.Element => {
    return (
        <>
            <div className="w-[100dvw] h-[100dvh] bg-gradient-to-tr from-[#111020] to-[#18114B] grid grid-cols-2 place-items-center">
                <div className="w-full h-full bg-transparent flex flex-col pl-16 lg:pl-[28%] justify-center gap-y-6">
                    <h1 className="bg-clip-text bg-gradient-to-r from-[#5555FF] to-[#F059EA] text-6xl text-transparent font-black message-fade-in">
                        WebhookAPI
                    </h1>

                    <p className="bg-transparent text-[#909090] text-2xl font-medium message-fade-in">
                        API that allows you to send webhooks via requests in <br />
                        Minecraft: Bedrock Edition add-ons.
                    </p>

                    <div className="bg-transparent pt-2">
                        <Link to="/documentation" className="duration-150 text-[#FF55FF] bg-transparent border-[3px] font-bold uppercase text-lg p-3 border-[#FF55FF] rounded-sm hover:text-[#F0F0F0] hover:bg-[#FF55FF] message-fade-in">
                            Documentation
                        </Link>
                    </div>
                </div>

                <div className="bg-transparent flex flex-col">
                    <img
                        src="/imgs/showcase.png"
                        alt="/"
                        width={422}
                        height={236}
                        className="bg-transparent rounded-md shadow-md shadow-black rotate-1 select-none image-showcase-fade-in"
                    />

                    <img
                        src="/imgs/showcase.png"
                        alt="/"
                        width={422}
                        height={236}
                        className="bg-transparent rounded-md shadow-md shadow-black rotate-1 -mt-[20%] -ml-[20%] select-none image-showcase-fade-in"
                    />
                </div>
            </div>
        </>
    );
};

export default IndexPage;