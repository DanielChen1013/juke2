app.factory('PlayerFactory', function($q){
	var Obj = {};
	var audio = document.createElement('audio');
	var isPlaying = false;
	var currentSong = null;
    var currentSongIndex;
    var ourSongList;
    var progress = 0;
	// $q.get(audioUrl)

	Obj.start = function(song,songList){
         console.log("playing");
    // stop existing audio (e.g. other song) in any case
    // Obj.pause();
        if (currentSong != null){
        	Obj.pause();
        }
        if (songList){

            currentSongIndex = songList.songs.indexOf(song);
            ourSongList=songList.songs;
        }
        currentSong = song;
        
        // currentSong.audioUrl = song.audioUrl;
        isPlaying = true;
        audio.src = song.audioUrl;
        audio.load();
        audio.play();
    };

	Obj.pause = function() {
        audio.pause();
        isPlaying = false;
  	};

	Obj.resume = function(){ // continues after pause
    
    // // resume current song
    // if (song === $scope.currentSong) return audio.start();
    // // enable loading new song
    // $scope.currentSong = song;
    audio.play();
    isPlaying=true;

	};

	Obj.isPlaying = function( ){ // returns boolean
        return isPlaying;	
	};

	Obj.getCurrentSong = function( ){ // be it playing or paused
        return currentSong;
	};

	Obj.next = function( ){ // moves to the next song in the list
       if (currentSongIndex === ourSongList.length-1){
            currentSong = ourSongList[0];
            Obj.start(currentSong);
       }else{
            currentSong = ourSongList[++currentSongIndex];
            Obj.start(currentSong);
        }	
	};

	Obj.previous = function( ){ // moves to the previous song in the list
        if (currentSongIndex === 0){
            currentSong = ourSongList[ourSongList.length-1];
            Obj.start(currentSong);
       }else{
            currentSong = ourSongList[--currentSongIndex];
            Obj.start(currentSong);
        }   
		
	};

	Obj.getProgress = function( ){
        if (isPlaying){
        progress = audio.currentTime / audio.duration;
        }
        return progress;	
	};

	return Obj;
})
.factory('StatsFactory', function ($q) {
    var statsObj = {};
    statsObj.totalTime = function (album) {
        var audio = document.createElement('audio');
        return $q(function (resolve, reject) {
            var sum = 0;
            var n = 0;
            function resolveOrRecur () {
                if (n >= album.songs.length) resolve(sum);
                else audio.src = album.songs[n++].audioUrl;
            }
            audio.addEventListener('loadedmetadata', function () {
                sum += audio.duration;
                resolveOrRecur();
            });
            resolveOrRecur();
        });
    };
    return statsObj;
});