import React from "react";
import { Link } from "react-router-dom";
import { FaListCheck, FaPaintbrush } from "react-icons/fa6";
import { IoDocumentAttachOutline } from "react-icons/io5";
import "../styles/pages/index.css";
import { PUBLIC_URL } from "../utilities/GlobalVariables";
import CodeBlockComponent from "../components/common/CodeBlockComponent";

const IndexPage = (): React.JSX.Element => {
    return (
        <>
            <main className="w-[100dvw] h-[100dvh] bg-gradient-to-tr from-[#111020] to-[#18114B] grid lg:grid-cols-2 place-items-center px-8 xl:px-[14%]">
                <section className="w-full h-full bg-transparent flex flex-col justify-center gap-y-6 max-lg:pt-12">
                    <h4 className="bg-clip-text bg-gradient-to-r from-[#5555FF] to-[#F059EA] xl:text-6xl text-4xl text-transparent font-black message-fade-in max-lg:text-center">
                        Webhook API
                    </h4>

                    <p className="bg-transparent text-[#909090] xl:text-xl text-lg font-medium message-fade-in max-lg:text-center">
                        API that allows you to send webhooks via requests in <br className="max-md:hidden" />
                        Minecraft: Bedrock Edition add-ons.
                    </p>

                    <nav className="bg-transparent pt-2 flex max-lg:justify-center gap-x-3 message-fade-in">
                        <Link to={`${PUBLIC_URL}/documentation`} className="duration-150 text-[#FF55FF] bg-transparent border-[3px] font-bold uppercase text-lg p-3 border-[#FF55FF] rounded-sm hover:text-[#F0F0F0] hover:bg-[#FF55FF]">
                            Documentation
                        </Link>

                        <Link to={`${PUBLIC_URL}/installation`} className="duration-150 text-[#5555FF] bg-transparent border-[3px] font-bold uppercase text-lg p-3 border-[#5555FF] rounded-sm hover:text-[#F0F0F0] hover:bg-[#5555FF]">
                            INSTALLATION
                        </Link>
                    </nav>
                </section>

                <figure className="bg-transparent flex flex-col items-end justify-center">
                    <img
                        src={`${PUBLIC_URL}/imgs/showcase.png`}
                        alt="/"
                        width={422}
                        height={236}
                        className="bg-transparent rounded-md shadow-md shadow-black select-none image-showcase-fade-in max-sm:scale-75 border-2 border-[#FF55FF]"
                    />

                    <img
                        src={`${PUBLIC_URL}/imgs/showcase.png`}
                        alt="/"
                        width={422}
                        height={236}
                        className="bg-transparent rounded-md shadow-md shadow-black -mt-[20%] xl:-mr-[20%] -mr-[10%] select-none image-showcase-fade-in max-sm:scale-75 border-2 border-[#FF55FF]"
                    />
                </figure>
            </main>

            <article className="py-16 px-8 lg:px-[14%] grid lg:grid-cols-2 gap-12">
                <div className="bg-transparent flex flex-col gap-y-6 p-6">
                    <h2 className="bg-transparent">
                        Easy to install.
                    </h2>

                    <p className="bg-transparent text-xl text-[#909090] font-medium">
                        Our websites provides <Link to={`${PUBLIC_URL}/installation`} className="bg-transparent hover:text-[#FF55FF] duration-150 text-[#6649F0]">lots of installation guides</Link> to make your experience with our API even easier.
                    </p>
                </div>

                <figure className="w-full h-full flex items-center justify-center bg-transparent">
                    <FaListCheck
                        size={150}
                        className="bg-transparent fill-[#FF55FF]"
                    />
                </figure>
            </article>

            <article className="py-16 px-8 lg:px-[14%] grid lg:grid-cols-2 gap-12 bg-[#141025]">
                <div className="overflow-x-auto bg-transparent">
                    <CodeBlockComponent 
                        language="Main.js" 
                        copyText={`import { EmbedUtility } from "../path/to/API"

            EmbedUtility.configuration.embedColor = 0xFFAA00;`}
                    >
                        <span className="bg-transparent text-[#FF9999]">import</span> &#123; <span className="bg-transparent text-[#CCCCFF]">EmbedUtility</span> &#125; from <span className="bg-transparent text-[#CCCCFF]">"../path/to/API"</span>; <br />
                        <br />
                        <span className="bg-transparent text-[#CCCCFF]">EmbedUtility</span>.configuration.embedColor = <span className="bg-transparent text-[#FFAA00]">0xFFAA00</span>;
                    </CodeBlockComponent>
                </div>

                <div className="bg-transparent flex flex-col gap-y-6 p-6">
                    <h2 className="bg-transparent">
                        Customizable.
                    </h2>

                    <p className="bg-transparent text-xl text-[#909090] font-medium">
                        You can set your default embed color, extend our embed class that we provide to have even better experience.
                    </p>
                </div>
            </article>


            <article className="py-16 px-8 lg:px-[14%] grid lg:grid-cols-2 gap-12">
                <div className="bg-transparent flex flex-col gap-y-6 p-6">
                    <h2 className="bg-transparent">
                        Well-Documented.
                    </h2>

                    <p className="bg-transparent text-xl text-[#909090] font-medium">
                        If you have got some troubles, while using our API - check <Link to={`${PUBLIC_URL}/documentation`} className="bg-transparent hover:text-[#FF55FF] duration-150 text-[#6649F0]">in documentation</Link> information about arguments, methods or even copy examples!
                    </p>
                </div>

                <figure className="w-full h-full flex items-center justify-center bg-transparent">
                    <IoDocumentAttachOutline
                        size={150}
                        className="bg-transparent stroke-[#FF55FF]"
                    />
                </figure>
            </article>
        </>
    );
};

export default IndexPage;