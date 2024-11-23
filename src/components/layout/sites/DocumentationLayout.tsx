import React from "react";
import { Outlet } from "react-router-dom";

// to-do: add documentation sidebar
const DocumentationLayout = (): React.JSX.Element => {
    return (
        <>
            <main className="bg-transparent flex w-[100dvw]">
                <aside className="max-lg:hidden bg-transparent">

                </aside>

                <Outlet />
            </main>
        </>
    );
};

export default DocumentationLayout;