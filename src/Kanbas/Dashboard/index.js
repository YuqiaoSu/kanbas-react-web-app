import {React, useState} from "react";
import {Link} from "react-router-dom";
import db from "../Database";
import {FaAddressBook, FaEllipsisV} from 'react-icons/fa';
import "./index.css"

function Dashboard(
    { courses, course, setCourse, addNewCourse,
        deleteCourse, updateCourse }
) {


    return (
        <div>
            <div className="top_bar ">
                <p className="fs-2 ms-3">Dashboard</p>
                <hr/>
            </div>
            <div className="course ms-5">
                <div className="fs-5">
                    <p> Published Courses (8)</p>
                    <hr/>
                </div>

                <div className="container">
                    <div className="row d-flex flex-row flex-wrap gx-5">
                        <div className="col-lg-3 col-md-4 col-sm-6">
                            <div className={"d-flex justify-content-start gap-2 mt-5"}>
                                <h5>Course</h5>
                                <button onClick={addNewCourse} >
                                    Add
                                </button>
                                <button onClick={()=>{updateCourse(course);}} >
                                    Update
                                </button>
                            </div>
                            <input value={course.name} className="form-control"
                                   onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
                            <input value={course.number} className="form-control"
                                   onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
                            <input value={course.startDate} className="form-control" type="date"
                                   onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
                            <input value={course.endDate} className="form-control" type="date"
                                   onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
                        </div>
                        {courses.map((c) => (
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="card">
                                    <div className="course-thumbnail bg-primary">
                                        <FaEllipsisV className="thumbnail-icon" aria-hidden="true"/>
                                    </div>
                                    <div className="card-body">
                                        <Link key={c._id} to={`/Kanbas/Courses/${c._id}`}
                                              className="custom-card-title" id={c._id}>
                                            {c.name}<br/> {c._id}
                                        </Link>
                                        <p className="card-text">{c.number}<br/>
                                            {c.startDate} -> {c.endDate}<br/>
                                            <FaAddressBook aria-hidden="true"/>
                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    setCourse(c);
                                                }}>
                                                Edit
                                            </button>

                                            <button
                                                onClick={(event) => {
                                                    event.preventDefault();
                                                    deleteCourse(c);
                                                }}>
                                                Delete
                                            </button>
                                        </p>


                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;