import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../../Database";
import "./index.css"
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";

function AssignmentEditor() {
    const {assignmentId} = useParams();
    const assignment = db.assignments.find(
        (assignment) => assignment._id === assignmentId);


    const {courseId} = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div className="ps-2 flex-grow-1 pe-5 justify-content-center">
            <div className="header-bar">
            <span className="text-success pe-3">
                <FaCheckCircle/> Published
            </span>
                <button type="button" className="btn btn-light btn-sm">
                    <FaEllipsisV/>
                </button>
            </div>
            <hr/>
            <div className="mb-3">
                <label htmlFor="nameInput" className="form-label">Assignment Name</label>
                <input
                    type="text" id="nameInput"
                    value={assignment.title}
                    className="form-control mb-2"/>

            <textarea className="form-control mb-3" id="biographyInput" rows="5">This assignment describes how...</textarea>
                <hr/>
            </div>

            <div className={" flex-grow-1 float-end "}>
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                      className="btn btn-danger me-2">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-success ">
                    Save
                </button>
            </div>

        </div>
    );
}


export default AssignmentEditor;