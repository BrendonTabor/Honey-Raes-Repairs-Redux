import { useState } from "react"
import "./Form.css"
import { Navigate, useNavigate } from "react-router-dom"
import { createServiceTicket } from "../../services/ticketService.jsx"

export const TicketForm = ({ currentUser }) => {
    const [ticket, setTicket] = useState({description: "", emergency: false})

    const Navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value, checked } = e.target

        setTicket({
            ...ticket,
            [name]: name === "emergency" ? checked : value
        })
    }

    const handleSubmit = () => {
        const tick = { ...ticket }
        tick.userId = currentUser.id
        tick.dateCompleted = ""
        createServiceTicket(tick).then(() => {
            Navigate("/tickets")
        })
    }

    return (
        <form>
            <h2>New Service Ticket</h2>
                <fieldset>
                    <div className="form-group">
                        <label>Description</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Brief description of problem"
                            name="description"
                            onChange={handleChange} 
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <label>Emergency:
                            <input 
                                type="checkbox"
                                name="emergency"
                                onChange={handleChange} 
                            />
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <div className="form-group">
                        <button 
                            className="form-btn btn-info"
                            onClick={handleSubmit}>Submit Ticket</button>
                    </div>
                </fieldset>
        </form>
    )
}