import { useEffect, useState } from "react"

export const App = () => {
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

  }, [emergencyOnly])

const getAllTickets = () => {
  return fetch(`http://localhost:8088/serviceTickets`)
  .then(res => {
    return res.json()
  })
}

  return(
    <>
    <div className="container">
      <button onClick={() => {setEmergencyOnly(!emergencyOnly)}}>Show Emergency Only!</button>
      {filteredTickets.map(ticket => `${ticket.id}: ${ticket.description}`)}
    </div>
    </>
  )
}
