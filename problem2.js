const orders = [
  { orderId: 101, category: "Electronics", price: 1200, quantity: 2 },
  { orderId: 102, category: "Fashion", price: 600, quantity: 3 },
  { orderId: 103, category: "Electronics", price: 300, quantity: 1 },
  { orderId: 104, category: "Home", price: 450, quantity: 4 },
  { orderId: 105, category: "Fashion", price: 200, quantity: 2 },
];


const amount = orders.reduce((prev,item) => {
   return prev + item.price * item.quantity
},0)
console.log(amount)
