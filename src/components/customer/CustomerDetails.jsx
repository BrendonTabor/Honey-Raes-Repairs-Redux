import { useParams } from "react-router-dom"
import { Customer } from "./Customer.jsx"

export const CustomerDetails = () => {
    const { customerId } = useParams() 

    return <div>Customer #{customerId}</div>
}