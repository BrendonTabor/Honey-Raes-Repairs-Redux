import { getAllTickets } from "../services/ticketService.jsx"
import { Ticket } from "./Ticket.jsx"
import { useEffect, useState } from "react"


export const TicketList = () => {
    const [allTickets, setAllTickets] = useState([])
    const [emergencyOnly, setEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])

    useEffect(() => {
        getAllTickets().then(setAllTickets)
    }, [])

    useEffect(() => {
        emergencyOnly
        ? setFilteredTickets(allTickets.filter(ticket => ticket.emergency))
        : setFilteredTickets(allTickets)
    }, [allTickets, emergencyOnly])


    return (
        <div className="container">
            <h2>Tickets</h2>
            <div>
                <button className="filter-btn btn-primary" onClick={() => {setEmergencyOnly(true)}}>Show Emergency!</button>
                <button className="filter-btn btn-info" onClick={() => {setEmergencyOnly(false)}}>Show All!</button>
            </div>
            <article className="tickets">
                {filteredTickets.map((ticket, index) => <Ticket key={index} ticket={ticket} />)}

            </article>
        </div>
    )
}