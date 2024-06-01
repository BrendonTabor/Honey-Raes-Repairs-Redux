export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees?_expand=user`)
    .then(res => {
        return res.json()
    })
}

export const getEmployeesByUserId = (id) => {
    return fetch(`http://localhost:8088/eployees?userId=${id}&_expand=user`)
}