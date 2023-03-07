import { Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound";
import CreateSummary from "./Components/CreateSummary";
import RenderSummary from "./Components/RenderSummary";
import Profile from "./Components/Profile";
import Login from "./Components/Login";
import UpdatePassword from "./Components/update";
import ResetPassword from "./Components/reset";
import HomePage from "./Components/HomePage";
import Preloader from "./Components/Preloader";
// import Summary from "./Components/PDFPages";

const RouterRoutes = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/summarize" element={<CreateSummary />} />
                <Route path="/summary" element={<RenderSummary />} />
                <Route path="/user" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/update" element={<UpdatePassword />} />
                <Route path="/reset" element={<ResetPassword />} />
                <Route path="/load" element={<Preloader />} />
                {/* <Route path="/pdfpage" element={<Summary />} /> */}

                <Route path="/*" element={<NotFound />} />
            </Routes>
        </>
    )
}

export default RouterRoutes;