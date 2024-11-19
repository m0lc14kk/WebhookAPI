import React from "react";
import NavbarComponent from "./components/layout/navbar/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import FooterComponent from "./components/layout/footer/FooterComponent";

function HomeApp(): React.JSX.Element {
    return (
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path={`${process.env.PUBLIC_URL}/`} element={<IndexPage />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    );
};

export default HomeApp;