export const getCustomers = () => {
    return fetch(`http://localhost:8088/customers?_expand=user`)
    .then(res => {
        return res.json()
    })
}