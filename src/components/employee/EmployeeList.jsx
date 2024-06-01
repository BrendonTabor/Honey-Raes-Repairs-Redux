import { useEffect, useState } from "react"
import { User } from "../user/User.jsx"
import { Link } from "react-router-dom"
import { getAllStaffUsers } from "../../services/userService.jsx"


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect (() => {
        getAllStaffUsers().then(setEmployees)
    }, [])


    return (
        <div className="employees-container">
            <h2>Employees</h2>
            <article className="employees">
                {employees.map((employee, index) => {
                    return (
                    <Link to={`/employees/${employee.id}`} key={index}>
                        <User user={employee} />
                    </Link>
                    )
                })}
            </article>
        </div>
    )
}