import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../nav/NavBar.jsx"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { TicketList } from "../components/ticket/TicketList.jsx"
import { EmployeeList } from "../components/employee/EmployeeList.jsx"
import { CustomerList } from "../components/customer/CustomerList.jsx"
import { CustomerDetails } from "../components/customer/CustomerDetails.jsx"
import { useEffect, useState } from "react"
import { EmployeeForm } from "../components/forms/EmployeeForm.jsx"
import { EmployeeDetails } from "../components/employee/EmployeeDetails.jsx"

export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localHoneyUser = localStorage.getItem('honey_user')
    const honeyUserObject = JSON.parse(localHoneyUser)

    setCurrentUser(honeyUserObject)
  }, [])

  return <>
  <Routes>
    <Route path="/" element={
          <>
            <NavBar />
            <Outlet />
          </>
        }>
          <Route index element={<Welcome />} />
          <Route path="/tickets" element={<TicketList currentUser={currentUser}/>}/>
          <Route path="/employees">
            <Route index element={<EmployeeList/>} />
            <Route path =":employeeId" element={<EmployeeDetails />} />
          </Route>
          <Route path="/customers">
            <Route index element={<CustomerList />} />
            <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
        <Route path="/profile" element={<EmployeeForm currentUser={currentUser} />} />
      </Route>
    </Routes>
  </>
}
