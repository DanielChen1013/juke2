app.factory('PlayerFactory', function($q){
	var Obj = {};
	var audio = document.createElement('audio');
	var isPlaying = false;
	var currentSong = null;
	// $q.get(audioUrl)

	Obj.start = function(song){
    // stop existing audio (e.g. other song) in any case
    // Obj.pause();
    if (currentSong != null){
    	Obj.pause();
    }
    currentSong = song;
    currentSong.audioUrl = song.audioUrl;
    isPlaying = true;
    audio.src = song.audioUrl;
    audio.load();
    audio.play();
    };

	Obj.pause = function() {
    audio.pause();
    isPlaying = false;
  	};

	// Obj.resume = function( ){ // continues after pause
    
    // // resume current song
    // if (song === $scope.currentSong) return audio.start();
    // // enable loading new song
    // $scope.currentSong = song;

	// };

	// Obj.isPlaying = function( ){ // returns boolean

		
	// };

	// Obj.getCurrentSong = function( ){ // be it playing or paused

		
	// };

	// Obj.getCurrentSong = function( ){ // be it playing or paused

		
	// };

	// Obj.next = function( ){ // moves to the next song in the list

		
	// };

	// Obj.previous = function( ){ // moves to the previous song in the list

		
	// };

	// Obj.getProgress = function( ){

		
	// };

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