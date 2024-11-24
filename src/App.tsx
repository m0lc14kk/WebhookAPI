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
import ClassReferencePage from "./pages/subsites/documentation/class/page";

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
                    {/**
                     *  to-do: add more handlers
                     */}
                    <Route path={`${base}/documentation/class/:className`} element={<ClassReferencePage />} />
                    <Route path={`${base}/documentation/interface/:interfaceName`} element={<ClassReferencePage />} />
                    <Route path={`${base}/documentation/constant/:constantName`} element={<ClassReferencePage />} />
                    <Route path={`${base}/documentation/types/:typeName`} element={<ClassReferencePage />} />
                    <Route path={`${base}/documentation/enum/:enumName`} element={<ClassReferencePage />} />
                    <Route path={`${base}/documentation/function/:functionName`} element={<ClassReferencePage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    );
};

export default HomeApp;