import { TicketList } from "./components/ticket/TicketList.jsx"
import { CustomerList } from "./components/customer/CustomerList.jsx"
import { EmployeeList } from "./components/employee/EmployeeList.jsx"
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "./nav/NavBar.jsx"

export const App = () => {

  return(
    <Routes>
      <Route path="/" element={
        <>
          <NavBar />
          <Outlet />
        </>
      } />
        <Route path="/tickets" element={<TicketList/>}/>
        <Route path="/customers" element={<CustomerList/>}/>
        <Route path="/employees" element={<EmployeeList/>}/>
    </Routes>
  )
}
      