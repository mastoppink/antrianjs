var Datastore = require('nedb');
var database = new Datastore({ filename: './db/database.simbah', autoload: true });
var moment = require('moment');

var hariIni = moment().format('DD-MM-YYYY');

var db = {
	tambahAntrian: function(jenis){
		database.find({tanggal: hariIni, jenis: jenis}, function(err, docs){
			if(!err){
				var antrianTerakhir = docs.length;
				database.insert({_id: hariIni + "-" + jenis+ "-" + (antrianTerakhir + 1), tanggal: hariIni, jenis: jenis, antrian: antrianTerakhir+1}, function(err, inserted){
					if(err){
						console.log(err);
					}
					//console.log(inserted);
				});
			}
		});
	},
	tambahJenis: function(jenis){
		database.find({referensi: 'jenisantrian', jenis: jenis}, function(err, docs){
			if(!err){
				if(docs.length === 0){
					database.insert({referensi: 'jenisantrian', jenis: jenis}, function(err, inserted){
						if(err){
							console.log('gagal insert');
						}else{
							console.log(inserted);
						}
					});
				}
			}
		});
	},
	tambahPanggil: function(antrian, loket, monitor){
		database.insert({antrian: antrian, loket: loket, monitor: monitor}, function(err, inserted){
			if(err){
				console.log(err);
			}
			console.log(inserted);
		});
	},
	lihatAntrian: function(jenis, callback){
		database.find({tanggal: hariIni, jenis: jenis}, function(err, docs){
			callback(err, docs.length);
		});
	},
	lihatJenis: function(callback){
		database.find({_id: 'jenisantrian'}, function(err, docs){
			if(!err){
				callback(err, docs);	
			}
		});
	},
	lihatSetting: function(callback){
		database.find({_id: 'setting'}, function(err, docs){
			if(!err){
				callback(err, docs);	
			}
		});	
	},
	editSeting: function(judul, icon){
		database.find({referensi: 'setting'}, function(err, docs){
			if(!err){
				if(docs.length === 0){
					database.insert({referensi: setting, judul: judul, icon: icon}, function(err, inserted){
						if(err){
							console.log('gagal input setting');
						}else{
							console.log(inserted);
						}
					});
				}else{
					database.update({referensi: setting}, {$set: { judul: judul, icon: icon}}, {}, function(){
						console.log('sukses update');
					});
				}
			}
		});
	},
	hapusPanggil: function(antrian, loket, monitor){
		database.remove({antrian: antrian, loket: loket, monitor: monitor}, {multi: false}, function(err, removed){
			if(!err){
				console.log(removed);
			}
		});
	},
	hapusJenis: function(jenis){
		database.remove({referensi: 'jenisantrian', jenis: jenis}, {multi: false}, function(err, removed){
			if(!err){
				console.log(removed);
			}
		});
	}

}

module.exports = db;