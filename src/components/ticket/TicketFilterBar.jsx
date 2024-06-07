import { useNavigate } from "react-router-dom"

export const TicketFilterBar = ({setSearchQuery, setEmergencyOnly, currentUser, setOpenOnly, openOnly }) => {
    const navigate = useNavigate()

    return (
        <div className="filter-bar">
            {currentUser.isStaff
            ?   <>  <div>
                    <button className="filter-btn btn-primary" onClick={() => {setEmergencyOnly(true)}}>Show Emergency!</button>
                    <button className="filter-btn btn-info" onClick={() => {setEmergencyOnly(false)}}>Show All!</button>
                </div>
                <div>
                    <input className="searchFilter"
                    onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </>
            :   <>
                    <button className="filter-btn btn-primary" onClick={() => {navigate("/tickets/create")}}>Create tickets</button>                
                    <button className="filter-btn btn-info" onClick={() => {setOpenOnly(true)}}>Open tickets</button>                
                    <button className="filter-btn btn-secondary" onClick={() => {setOpenOnly(false)}}>All My tickets</button>                
                </>
            }
            </div>
    )
}