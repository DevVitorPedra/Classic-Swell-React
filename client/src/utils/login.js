import crypto from 'crypto'

const submitSignIn = async(name, password) =>{
    try {
       
        const response = await fetch(`http://localhost:5000/users/${name}`)
        const data = await response.json()
        const inputPass =   password = crypto.createHash('sha256').update(password).digest('hex')
        if (inputPass===data.user_password){
          sessionStorage.setItem('SessionToken',`{name:${name}}`)
        }else{
            
            console.log('incorrect pass')
        }
    } catch (err) {
        console.error(err.message)
        
    }

}
export default submitSignIn