import React from "react";

const DocumentationHomePage = (): React.JSX.Element => {
    return (
        <>
            <section className="bg-transparent flex flex-col">
                <article className="w-full h-full p-6  lg:pr-[20%]">
                    <header>
                        <h3 className="bg-transparent">
                            Documentation
                        </h3>

                        <p className="bg-transparent text-[#909090] font-medium text-lg pt-2">
                            This subsite is full documentation, which includes classes with their methods and properties, interfaces, types and functions. Start browsing below to learn new things about Webhook API!
                        </p>
                    </header>
                </article>

                <article className="bg-transparent w-full h-full px-6  lg:pr-[20%]">
                    
                </article>
            </section>
        </>
    );
};

export default DocumentationHomePage;