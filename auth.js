const register = function(username) {

    console.log(`User  with name ${username} has been registered`)
};

const login = function(username, password) {
    console.log(`User  with name ${username} has been logged in `)

}

// module.exports = register 

module.exports = {
    register,
    login,
}