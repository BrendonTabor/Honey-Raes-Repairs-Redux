import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getCustomersByUserId } from "../../services/customerService.jsx"

export const CustomerDetails = () => {
    const [customer, setCustomer ] = useState({})
    const { customerId } = useParams()
    
    useEffect(() => {
        getCustomersByUserId(customerId).then((data) => {
            setCustomer(data[0])
        })
    }, [customerId])

    return (
        <section className="customer">
            <header className="customer-header">{customer.user?.fullName}</header>
            <div>
                <span className="customer-find">
                    Email: { customer.user?.email }
                </span>
            </div>
        </section>
    )
}