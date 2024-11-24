/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import HeaderComponent from "../../components/common/HeaderComponent";
import "../../styles/pages/installation.css";
import { Link } from "react-router-dom";
import CodeBlockComponent from "../../components/common/CodeBlockComponent";

const InstallationPage = (): React.JSX.Element => {
    return (
        <>
            <HeaderComponent
                title="INSTALLATION"
                description="Guide covering installation of API."
            />

            <section className="bg-transparent px-8 lg:px-[14%] py-16">
                <p className="bg-transparent text-[#949494] font-medium text-lg">
                    This guide covers up a full cover of process of installation. If you
                    can't get it right, contact with me on Discord:{" "}
                    <span className="bg-transparent text-[#FF55FF]">@m0lc14kk</span>
                </p>
            </section>

            <section className="bg-[#141025] px-8 lg:px-[14%] py-16">
                <ol className="bg-transparent list-decimal pl-4 marker:text-lg marker:font-medium marker:text-[#949494] flex flex-col gap-y-2">
                    <li className="bg-transparent">
                        <p className="text-lg font-medium text-[#949494] bg-transparent">
                        Check if your enviroment is supported, that you will use is
                        supported in{" "}
                            <Link
                                to={`${process.env.PUBLIC_URL}/about`}
                                className="bg-transparent text-[#5555FF] duration-150 hover:text-[#FF55FF]"
                            >
                                about FAQ section.
                            </Link>
                        </p>
                    </li>
                    <li className="bg-transparent">
                        <p className="text-lg font-medium text-[#949494] bg-transparent">
                            Clone our repository from main branch to{" "}
                            <span className="bg-transparent text-[#FF55FF]">scripts</span> or{" "}
                            <span className="bg-transparent text-[#FF55FF]">src</span>{" "}
                            whenether you are using JavaScript (scripts directory) or
                            TypeScript (src or other directory that you have declared in your
                            tsconfig.json file) in your code.
                        </p>

                        <CodeBlockComponent language="terminal" copyText="git clone https://github.com/m0lc14kk/WebhookAPI.git .">
                            <span className="bg-transparent text-[#404040] overflow-hidden whitespace-nowrap text-ellipsis block max-w-full">
                                # Navigate to your directory with scripts and clone the code.
                            </span>
                            <span className="bg-transparent">
                                git clone https://github.com/m0lc14kk/WebhookAPI.git .
                            </span>
                        </CodeBlockComponent>
                    </li>
                    <li className="bg-transparent">
                        <p className="text-lg font-medium text-[#949494] bg-transparent">
                            Check if your BDS has allowed{" "}
                            <span className="bg-transparent text-[#FF55FF]">
                                @minecraft/server-net
                            </span>{" "}
                            module in it's config. If not, then add this your
                            config/default/permissions.json:

                            <CodeBlockComponent copyText="@minecraft/server-net" language="config/default/permissions.json">
                                <span className="bg-transparent">
                                    &#123; <br />
                                </span>
                                <span className="bg-transparent">
                                    <span className="bg-transparent text-[#55FF55] ml-8">
                                        "allowed_modules"
                                    </span>

                                    : [ <br />
                                </span>
                                <span className="bg-transparent text-[#404040] overflow-hidden whitespace-nowrap text-ellipsis block max-w-full ml-16">
                                    // Other @minecraft/* modules <br />
                                </span>
                                <span className="bg-transparent text-[#55FF55] ml-16">
                                    "@minecraft/server-net" <br />
                                </span>
                                <span className="bg-transparent ml-8">
                                    ] <br />
                                </span>
                                <span className="bg-transparent">
                                    &#125;
                                </span>
                            </CodeBlockComponent>
                        </p>
                    </li>
                    <li className="bg-transparent">
                        <p className="text-lg font-medium text-[#949494] bg-transparent">
                            Check if your world has beta API's activated and includes <span className="bg-transparent text-[#FF55FF]">@minecraft/server-net</span> in manifest.json
                        </p>

                        <CodeBlockComponent copyText={`
                            {
                                "module_name": "@minecraft/server-net",
                                "version": "1.0.0-beta"
                            }
                        `} language="manifest.json">
                            <span className="bg-transparent">
                                &#123; <br />
                            </span>
                            <span className="bg-transparent">
                                <span className="bg-transparent text-[#55FF55] ml-8">
                                    "dependencies"
                                </span>

                                : [ <br />
                            </span>
                            <span className="bg-transparent text-[#404040] overflow-hidden whitespace-nowrap text-ellipsis block max-w-full ml-16">
                                // Other @minecraft/* modules <br />
                            </span>
                            <span className="bg-transparent ml-16">
                                &#123; <br />
                            </span>
                            <span className="bg-transparent text-[#55FF55] ml-24">
                                "module_name": "@minecraft/server-net", <br />
                            </span>
                            <span className="bg-transparent text-[#55FF55] ml-24">
                                "version": "1.0.0-beta" <br />
                            </span>
                            <span className="bg-transparent ml-16">
                                &#125; <br />
                            </span>
                            <span className="bg-transparent ml-8">
                                ] <br />
                            </span>
                            <span className="bg-transparent">
                                &#125;
                            </span>
                        </CodeBlockComponent>
                    </li>
                    <li className="bg-transparent">
                        <p className="text-lg font-medium text-[#949494] bg-transparent">
                            You correctly installed our API to your add-on! Import classes, interfaces and more from API's main file that you connected to your pack.
                        </p>
                    </li>
                </ol>
            </section>
        </>
    );
};

export default InstallationPage;
