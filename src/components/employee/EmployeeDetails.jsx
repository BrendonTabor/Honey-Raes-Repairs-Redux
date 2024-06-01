import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getEmployeesByUserId } from "../../services/customerService.jsx"

export const CustomerDetails = () => {
    const [employee, setEmployee ] = useState({})
    const { employeeId } = useParams()
    
    useEffect(() => {
        getEmployeesByUserId(employeeId).then((data) => {
            setEmployee(data[0])
        })
    }, [employeeId])

    return (
        <section className="employee">
            <header className="employee-header">{employee.user?.fullName}</header>
            <div>
                <span className="employee-find">
                    Email: { employee.user?.email }
                </span>
            </div>
        </section>
    )
}