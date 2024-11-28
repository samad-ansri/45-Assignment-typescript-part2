let current_users = ["Usman", "Ali", "Areeba", "Zain","Osama"]

let new_users = ["Hamza", "Ayesha", "Ali", "Mahad", "Areeba"]

new_users.forEach(new_one_users => {
   let our_condition =current_users.some(current_one_users => current_one_users.toLowerCase() === new_one_users.toLowerCase())
   if(our_condition){
       console.log(`Sorry ${new_one_users} is already taken!`)
    }else{
        console.log(`This username ${new_one_users} is available`)
    }
})