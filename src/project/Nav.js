import { Link } from "react-router-dom";


function ProjectNav() {
    return (
        <nav className="nav nav-tabs mb-2">
            <Link className="nav-link" to="/project/signin">
                Sign in</Link>
            <Link className="nav-link" to="/project/account">
                Account</Link>

            <Link className="nav-link" to="/project/admin/users">
                All Users</Link>
            <Link className="nav-link" to="/project/signup">
Sign Up</Link>
            <Link className="nav-link" to="/Project">
                Project</Link>
        </nav>
    );
}


export default ProjectNav;