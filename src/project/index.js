import Signin from "../users/signin";
import { Routes, Route, Navigate } from "react-router-dom";
import Nav1 from "../Nav";
import ProjectNav from "./Nav";
import Account from "../users/account";
import UserTable from "../users/table";
import Signup from "../users/signup";
function Project() {
    return (
        <div className="row d-flex">
            <Nav1 />
            <div className="col-2 d-flex flex-grow-1">
                <ProjectNav/>
            </div>
            <div className="col-10">
                <Routes>
                    <Route path="/" element={<Navigate to="/project/signin" />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/admin/users" element={<UserTable />} />
                    <Route path="/account/:id" element={<Account />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </div>
    );
}
export default Project;