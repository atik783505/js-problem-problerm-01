

const createDiscountCalculator = (discountPercent) => {
    return (orginialPrice) => {
        const discountedPrice = (orginialPrice * discountPercent)/100
        const finalPrice = orginialPrice - discountedPrice
        return finalPrice
    }

}
    
const applybkash = createDiscountCalculator(10)
console.log(applybkash(1000))