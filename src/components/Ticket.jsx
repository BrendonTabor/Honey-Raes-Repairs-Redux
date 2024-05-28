import { useEffect, useState } from "react"
import { getAllEmployees } from "../services/employeeService.jsx"

export const Ticket = ({ ticket }) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
        getAllEmployees().then(setEmployees)
    }, [])

    useEffect(() => {
        setAssignedEmployee(employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId))
    }, [employees, ticket])

    return (
        <section className="ticket">
            <header className="ticket-info">{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
                <div>
                    <div className="ticket-info">assignee</div>
                    <div> {ticket.assignedEmployee ? assignedEmployee.user.fullName : "None"}</div>
                </div>
                <div>
                    <div className="ticket-info">Emergency</div>
                    <div> {ticket.emergency ? "yes" : "no"} </div>
                </div>
            </footer>
        </section>
    )
}