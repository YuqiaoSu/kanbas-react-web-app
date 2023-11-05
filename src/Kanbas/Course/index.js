import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import "./index.css"
import Breadcrumb from "./Breadcrumb";
import Modules from "./Modules";
import Home from "./home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";
function Courses({ courses, URL }) {
    const { courseId } = useParams();
    const [course, setCourse] = useState({});
    const findCourseById = async (courseId) => {
        const response = await axios.get(
            `${URL}/${courseId}`
        );
        setCourse(response.data);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);

    return (
        <>
            <Breadcrumb/>
            <div className={"home-content"}>
                <CourseNavigation course = {course}/>
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route
                            path="Assignments/:assignmentId"
                            element={<AssignmentEditor/>}/>
                        />
                        <Route path="Grades" element={<Grades />} />
                    </Routes>
            </div>
        </>
    );
}
export default Courses;