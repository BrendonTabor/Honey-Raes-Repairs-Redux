export const getAllEmployees = () => {
    return fetch(`http://localhost:8088/employees?_embed=user`)
    .then(res => {
        return res.json()
    })
}