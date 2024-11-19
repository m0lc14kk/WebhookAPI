import React from "react";
import NavbarComponent from "./components/layout/navbar/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";

function HomeApp(): React.JSX.Element {
    return (
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path="/" element={<IndexPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default HomeApp;