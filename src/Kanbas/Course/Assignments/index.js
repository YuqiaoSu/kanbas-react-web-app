import {React, useEffect, useState} from "react";
import { Link, useParams } from "react-router-dom";
import "./index.css";
import {useSelector, useDispatch} from "react-redux";
import {FaPlus, FaEllipsisV, FaEdit, FaCheckCircle, FaGripVertical} from 'react-icons/fa';
import {setAssignment, newAssignment, deleteAssignment, setAssignments, addAssignment} from "./assignmentsReducer";
import PopUp from "../../PopUp";
import Popup from 'reactjs-popup';
import * as service from "./service";
import * as client from "../Modules/client";
import {addModule} from "../Modules/modulesReducer";
function Assignments() {
    const { courseId } = useParams();
    const [isPop, setIsPop] = useState(false);
    const assignments = useSelector((state) => state.assignmentsReducer.assignments)
    let assignment = useSelector((state) => state.assignmentsReducer.assignment)
    const dispatch = useDispatch();
    const handleYes = () => {
        service.deleteAssignment(assignment).then(() => {
            dispatch(deleteAssignment(assignment));
        });

        setIsPop(false);
    };

    const handleNo = () => {
        console.log('No clicked!');
        setIsPop(false);
    };


    const handleDelete = (assignment) =>{
        dispatch(setAssignment(assignment))
        setIsPop(true)
    }
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
    useEffect(() => {
        service.findModulesForCourse(courseId)
            .then((assignments) =>
                dispatch(setAssignments(assignments))
            );
    }, [courseId]);

    return (
        <div className="ps-2 flex-grow-1 pe-5">
            <div className="d-flex align-items-center">
                <div className="form-group float-start">
                    <input type="text" className="form-control" placeholder="Search for Assignment" />
                </div>
                <div className="header-bar ms-auto">
                    <button type="button" className="btn btn-light btn-sm">
                        <FaPlus /> Group
                    </button>
                    <Link
                        to={`/Kanbas/Courses/${courseId}/Assignments/new`}
                        onClick={()=> dispatch(newAssignment())}
                        type="button" className="btn btn-danger btn-sm">
                        <FaPlus /> Assignment
                    </Link>
                    <button type="button" className="btn btn-light btn-sm">
                        <FaEllipsisV />
                    </button>
                </div>
            </div>
            <hr/>
            <div className="list-group">
                <Link
                    className="list-group-item list-group-item-action list-group-item-secondary">
                    <FaGripVertical className="float-left me-3" />
                    Assignments
                    <FaEllipsisV className="float-end" />
                    <FaPlus className="float-end me-3" />
                    <span className="badge rounded-pill text-bg-light float-end me-3">40% of total</span>
                </Link>
                {courseAssignments.map((assignment) => (
                    <div
                        key={assignment._id}
                        className="list-group-item list-group-item-action green-border">

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <FaGripVertical className="float-left me-3" />
                                <FaEdit className="text-success me-3" />
                                <div>
                                    <Link
                                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                        onClick={()=> dispatch(setAssignment(assignment))}
                                    className={"text-decoration-none text-black"}>
                                        <strong> {assignment.title}</strong>
                                    </Link>
                                    <p className="mb-0">{assignment.description} Due: {assignment.dueDate}</p>

                                </div>
                            </div>
                            <div className="assignment-right-icons d-flex align-items-center">
                                <FaCheckCircle className="text-success" />
                                <FaEllipsisV />
                                <button type="button" className="btn btn-light btn-sm"
                                        onClick={() =>
                                            handleDelete(assignment)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <PopUp
                show={isPop}
                onClose={() => setIsPop(false)}
                onYes={handleYes}
                onNo={handleNo}
            />
        </div>

    );
}
export default Assignments;