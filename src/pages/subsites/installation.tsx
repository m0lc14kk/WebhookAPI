/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import HeaderComponent from "../../components/common/HeaderComponent";
import "../../styles/pages/installation.css";
import { Link } from "react-router-dom";
import CopyButtonComponent from "../../components/common/CopyButtonComponent";

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

            <code className="mt-4 rounded-sm px-6 py-3 flex flex-col bg-[#101020]">
              <div className="bg-transparent flex justify-between">
                <p className="bg-transparent font-medium text-[#949494] text-lg font-mono">
                  terminal
                </p>

                <CopyButtonComponent textToCopy="git clone https://github.com/m0lc14kk/WebhookAPI.git" />
              </div>

              <hr className="border-none h-[1px] w-full bg-[#94949420] my-2" />

              <p className="bg-transparent text-lg font-mono">
                <span className="bg-transparent text-[#404040] overflow-hidden whitespace-nowrap text-ellipsis block max-w-full">
                  # Navigate to your directory with scripts and clone the code.
                </span>
                <span className="overflow-hidden whitespace-nowrap text-ellipsis block max-w-full">
                  git clone https://github.com/m0lc14kk/WebhookAPI.git
                </span>
              </p>
            </code>
          </li>
          <li className="bg-transparent">
            <p className="text-lg font-medium text-[#949494] bg-transparent">
              Check if your BDS has allowed{" "}
              <span className="bg-transparent text-[#FF55FF]">
                @minecraft/server-net
              </span>{" "}
              module in it's config. If not, then add this your
              config/default/permissions.json:
              <code className="mt-4 rounded-sm px-6 py-3 flex flex-col bg-[#101020]">
                <div className="bg-transparent flex justify-between">
                  <p className="bg-transparent font-medium text-[#949494] text-lg font-mono">
                    json
                  </p>

                  <CopyButtonComponent textToCopy="@minecraft/server-net" />
                </div>

                <hr className="border-none h-[1px] w-full bg-[#94949420] my-2" />
                <p className="bg-transparent text-lg font-mono">
                  <span className="bg-transparent text-[#404040] overflow-hidden whitespace-nowrap text-ellipsis block max-w-full"></span>
                  <span className="overflow-hidden whitespace-nowrap text-ellipsis block max-w-full">
                    &#123; <br />
                    <span className="bg-transparent text-[#55FF55] ml-8">
                      "allowed_modules"
                    </span>
                    : [ <br />
                    <span className="bg-transparent text-[#404040] overflow-hidden whitespace-nowrap text-ellipsis block max-w-full ml-16">
                      // Other @minecraft/* modules
                    </span>
                    <span className="bg-transparent text-[#55FF55] ml-16">
                      "@minecraft/server-net"
                    </span>{" "}
                    <br />
                    <span className="bg-transparent ml-8">]</span> <br />
                    &#125;
                  </span>
                </p>
              </code>
            </p>
          </li>
          <li className="bg-transparent">
            <p className="text-lg font-medium text-[#949494] bg-transparent">
              Check if your world has beta API's activated and includes{" "}
              <span className="bg-transparent text-[#FF55FF]">
                @minecraft/server-net
              </span>{" "}
              in manifest.json
            </p>

            <code className="mt-4 rounded-sm px-6 py-3 flex flex-col bg-[#101020]">
              <div className="bg-transparent flex justify-between">
                <p className="bg-transparent font-medium text-[#949494] text-lg font-mono">
                  json
                </p>

                <CopyButtonComponent textToCopy="@minecraft/server-net" />
              </div>

              <hr className="border-none h-[1px] w-full bg-[#94949420] my-2" />
              <p className="bg-transparent text-lg font-mono">
                <span className="bg-transparent text-[#404040] overflow-hidden whitespace-nowrap text-ellipsis block max-w-full"></span>
                <span className="overflow-hidden whitespace-nowrap text-ellipsis block max-w-full">
                  &#123; <br />
                  <span className="bg-transparent text-[#55FF55] ml-8">
                    "dependencies"
                  </span>
                  : [ <br />
                  <span className="bg-transparent text-[#404040] overflow-hidden whitespace-nowrap text-ellipsis block max-w-full ml-16">
                    // Other @minecraft/* modules
                  </span>
                  <span className="bg-transparent ml-16">&#123;</span> <br />
                  <span className="bg-transparent text-[#55FF55] ml-24">
                    "module_name": "@minecraft/server-net", <br />
                  </span>
                  <span className="bg-transparent text-[#55FF55] ml-24">
                    "version": "1.0.0-beta" <br />
                  </span>
                  <span className="bg-transparent ml-16">&#125;</span> <br />
                  <span className="bg-transparent ml-8">]</span> <br />
                  &#125;
                </span>
              </p>
            </code>
          </li>
          <li className="bg-transparent">
            <p className="text-lg font-medium text-[#949494] bg-transparent">
              Import our classes and start using our API!
            </p>
          </li>
        </ol>
      </section>
    </>
  );
};

export default InstallationPage;
