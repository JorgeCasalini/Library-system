const uuid = require('uuid').v4


const users = [
    { id: '1', name: 'Jorge', email: 'jorginho@gmail.com', password:'123' },
    { id: '2', name: 'Raquel', email: 'raquelzinha@gmail.com', password: '321'}
]

module.exports = {
    getAllUsers: () => users,

    getUserById: (id) => users.find(user => user.id === id),

    getUserByEmail: (email) => users.find(user => user.email === email),

    createUser: (name, email, password) => {
        const newUser = {
            id: uuid(),
            name,
            email,
            password
        }
        users.push(newUser)
        return newUser
    }

}