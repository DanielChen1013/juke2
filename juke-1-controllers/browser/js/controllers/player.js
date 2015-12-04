
// footer
app.controller('PlayerCtrl', function($scope, $rootScope, PlayerFactory){
  // PlayerFactory.getCurrentSong
  // PlayerFactory.pause
  
 
  $scope.toggle = function(song){
    return PlayerFactory.start(song);
  }
  $scope.next = function(){
    return PlayerFactory.next(); 
    }   
  $scope.previous = function(){
    return PlayerFactory.previous();
  }
  $scope.progress = function(){
    return 100*PlayerFactory.getProgress();
  }
  
  $scope.currentSong = function(){
    return PlayerFactory.getCurrentSong();
  }

  $scope.isPlaying = function(){
    return PlayerFactory.isPlaying();
  }

});




  // incoming events (from Album or toggle)
 
  // functionality
  // function pause () {
  //   audio.pause();
  //   $scope.playing = false;
  // }

  // function play (event, song){
  //   // stop existing audio (e.g. other song) in any case
  //   pause();
  //   $scope.playing = true;
  //   // resume current song
  //   if (song === $scope.currentSong) return audio.play();
  //   // enable loading new song
  //   $scope.currentSong = song;
  //   audio.src = song.audioUrl;
  //   audio.load();
  //   audio.play();
  // }

  // outgoing events (to Album)

