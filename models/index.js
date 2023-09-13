// imported Users here of this directory
const Users = require('./Users')

// That way simply importing and exporting helps us not need to write the whole users.js but simply call the directory name, the system automatically detect by checking the index file and act accordingly.
module.exports = {
    Users
}
