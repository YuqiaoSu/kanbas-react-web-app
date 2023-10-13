import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import './index.css'
import Dashboard from "./Dashboard";
import Courses from "./Course";

function Kanbas() {
    return (
        <div className="kanbas">
            <KanbasNavigation />
            <div className={"content_page_wrapper"}>
                <Routes>
                    <Route path="/" element={<Navigate to="Dashboard" />} />
                    <Route path="Account" element={<h1>Account</h1>} />
                    <Route path="Dashboard" element={<Dashboard />} />
                    <Route path="Courses/:courseId/*" element={<Courses />} />
                </Routes>

            </div>
        </div>
    );
}
export default Kanbas;