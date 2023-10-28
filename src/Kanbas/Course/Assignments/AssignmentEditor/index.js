import React from "react";
import {useNavigate, useParams, Link} from "react-router-dom";
import db from "../../../Database";
import "./index.css"
import {FaCheckCircle, FaEllipsisV} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {setModule} from "../../Modules/modulesReducer";
import {addAssignment, setAssignment, updateAssignment} from "../assignmentsReducer";
import course from "../../index";

function AssignmentEditor() {
    const assignment = useSelector((state) => state.assignmentsReducer.assignment)
    const {courseId} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {assignmentId} = useParams();

    const handleSave = () => {
        console.log(assignmentId);
        if(assignmentId === "new"){
            console.log((courseId));
            dispatch(addAssignment({...assignment,course: courseId}));
        }
        else{
            dispatch(updateAssignment(assignment));
        }
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
                    onChange={(e) =>
                        dispatch(setAssignment({...assignment, title: e.target.value}))}
                    className="form-control mb-2"/>

            <textarea className="form-control mb-3" id="biographyInput" rows="5" value={assignment.description}
                      onChange={(e) =>
                          dispatch(setAssignment({...assignment, description: e.target.value}))}/>
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
                                <p className="col-sm-4">Assign</p>
                                <div className="col-sm-8 border">
                                    <div className="d-flex flex-column pb-5">
                                        <div className="container text-start">

                                            <div>
                                                <label className="form-label mb-3 mt-3 fw-bold" htmlFor="due-date">Due</label>
                                                <input type="date" className="form-control" id="due-date"
                                                value={assignment.dueDate}

                                                       onChange={(e) =>
                                                           dispatch(setAssignment({...assignment, dueDate: e.target.value}))}/>
                                            </div>

                                            <div className="row g-2">
                                                <div className="col">
                                                    <label className="form-label mb-3 fw-bold" htmlFor="available-date">Available from</label>
                                                    <input type="date" className="form-control" id="available-date"
                                                           value={assignment.availableFromDate}

                                                           onChange={(e) =>
                                                               dispatch(setAssignment({...assignment, availableFromDate: e.target.value}))}/>
                                                <div className="col">
                                                    <label className="form-label mb-3 fw-bold" htmlFor="until-date">Until</label>
                                                    <input type="date" className="form-control" id="until-date"
                                                           value={assignment.availableUntilDate}
                                                           onChange={(e) =>
                                                               dispatch(setAssignment({...assignment, availableUntilDate: e.target.value}))}/>
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