import { useEffect, useState } from "react"
import { Customer } from "./Customer.jsx"
import { getCustomers } from "../../services/customerService.jsx"
import { Link } from "react-router-dom"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getCustomers().then(setCustomers)
    }, [])

    return (
        <div className="customers-container">
            <h2>Customers</h2>
            <article className="customers">
                {customers.map((customer, index) => {
                    <Link to={`/customers/${customer.id}`} key={index}>
                        <User user={customer}/>
                    </Link>
                })}
            </article>
        </div>
    )
}                      