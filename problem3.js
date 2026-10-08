
const rawUsers = [
    { id: 1, name: "Arif", email: "arif@mail.com", passwordHash: "x8f7s", role: "admin", isVerified: true },
    { id: 2, name: "Nabila", email: "nabila@mail.com", passwordHash: "k83h2", role: "user", isVerified: false },
    { id: 3, name: "Tanvir", email: "tanvir@mail.com", passwordHash: "p02kd", role: "user", isVerified: true },
    { id: 4, name: "Sakib", email: "sakib@mail.com", passwordHash: "z91jx", role: "moderator", isVerified: true },
];


const rateLimiting = (eamil,password) => {
   const rawUser = rawUsers.find(user => user.email == eamil && user.passwordHash == password)
   let hits = 0
   const maxlimt = 3
   return () => {
    if(!rawUser){
        return `user: ${eamil} not found`
    }
    hits ++
    if (hits <= maxlimt){
        return `user: ${eamil} logged in successfully`     
    } else {
        return `user: ${eamil} has exceeded the maximum login attempts`
    }
   }
}

const user1 = rateLimiting("arif@mail.com", "x8f7s");
console.log(user1());
console.log(user1());
console.log(user1());
console.log(user1());