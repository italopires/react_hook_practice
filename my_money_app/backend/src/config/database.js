const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true })

mongoose.Error.messages.general.required = "'${PATH}' attribute is required!"
mongoose.Error.messages.Number.min = "The informed '${VALUE}' is less than the min limit of '{MIN}'."
mongoose.Error.messages.Number.max = "The informed '${VALUE}' is more than the max limit of '{MIN}'."
mongoose.Error.messages.String.enum = "'${VALUE}' is not valid for the '{PATH}' attribute."