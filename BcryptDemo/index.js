const bcrypt = require('bcrypt')

/*const hashPassword = async (pw) =>{
    const salt = await bcrypt.genSalt(12)
    const hash = await bcrypt.hash(pw, salt)
    console.log(salt)
    console.log(hash)
}*/

const hashPassword = async (pw) =>{
    const hash = await bcrypt.hash(pw,12)
    console.log(hash)
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw)
    if(result) {
        console.log("LOGGED YOU IN")
    }else {
        console.log("INCORRECT!")
    }
}

hashPassword('monkey')
// login('monkey','$2b$12$xsI5qFZyyFG21K1Gb6xUfu.c3LT3hrKdLnvtmB2TMhGcul/QYt6')
