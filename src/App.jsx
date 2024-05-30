import { TicketList } from "./components/ticket/TicketList.jsx"
import { CustomerList } from "./components/customer/CustomerList.jsx"
import { EmployeeList } from "./components/employee/EmployeeList.jsx"
import { Outlet, Route, Routes } from "react-router-dom"
import { Welcome } from "./components/welcome/Welcome.jsx"
import { NavBar } from "./nav/NavBar.jsx"
import { CustomerDetails } from "./components/customer/CustomerDetails.jsx"

export const App = () => {

  return(
    <Routes>
      <Route path="/" element={
        <>
          <NavBar />
          <Outlet />
        </>
      }>
        <Route index element={<Welcome />} />
        <Route path="/tickets" element={<TicketList/>}/>
        <Route path="/employees" element={<EmployeeList/>}/>
        <Route path="/customers">
          <Route index element={<CustomerList />} />
          <Route path=":customerId" element={<CustomerDetails />} />
        </Route>
      </Route>
    </Routes>
  )
}
      