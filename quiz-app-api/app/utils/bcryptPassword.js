const bcrypt = require("bcryptjs");

const hashPassword = (plainPassword) => {
  // FIXME: Do this asynchronously 
  try {
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(plainPassword, salt)

    return hashedPassword;
  } catch (error) {
    console.log(error)
  }
}

const comparePassword = (originalPassword, toMatchPassword, onSuccess, onError) => {
  bcrypt.compare(originalPassword, toMatchPassword)
    .then((passwordsMatch) => onSuccess(passwordsMatch))
    .catch((error) => onError(error)) 
}

module.exports = { hashPassword, comparePassword }