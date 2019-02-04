const generateUsername = (fullname, password) => {
  // FIXME: change this logic later
  const randomNumber = Math.floor(Math.random() * 5)
  return fullname.replace(/\s/g,'').toLowerCase().substring(0, 9) + 
    password.replace(/\D/g, '').substring(randomNumber, randomNumber + 4)
}

module.exports = generateUsername