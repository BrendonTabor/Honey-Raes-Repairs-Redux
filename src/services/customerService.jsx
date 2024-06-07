export const getCustomersByUserId = (id) => {
    return fetch(`http://localhost:8088/customers?userId=${id}&_expand=user`).then(res => res.json())
}