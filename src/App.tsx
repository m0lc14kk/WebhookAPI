import React from "react";
import NavbarComponent from "./components/layout/navbar/NavbarComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexPage from "./pages";
import FooterComponent from "./components/layout/footer/FooterComponent";
import NotFoundPage from "./pages/errors/NotFoundPage";
import AboutPage from "./pages/subsites/about";
import InstallationPage from "./pages/subsites/installation";
import DocumentationLayout from "./components/layout/sites/DocumentationLayout";
import DocumentationHomePage from "./pages/subsites/documentation/home";

function HomeApp(): React.JSX.Element {
    const base: string = process.env.PUBLIC_URL || "";

    return (
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path={`${base}/`} element={<IndexPage />} />
                <Route path={`${base}/about`} element={<AboutPage />} />
                <Route path={`${base}/installation`} element={<InstallationPage />} />
                <Route path={`${base}/documentation`} element={<DocumentationLayout />}>
                    <Route path={`${base}/documentation`} element={<DocumentationHomePage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    );
};

export default HomeApp;