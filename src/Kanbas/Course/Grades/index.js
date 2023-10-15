import db from "../../Database";
import { useParams } from "react-router-dom";
import {FaFileImport, FaFileExport, FaCog, FaSearch, FaFilter} from 'react-icons/fa';
import "./index.css"
function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div class="ps-2 flex-grow-1 pe-5 justify-content-center">>
            <div className="header-bar">
                <button className="btn btn-light me-2">
                    <FaFileImport /> Import
                </button>
                <div className="dropdown me-2">
                    <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaFileExport /> Export
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button className="btn btn-light">
                    <FaCog />
                </button>
            </div>
            <div className="container">
                <div className="row mb-2">
                    <div className="col-md-6">
                        <label htmlFor="studentNames" className="form-label fw-bold">Student Names</label>
                        <div className="dropdown">
                            <button style={{ width: '100%' }} className="btn btn-outline-secondary dropdown-toggle btn-block text-start" type="button" id="studentNames" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaSearch />
                                <span className="text-start">Select Students</span>
                            </button>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Search assignments</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="assignmentNames" className="form-label fw-bold">Assignment Names</label>
                        <div className="dropdown">
                            <button style={{ width: '100%' }} className="btn btn-outline-secondary dropdown-toggle btn-block text-start" type="button" id="assignmentNames" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaSearch />
                                <span className="text-start">Search Assignments</span>
                            </button>

                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Search assignments</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row mb-2">
                    <div className="col-md-4">
                        <button className="btn btn-light">
                            <FaFilter /> Apply Filters
                        </button>
                    </div>
                </div>
            </div>
            <div className="container table-responsive">
                <table className="table table-striped table-bordered table-responsive mt-3">
                <thead>
                <tr>
                    <th>Student Name</th>
                    {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                </tr>
                    </thead>
                    <tbody>
                    {enrollments.map((enrollment) => {
                        const user = db.users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <td>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = db.grades.find(
                                        (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return (<td><input type="text"  placeholder="0" value={grade?.grade || ""}/></td>);})}
                            </tr>);
                    })}
                    </tbody></table>
            </div></div>);
}
export default Grades;