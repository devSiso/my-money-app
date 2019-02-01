const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/mymoney')


//Schema errors
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório.";
mongoose.Error.messages.Number.min = "O valor '{VALUE}' informado é menor do que o limite mínimo de '{MIN}'.";
mongoose.Error.messages.Number.max = "O valor '{VALUE}' informado é maior do que o limite máximo de '{MAX}'.";
mongoose.Error.messages.String.enum = "Valor '{VALUE}' não é válido para o atributo '{PATH}'."
