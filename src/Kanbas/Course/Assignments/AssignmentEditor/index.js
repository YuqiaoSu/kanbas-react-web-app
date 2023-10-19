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


            <div className="container align-content-center">
                <div className="row">
                    <form>
                        <div className="col-md-10 mx-auto text-end">
                            <div className="row mb-3">
                                <label htmlFor="pointsInput" className="col-sm-4 col-form-label">Points</label>
                                <div className="col-sm-8">
                                    <input type="number" className="form-control" id="pointsInput" placeholder="100"/>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="AssignmentGroup" className="col-sm-4 col-form-label">Assignment Group</label>
                                <div className="col-sm-8">
                                    <select className="form-select form-control" id="AssignmentGroup">
                                        <option selected value="NONE">ASSIGNMENTS</option>
                                        <option value="HOLD">Hold</option>
                                    </select>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <label htmlFor="display-grade" className="col-sm-4 col-form-label">Display Grade as</label>
                                <div className="col-sm-8">
                                    <select className="form-select" id="display-grade">
                                        <option selected value="NONE">Percentage</option>
                                        <option value="HOLD">Hold</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="form-label col-sm-4"></label>
                                <div className="col-sm-8 text-start">
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" id="noGrade"/>
                                            <label className="form-check-label" htmlFor="noGrade">
                                                Do not count this assignment towards the final grade
                                            </label>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <p className="col-sm-4">Submission Type</p>
                                <div className="col-sm-8 border">
                                    <div className="d-flex flex-column justify-content-start float-left">
                                        <select className="form-select form-control mt-3" >
                                            <option selected value="NONE">Online</option>
                                            <option value="HOLD">Hold</option>
                                        </select>
                                        <div className="container mt-3 text-start">
                                            <label className="form-label mb-3 fw-bold">Online Entry Options</label>

                                            <div className="form-check mb-2 mb-3">
                                                <input className="form-check-input" type="checkbox" id="textEntry"/>
                                                    <label class="form-check-label" htmlFor="textEntry">Text Entry</label>
                                            </div>

                                            <div className="form-check mb-2 mb-3">
                                                <input className="form-check-input" type="checkbox" id="websiteURL"/>
                                                    <label className="form-check-label" htmlFor="websiteURL">Website URL</label>
                                            </div>

                                            <div className="form-check mb-2 mb-3">
                                                <input className="form-check-input" type="checkbox" id="mediaRecording"/>
                                                    <label className="form-check-label" htmlFor="mediaRecording">Media Recordings</label>
                                            </div>

                                            <div className="form-check mb-2 mb-3">
                                                <input className="form-check-input" type="checkbox" id="annotation"/>
                                                    <label className="form-check-label" htmlFor="annotation">Student Annotation</label>
                                            </div>

                                            <div className="form-check mb-2 mb-3">
                                                <input className="form-check-input" type="checkbox" id="uploads"/>
                                                    <label className="form-check-label" htmlFor="uploads">File Uploads</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row mb-3">
                                <p className="col-sm-4">Assign</p>
                                <div className="col-sm-8 border">
                                    <div className="d-flex flex-column pb-5">
                                        <div className="container text-start">
                                            <label className="form-label mb-3 mt-3 fw-bold">Assign to</label>
                                            <div className="border mb-3">
                                                <button type="button" className="btn btn-light">
                                                    Everyone <span className="ms-3 "> <i className="fa fa-times" aria-hidden="true"></i>  </span>
                                                </button>
                                            </div>

                                            <div>
                                                <label className="form-label mb-3 fw-bold" htmlFor="due-date">Due</label>
                                                <input type="date" className="form-control" id="due-date" placeholder="2023-09-08" value="2023-09-08"/>
                                            </div>

                                            <div className="row g-2">
                                                <div className="col">
                                                    <label className="form-label mb-3 fw-bold" htmlFor="available-date">Available from</label>
                                                    <input type="date" className="form-control" id="available-date" placeholder="2023-09-08" value="2023-09-08"/>
                                                </div>
                                                <div className="col">
                                                    <label className="form-label mb-3 fw-bold" htmlFor="until-date">Until</label>
                                                    <input type="date" className="form-control" id="until-date" placeholder="2023-09-08" value="2023-09-08"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="col-sm-4"></span>
                                <button type="button" className="btn btn-light col-sm-8 ">
                                    <span className="ms-3 "> <i className="fa fa-plus" aria-hidden="true"></i>  </span> Add
                                </button>
                            </div>


                        </div>
                    </form>
                </div>
                <hr/>
            </div>


            <div className={"d-flex flex-grow-1 "}>
                <div className="float-left d-flex flex-grow-1 ">
                    <input className="form-check-input" type="checkbox" id="notify"/>
                        <label className="form-check-label" htmlFor="notify">
                            Notify users that this content has changed
                        </label>
                </div>
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