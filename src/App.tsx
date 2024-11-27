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
import InterfaceReferencePage from "./pages/subsites/documentation/interface/page";
import TypeReferencePage from "./pages/subsites/documentation/types/page";
import { PUBLIC_URL } from "./utilities/GlobalVariables";

function HomeApp(): React.JSX.Element {
    return (
        <BrowserRouter>
            <NavbarComponent />
            <Routes>
                <Route path={`${PUBLIC_URL}/`} element={<IndexPage />} />
                <Route path={`${PUBLIC_URL}/about`} element={<AboutPage />} />
                <Route path={`${PUBLIC_URL}/installation`} element={<InstallationPage />} />
                <Route path={`${PUBLIC_URL}/documentation`} element={<DocumentationLayout />}>
                    <Route path={`${PUBLIC_URL}/documentation`} element={<DocumentationHomePage />} />
                    <Route path={`${PUBLIC_URL}/documentation/class/:className`} element={<ClassReferencePage />} />
                    <Route path={`${PUBLIC_URL}/documentation/interface/:interfaceName`} element={<InterfaceReferencePage />} />
                    <Route path={`${PUBLIC_URL}/documentation/type/:typeName`} element={<TypeReferencePage />} />
                </Route>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <FooterComponent />
        </BrowserRouter>
    );
};

export default HomeApp;