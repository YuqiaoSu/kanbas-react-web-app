import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css"
import {FaPlus, FaEllipsisV, FaEdit, FaCheckCircle, FaGripVertical} from 'react-icons/fa';
function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter(
        (assignment) => assignment.course === courseId);
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
                    <button type="button" className="btn btn-danger btn-sm">
                        <FaPlus /> Assignment
                    </button>
                    <button type="button" className="btn btn-light btn-sm">
                        <FaEllipsisV />
                    </button>
                </div>
            </div>
            <div className="list-group">
                <Link className="list-group-item list-group-item-action list-group-item-secondary">
                    <FaGripVertical className="float-left me-3" />
                    Assignments
                    <FaEllipsisV className="float-end" />
                    <FaPlus className="float-end me-3" />
                    <span className="badge rounded-pill text-bg-light float-end me-3">40% of total</span>
                </Link>
                {courseAssignments.map((assignment) => (
                    <Link
                        key={assignment._id}
                        to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                        className="list-group-item list-group-item-action green-border">

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-items-center">
                                <FaGripVertical className="float-left me-3" />
                                <FaEdit className="text-success me-3" />
                                <div>
                                    <strong> {assignment.title}</strong>
                                    <p className="mb-0">Description Here</p>
                                </div>
                            </div>
                            <div className="assignment-right-icons d-flex align-items-center">
                                <FaCheckCircle className="text-success" />
                                <FaEllipsisV />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
export default Assignments;