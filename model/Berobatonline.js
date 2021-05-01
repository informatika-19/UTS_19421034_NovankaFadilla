const mongoose = require('mongoose')
const Schema = mongoose.Schema

const berobatonlineSchema = new Schema({
  nik: {
    type: Number
  },
  namalengkap: {
    type: String
  },
  namaayah: {
    type: String
  },
  alamatlengkap: {
    type: String
  },
  golongandarah: {
    type: String
  },
  nohandphone: {
    type: Number
  
  }

})
module.exports = mongoose.model('berobatonline', berobatonlineSchema)