import "./Ticket.css"

import { useEffect, useState } from "react"
import { getAllEmployees } from "../../services/employeeService.jsx"
import { createEmployeeTicket, deleteTicket, updateTicket } from "../../services/ticketService.jsx"

export const Ticket = ({ currentUser, ticket, getAndSetTickets }) => {
    const [employees, setEmployees] = useState([])
    const [assignedEmployee, setAssignedEmployee] = useState({})

    useEffect(() => {
        getAllEmployees().then(setEmployees)
    }, [])

    useEffect(() => {
        const foundEmployee = employees.find(employee => employee.id === ticket.employeeTickets[0]?.employeeId)
        setAssignedEmployee(foundEmployee)
    }, [employees, ticket])

    const editTicket = (ticket) => {
        delete ticket.employeeTickets
        ticket.dateCompleted = Date()
        updateTicket(ticket).then(() => {
            getAndSetTickets({})
        })
    }

    const addEmployeeTicket = (ticket) => {
        const employee = employees.find(emp => emp.userId === currentUser.id)
        const employeeTicket = {
            "employeeId": employee.id,
            "serviceTicketId": ticket.id
        }
        createEmployeeTicket(employeeTicket).then(() => {
            getAndSetTickets()
        })
    }

    const handleDelete = (id) => {
        deleteTicket(id).then(() => {
            getAndSetTickets()
        })
    }

    return (
        <section className="ticket">
            <header className="ticket-info">{ticket.id}</header>
            <div>{ticket.description}</div>
            <footer>
                <div>
                    <div className="ticket-info">Assignee</div>
                    <div> {ticket.assignedEmployee ? assignedEmployee.user?.fullName : "None"}</div>
                </div>
                <div>
                    <div className="ticket-info">Emergency</div>
                    <div> {ticket.emergency ? "yes" : "no"} </div>
                </div>
                <div className="btn-container">
                    {/* If the logged in user is an employee and there's no employee ticket associated with the service 
                    ticket then a button to claim the ticket should display */}
                    {currentUser.isStaff && !assignedEmployee && !ticket.dateCompleted
                        ? <button className="filter-btn btn-primary" onClick={() => {addEmployeeTicket(ticket)}}>Claim</button> 
                        : "" }
                    {/* If the logged in user is the assigned employee for the ticket and there is no dateCompleted, the 
                    button to close a ticket should display */}
                    {currentUser.id === assignedEmployee?.userId && !ticket.dateCompleted && (
                        <button className="filter-btn btn-secondary" onClick={() => {editTicket(ticket)}}>Close</button>
                    )}
                    {!currentUser.isStaff && (
                        <button className="btn btn-warning" onClick={() => {handleDelete(ticket.id)}}>Delete</button>
                    )}
                </div>
            </footer>
        </section>
    )
}