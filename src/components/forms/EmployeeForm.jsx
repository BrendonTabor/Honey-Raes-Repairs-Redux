import { useEffect, useState } from "react"
import "./Form.css"
import { getEmployeesByUserId, updateEmployee } from "../../services/employeeService.jsx"
import { Navigate, useNavigate } from "react-router-dom"

export const EmployeeForm = ({currentUser}) => {
    const [employee, setEmployee] = useState({})

    const navigate = useNavigate()

    useEffect(() => {
        getEmployeesByUserId(currentUser.id).then((data) => {
            setEmployee(data[0])
        }) 
    }, [currentUser])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee({
            ...employee,
            [name]: value,
        })
    }

    const editProfile = (e) => {
        e.preventDefault()
        const copy = employee
        delete copy.user
        updateEmployee(copy).then (() => {
            navigate(`/employees/${currentUser.id}`)
        })
    }

    return (
        <form className="profile">
            <h2>Update Profile</h2>
            <fieldset>
                <div className="form-group">
                    <label>Specialty: </label>
                    <input 
                        type="text" 
                        value={employee.specialty} 
                        required className="form-control"
                        name="specialty"
                        onChange={handleChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label>Hourly Rate: </label>
                    <input 
                        type="number"   
                        value={employee.rate} 
                        required className="form-control"
                        name="rate"
                        onChange={handleChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button className="form-btn btn-primary" onClick={editProfile}>Save Profile</button> 
                </div>
            </fieldset>
        </form>
    )
}