import React from "react";
import { Link } from "react-router-dom";
import { FaBook, FaGithub } from "react-icons/fa";
import { FooterCategoryType } from "./types/FooterCategoryType";
import FooterCategory from "./FooterCategory";

const footerCategories: readonly FooterCategoryType[] = [
    {
        name: "HOME",
        links: [
            {
                linkName: "Home",
                linkPath: "/"
            },
            {
                linkName: "About",
                linkPath: "/"
            },
        ]
    },
    {
        name: "BEGINNER",
        links: [
            {
                linkName: "Installation",
                linkPath: "/installation"
            },
        ]
    },
    {
        name: "DEVELOPMENT",
        links: [
            {
                linkName: "Documentation",
                linkPath: "/documentation"
            },
            {
                linkName: "GitHub",
                linkPath: "https://github.com/m0lc14kk/WebhookAPI"
            },
        ]
    },
];

const FooterComponent = (): React.JSX.Element => {
    return (
		<>
			<div className="w-full py-16 px-8 lg:px-[14%] flex flex-col gap-y-6">
				<div className="bg-transparent flex max-lg:flex-col items-center justify-between">
					<div className="bg-transparent flex items-center">
						<Link to="/" className="bg-transparent">
							<img
								src="/imgs/logo.png"
								alt="/"
								width={128}
								height={128}
								className="bg-transparent opacity-40 select-none duration-100 hover:opacity-100 max-lg:py-3"
							/>
						</Link>

						<div className="w-[2px] mx-12 h-24 bg-[#8080800A] max-lg:hidden">

						</div>
					</div>

					<div className="bg-transparent grid max-lg:grid-cols-1 grid-cols-3 gap-x-12 gap-y-6 items-end max-md:pt-8">
						{footerCategories.map(({ name, links }: FooterCategoryType, index: number) => 
							<FooterCategory
								key={index}
								links={links}
                                name={name}
							/>
						)}
					</div>
				</div>

                <hr className="w-full h-[1px] bg-[#90909020] border-none my-4" />

                <div className="w-full flex justify-between items-center">
                    <p className="bg-transparent text-lg text-[#909090] font-medium">
                        Author: <Link to="https://github.com/m0lc14kk" className="bg-transparent hover:text-[#FF55FF] duration-150 text-[#6649F0]">@m0lc14kk</Link>
                    </p>

                    <ul className="flex items-center justify-center gap-x-2">
                        <li className="bg-transparent">
                            <Link to="https://github.com/m0lc14kk/WebhookAPI">
                                <FaBook
                                    size={20}
                                    className="bg-transparent duration-150 fill-[#909090] hover:fill-[#FF55FF]"
                                />
                            </Link>
                        </li>

                        <li className="bg-transparent">
                            <Link to="https://github.com/m0lc14kk">
                                <FaGithub
                                    size={20}
                                    className="bg-transparent duration-150 fill-[#909090] hover:fill-[#FF55FF]"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
			</div>
		</>
    );
};

export default FooterComponent;