export const TicketFilterBar = ({setSearchQuery, setEmergencyOnly}) => {

    return (
        <>
        <div>
                <div>
                    <button className="filter-btn btn-primary" onClick={() => {setEmergencyOnly(true)}}>Show Emergency!</button>
                    <button className="filter-btn btn-info" onClick={() => {setEmergencyOnly(false)}}>Show All!</button>
                </div>
                <div>
                    <input className="searchFilter"
                    onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </div>
        </>
    )
}