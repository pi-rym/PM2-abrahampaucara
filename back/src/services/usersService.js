const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'David Tylor' },
    { id: 3, name: 'Mary Smith' },
    { id: 4, name: 'John Smith' },
];

let id = 4;

module.exports = {
    getUsers: async () => {
        return users;
    },

    createUser: async (name) => {
        
        const newUser = { id, name };
        id++;
        users.push(newUser);
    }
};