var Datastore = require('nedb');
var database = new Datastore({ filename: './db/database.simbah', autoload: true });

var db = {
	tambahAntrian: function(jenis, hasil){
			
	},
	tambahJenis: function(jenis){
		database.find({_id : 'jenisantrian'}, function(err, docs){
			if(docs.length ===  0){
				//console.log('kosong');
				//console.log(docs);
				database.insert({_id: 'jenisantrian', nama: [jenis]}, function(err, dataJenis){
					//console.log('berhasil diinput '+ jenis);
				});
			}else{
				if(docs[0].nama.indexOf(jenis) == -1){
					//console.log('kosong namanya');
					database.update({_id: 'jenisantrian'}, {$push: {nama: jenis}}, {}, function(){
						//console.log('berhasil ditambahkan '+ jenis);
					});
				}else{
					console.log('sudah ada');
				}
			}
		});
	},
	tambahPanggil: function(param){

	},
	lihatAntrian: function(jenis, hasil){

	},
	lihatJenis: function(){

	},
	lihatSetting: function(){

	},
	editJenis: function(){

	},
	editSeting: function(){

	},
	hapusPanggil: function(){

	},
	hapusJenis: function(){

	}

}

module.exports = db;