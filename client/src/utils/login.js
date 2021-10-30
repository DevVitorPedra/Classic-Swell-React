
const submitSignIn = async(name) =>{
    try {
       
        const response = await fetch(`http://localhost:5000/users/${name}`)
        const data = await response.json()
        console.log(data)
        
    } catch (err) {
        console.error(err.message)
        
    }

}
export default submitSignIn