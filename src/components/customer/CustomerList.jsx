import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { User } from "../user/User.jsx"
import { getNonStaffUsers } from "../../services/userService.jsx"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    
    useEffect(() => {
        getNonStaffUsers().then(setCustomers)
    }, [])

    return (
        <div className="customers-container">
            <h2>Customers</h2>
            <article className="customers">
                {customers.map((customer, index) => {
                    return (
                    <Link to={`/customers/${customer.id}`} key={index}>
                        <User user={customer} />
                    </Link>
                    )
                })}
            </article>
        </div>
    )
}                      