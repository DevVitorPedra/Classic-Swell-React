import crypto from 'crypto'
const signUp = async (name,nickname, pass) =>{
    try {
        let password = crypto.createHash('sha256').update(pass).digest('hex')
        console.log(`name: ${name},nickname:${nickname},password:${password}`)
        const body = {name,nickname,password}
        const response = await fetch(`http://localhost:5000/users/`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
            
        })
        console.log(response)
        
    } catch (err) {
        console.error(err.message)
        
    }

}

export default signUp