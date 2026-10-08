const createRoleChecker = (allowedRole) => {
    return (userRole) => {
        if (userRole === allowedRole){
            console.log('access granted')
        }else{
            console.log('you are aligible for this page')
        }
    }
}


const adminRole = createRoleChecker('admin')
const modaretorRole = createRoleChecker('modarator')


console.log(adminRole('admin'))
console.log(adminRole('modarator'))