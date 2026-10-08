const rawUsers = [
    { id: 1, name: "Arif", email: "arif@mail.com", passwordHash: "x8f7s", role: "admin", isVerified: true },
    { id: 2, name: "Nabila", email: "nabila@mail.com", passwordHash: "k83h2", role: "user", isVerified: false },
    { id: 3, name: "Tanvir", email: "tanvir@mail.com", passwordHash: "p02kd", role: "user", isVerified: true },
    { id: 4, name: "Sakib", email: "sakib@mail.com", passwordHash: "z91jx", role: "moderator", isVerified: true },
];


const verifiedUser = rawUsers.filter(i => i.isVerified);

const finalUsers = verifiedUser.map(({ passwordHash, ...rest }) => {
    return ({
        ...rest,
        status: 'active'
    })
})
console.log(finalUsers)