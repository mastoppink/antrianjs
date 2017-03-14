app.factory('socket', function ($rootScope) {
	var socket = io();
	return {
		on: function (eventName, callback) {
			socket.on(eventName, function () {  
				var args = arguments;
				$rootScope.$apply(function () {
					callback.apply(socket, args);
				});
			});
		},
		emit: function (eventName, data, callback) {
			socket.emit(eventName, data, function () {
				var args = arguments;
				$rootScope.$apply(function () {
					if (callback) {
						callback.apply(socket, args);
					}
				});
			})
		}
	};
});

var panggil_antrian = function (playlistUrls) {
	var pCount = 0;
	var howlerBank = [];

	var onEnd = function(){
		pCount = pCount + 1;
		howlerBank[pCount].play();
		if(pCount == playlistUrls.length - 1){
			howlerBank[pCount].on("end", function(){
				
			});
		}
	}

	playlistUrls.forEach(function(current, i){
		howlerBank.push(new Howl({src:[playlistUrls[i]], onend: onEnd, buffer: true}));
	});

	howlerBank[0].play();
}

//terbilang -mastoppink
function pecah(num){
    var pecahan, jumlahkarakter;
    pecahan = num.split('');
    return pecahan;
}


function satuan(nomorsatuan){
    var soundsPath;
    switch(nomorsatuan){
        case '1':
            soundsPath = 'assets\/sounds\/1.mp3';
            break;
        case '2':
            soundsPath = 'assets\/sounds\/2.mp3';
            break;
        case '3':
            soundsPath = 'assets\/sounds\/3.mp3';
            break;
        case '4':
            soundsPath = 'assets\/sounds\/4.mp3';
            break;
        case '5':
            soundsPath = 'assets\/sounds\/5.mp3';
            break;
        case '6':
            soundsPath = 'assets\/sounds\/6.mp3';
            break;
        case '7':
            soundsPath = 'assets\/sounds\/7.mp3';
            break;
        case '8':
            soundsPath = 'assets\/sounds\/8.mp3';
            break;
        case '9':
            soundsPath = 'assets\/sounds\/9.mp3';
            break;
        default:
            soundsPath = 'assets\/sounds\/0.mp3';
            break;
    }
    
    return soundsPath;
}

// argumen 2 digit
function puluhan(nomorpuluhan){
    var soundsPath, soundsPathSatuan, soundsPathPuluh;
    
    var puluhanPath = 'assets\/sounds\/puluh.mp3';
    var belasanPath = 'assets\/sounds\/belas.mp3';
    
    var puluhanPathArr = [];
    if(nomorpuluhan === '10'){
        puluhanPathArr.push('assets\/sounds\/sepuluh.mp3');
    }else if(nomorpuluhan === '20' || nomorpuluhan === '30' || nomorpuluhan === '40' || nomorpuluhan === '50' || nomorpuluhan === '60' || nomorpuluhan === '70' || nomorpuluhan === '80' || nomorpuluhan === '90'){
        nomorpuluhan = nomorpuluhan.split('');
        soundsPathPuluh = satuan(nomorpuluhan[0]);
        puluhanPathArr.push(soundsPathPuluh);
        puluhanPathArr.push(puluhanPath);
    }else if(nomorpuluhan === '11'){
        puluhanPathArr.push('assets\/sounds\/sebelas.mp3');
    }else if(nomorpuluhan.split('')[0] === '0'){
         soundsPathSatuan = satuan(nomorpuluhan[1]);
         puluhanPathArr.push(soundsPathSatuan);
    }else if(nomorpuluhan.split('')[1] === '0'){
        
    }else if(nomorpuluhan.split('')[0] === '1' && nomorpuluhan < 20){
        soundsPathSatuan = satuan(nomorpuluhan.split('')[1]);
        puluhanPathArr.push(soundsPathSatuan);
        puluhanPathArr.push(belasanPath);
    }else{
        nomorpuluhan = nomorpuluhan.split('');
        soundsPathPuluh = satuan(nomorpuluhan[0]);
        soundsPathSatuan = satuan(nomorpuluhan[1]);
        puluhanPathArr.push(soundsPathPuluh);
        puluhanPathArr.push(puluhanPath);
        puluhanPathArr.push(soundsPathSatuan);
    }
    return puluhanPathArr;
}

//argumen 3 digit
function ratusan(nomorratusan){
    var soundsPath;
    var ratusanPath = 'assets\/sounds\/ratus.mp3';
    var ratusanPathArr = [];
    if(nomorratusan === '1'){
        ratusanPathArr.push('assets\/sounds\/seratus.mp3');
    }else if(nomorratusan === '0'){

    }else{
        soundsPath = satuan(nomorratusan);
        ratusanPathArr.push(soundsPath);
        ratusanPathArr.push(ratusanPath);
    }
    return ratusanPathArr;
}
//argumen 4 digit
function ribuan(nomorribuan){
    var soundsPath;
    var ribuanPath = 'assets\/sounds\/ribu.mp3';
    var ribuanPathArr = [];
    if(nomorribuan === '1'){
        ribuanPathArr.push('assets\/sounds\/seribu.mp3');
    }else{
        soundsPath = satuan(nomorribuan);
        ribuanPathArr.push(soundsPath);
        ribuanPathArr.push(ribuanPath);
    }
    return ribuanPathArr;
}

function terbilang(num){
    var angkaArr = pecah(num);
    var pecahan = angkaArr.length;
    var soundsPathArr = [];
    var pathNumb;
    switch(pecahan){
        case 4:
            //soundsPathArr.push(nomorAntrianPath);
            soundsPathArr.push(ribuan(angkaArr[0]));
            soundsPathArr.push(ratusan(angkaArr[1]));
            soundsPathArr.push(puluhan(angkaArr[2] + angkaArr[3]));
            break;
        case 3:
            //soundsPathArr.push(nomorAntrianPath);
            soundsPathArr.push(ratusan(angkaArr[0]));
            soundsPathArr.push(puluhan(angkaArr[1] + angkaArr[2]));
            break;
        case 2:
            //soundsPathArr.push(nomorAntrianPath);
            soundsPathArr.push(puluhan(angkaArr[0] + angkaArr[1]));
            break;
        case 1:
            //soundsPathArr.push(nomorAntrianPath);
            soundsPathArr.push(satuan(angkaArr[0]));
            break;
        default:
            soundsPathArr.push(nomorAntrianPath);
            soundsPathArr.push('');
            break;
    }
    
    var fullPath =  soundsPathArr.toString();
    return fullPath.split(',');
}


function data_panggil(nomor, loket, jenis){
    var alpha = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var nomorAntrianPath = 'assets\/sounds\/nomor_antrian.mp3';
    var loketPath = terbilang(loket);
    var keloketPath = 'assets\/sounds\/keloket.mp3';
    var fullPath = terbilang(nomor);
    fullPath.push(keloketPath);
    fullPath = fullPath.concat(loketPath);
    fullPath.unshift(nomorAntrianPath);
    return fullPath;
}


//videojs
var myPlayer = videojs('my-video');
myPlayer.setVolume(0.1);