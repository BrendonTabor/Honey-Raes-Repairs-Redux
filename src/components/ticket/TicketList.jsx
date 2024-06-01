import "./Ticket.css"
import { getAllTickets } from "../../services/ticketService.jsx"
import { Ticket } from "./Ticket.jsx"
import { useEffect, useState } from "react"
import { TicketFilterBar } from "./TicketFilterBar.jsx"


export const TicketList = ({ currentUser }) => {
    const [allTickets, setAllTickets] = useState([])
    const [emergencyOnly, setEmergencyOnly] = useState(false)
    const [filteredTickets, setFilteredTickets] = useState([])
    const [searchQuery, setSearchQuery ] = useState("")

    const getAndSetTickets = () => {
        getAllTickets().then(setAllTickets)
    }

    useEffect(() => {
        getAndSetTickets()
    }, [])

    useEffect(() => {
        emergencyOnly
        ? setFilteredTickets(allTickets.filter(ticket => ticket.emergency))
        : setFilteredTickets(allTickets)
    }, [allTickets, emergencyOnly])

    useEffect(() => {
        const searchTickets = allTickets.filter(ticket => ticket.description.toLowerCase().includes(searchQuery.toLowerCase()))
        setFilteredTickets(searchTickets)
    }, [searchQuery])

    return (
        <div className="container">
            <h2>Tickets</h2>
            <TicketFilterBar setSearchQuery= {setSearchQuery} setEmergencyOnly={setEmergencyOnly} />
            <article className="tickets">
                {filteredTickets.map((ticket, index) => <Ticket key={index} currentUser={currentUser} ticket={ticket} getAndSetTickets={getAndSetTickets} />)}

            </article>
        </div>
    )
}