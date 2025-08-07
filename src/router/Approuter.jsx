import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main";
import ScrollToTop from "./ScrollToTop";
import Hompage from "../components/Hompage";
import PrelineScript from "../PrelineScript";
import AboutPage from "../components/AboutPage";
import ScopePage from "../components/ScopePage";
import EditorialPage from "../components/EditorialPage";
import TracksPage from "../components/TracksPage";
import DatesPage from "../components/DatesPage";
import SubmissionPage from "../components/SubmissionPage";
import ContactPage from "../components/ContactPage";

export default function Approuter() {

    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route element={<Main />}>
                        <Route path='/' element={<Hompage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/scope' element={<ScopePage />} />
                        <Route path='/editorial' element={<EditorialPage />} />
                        <Route path='/Conference-tracks' element={<TracksPage />} />
                        <Route path='/dates' element={<DatesPage />} />
                        <Route path='/paper-submission' element={<SubmissionPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                    </Route>
                </Routes>
                <PrelineScript />
            </BrowserRouter>
        </>
    )
}