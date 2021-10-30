const signUp = async (name,nickname, password) =>{
    try {
        const response = await fetch(`http://localhost:5000/users/${name}`)
        
    } catch (err) {
        console.error(err.message)
        
    }

}