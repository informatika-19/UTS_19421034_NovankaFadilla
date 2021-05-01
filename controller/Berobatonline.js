const berobatonlineModel = require('../model/Berobatonline')
const objectId = require('mongoose').Types.ObjectId

//meng create data baru (create)
exports.create= (data) =>
  new Promise((resolve, reject)=> {
    berobatonlineModel.create(data)
      .then(()=> resolve({
        status : true,
        pesan : 'Berhasil Input Data Pasien Berobat'
      })).catch(()=> ({
        status : false,
        pesan : 'Gagal Input Data Pasien Berobat'
      }))
  })
//menampilkan data seluruh mahasiswa (read)
  exports.showAllData = () =>
    new Promise((resolve, reject) => {
        berobatonlineModel.find()
        .then(result => {
          resolve({
            status: true,
            pesan: 'Berhasil Menampilkan Pasien Berobat',
            data: result
          })
        }).catch(() => reject({
            status: false,
            pesan: 'Gagal Menapilkan Data Pasien Berobat',
            data: []
        }))
    })
// menampilkan data mahasiswa dengan object id (read)
exports.showDataById = (id) =>
    new Promise((resolve, reject) => {
        berobatonlineModel.findOne({
        _id: objectId(id)
    }).then(result => {
      resolve({
        status: true,
        pesan: 'Berhasil Menampilkan Pasien Berobat',
        data: result
      })
    }).catch(() => reject({
      status: false,
      pesan: 'Gagal Menapilkan Data Pasien Berobat',
      data: null
  }))
})
// update data mahasiswa dengan object id (update)
exports.update = (id, data) => 
  new Promise ((resolve, reject) => {
    berobatonlineModel.updateOne({
      _id: objectId(id)
    }, data).then(() => resolve({
        status: true,
        pesan: 'Berhasil Mengubah Pasien Berobat'
    })).catch(() => reject({
        status: false,
        pesan: 'Gagal Mengubah Pasien Berobat'
    }))
})
//menghapus data mahasiswa dengan object id (delete)
exports.delete = (id) =>
  new Promise((resolve, reject) => {
    berobatonlineModel.deleteOne({
      _id: objectId(id)
    }).then(() => resolve ({
      status: true,
      pesan : 'Berhasil Menghapus Pasien Berobat'
    })).catch(() => reject({
      status: false,
      pesan: 'Gagal Menghapus Pasien Berobat'
  }))
})
