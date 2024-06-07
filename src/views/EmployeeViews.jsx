import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "../components/welcome/Welcome.jsx"
import { TicketList } from "../components/ticket/TicketList.jsx"
import { EmployeeList } from "../components/employee/EmployeeList.jsx"
import { EmployeeForm } from "../components/forms/EmployeeForm.jsx"
import { CustomerDetails } from "../components/customer/CustomerDetails.jsx"
import { EmployeeDetails } from "../components/employee/EmployeeDetails.jsx"
import { CustomerList } from "../components/customer/CustomerList.jsx"
import { EmployeeNav } from "../nav/EmployeeNav.jsx"


export const EmployeeViews = ({ currentUser }) => {

    return (
        <Routes>
        <Route path="/" element={
            <>
                <EmployeeNav />
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
    )
}