import React from "react";
import HeaderComponent from "../../components/common/HeaderComponent";
import "../../styles/pages/installation.css";

const InstallationPage = (): React.JSX.Element => {
    return (
        <>
            <HeaderComponent
                title="INSTALLATION"
                description="Guide covering installation of API."
            />

            <section className="bg-transparent px-8 lg:px-[14%] py-16">
                <p className="bg-transparent text-[#949494] font-medium text-lg">
                    This guide covers up a full cover of process of installation. If you can't get it right, contact with me on Discord: <span className="bg-transparent text-[#FF55FF]">@m0lc14kk</span>
                </p>
            </section>

            <section className="bg-[#141025] px-8 lg:px-[14%] py-16">
                <ol className="bg-transparent list-decimal pl-4 marker:text-lg marker:font-medium marker:text-[#949494]">
                    <li className="bg-transparent">
                        <p className="text-lg font-medium text-[#949494] bg-transparent">
                            Check if your enviroment is supported, that you will use is supported.
                        </p>

                        <div className="bg-transparent grid lg:grid-cols-2 gap-4 py-4">
                            <table className="bg-transparent border-[#94949420] border-[1px] table-fixed">
                                <thead className="bg-transparent text-center">
                                    <th className="bg-transparent font-medium text-[#949494] text-lg">
                                        Enviroment
                                    </th>
                                    <th className="bg-transparent font-medium text-[#949494] text-lg">
                                        Supported?
                                    </th>
                                </thead>
                                <tbody className="bg-transparent">
                                    <tr className="text-center">
                                        <td className="bg-transparent font-medium text-[#949494] text-lg">
                                            Bedrock Dedicated Server
                                        </td>
                                        <td className="bg-transparent font-medium text-[#949494] text-lg">
                                            ✅
                                        </td>
                                    </tr>
                                    <tr className="text-center bg-transparent">
                                        <td className="bg-transparent font-medium text-[#949494] text-lg">
                                            Realms
                                        </td>
                                        <td className="bg-transparent font-medium text-[#949494] text-lg">
                                            ❌
                                        </td>
                                    </tr>
                                    <tr className="text-center">
                                        <td className="bg-transparent font-medium text-[#949494] text-lg">
                                            Worlds
                                        </td>
                                        <td className="bg-transparent font-medium text-[#949494] text-lg">
                                            ❌
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <table className="bg-transparent border-[#94949420] border-[1px]">
                                <thead className="bg-transparent text-center">
                                    <th className="bg-transparent font-medium text-[#949494] text-lg">
                                        Language
                                    </th>
                                    <th className="bg-transparent font-medium text-[#949494] text-lg">
                                        Supported?
                                    </th>
                                </thead>
                                <tbody className="bg-transparent">
                                    <tr className="text-center">
                                        <td className="bg-transparent font-medium text-[#949494] text-lg">
                                            JavaScript
                                        </td>
                                        <td className="bg-transparent font-medium text-[#949494] text-lg">
                                            ✅
                                        </td>
                                    </tr>
                                    <tr className="text-center bg-transparent">
                                        <td className="bg-transparent font-medium text-[#949494] text-lg">
                                            TypeScript
                                        </td>
                                        <td className="bg-transparent font-medium text-[#949494] text-lg">
                                            ✅
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-lg font-medium text-[#949494] bg-transparent">
                            If it's supported, you can go further.
                        </p>
                    </li>
                </ol>
            </section>
        </>
    );
};

export default InstallationPage;