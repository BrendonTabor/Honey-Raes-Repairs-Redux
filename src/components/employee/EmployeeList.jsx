import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"
import { Employee } from "./Employee.jsx"


export const EmployeeList = () => {
    const [employees, setEmployees] = useState([])

    useEffect (() => {
        getAllEmployees().then(setEmployees)
    }, [])


        return (
            <> 
            <div className="employees-container">
                <h2>Employees</h2>
                <article className="employees">
                    {employees.map((employee, index) => <Employee key={index} employee={employee} />)}
                </article>
            </div>
            </>
        )
}