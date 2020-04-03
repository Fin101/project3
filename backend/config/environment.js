const secret = 'This is a recipe secret with tom, fin, lucy and hanna'

const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/database-name'

module.exports = {
  secret
}