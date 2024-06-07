export const getAllTickets = () => {
    return fetch(`http://localhost:8088/serviceTickets?_embed=employeeTickets`)
    .then(res => {
        return res.json()
    })
}

export const updateTicket = (ticket) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    })
}

export const createEmployeeTicket = (ticket) => {
    return fetch(`http://localhost:8088/employeeTickets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
    })
}

export const deleteTicket = (id) => {
    return fetch(`http://localhost:8088/serviceTickets/${id}`, {
        method: "DELETE"
    })
}

export const createServiceTicket = (ticket) => {
    return fetch(`http://localhost:8088/employeeTickets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(ticket),
    })
}