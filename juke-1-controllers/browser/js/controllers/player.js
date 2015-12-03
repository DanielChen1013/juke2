app.controller('AlbumCtrl', function($scope, $rootScope, PlayerFactory){
  // PlayerFactory.start
  console.log(PlayerFactory);
  $scope.currentSong = PlayerFactory.getCurrentSong;
  // PlayerFactory.audio.addEventListener('ended', function () {

  //   PlayerFactory.next();
  // });
  $scope.playing = PlayerFactory.isPlaying;
  $scope.$on('pause', PlayerFactory.pause;
  $scope.$on('play', PlayerFactory.start;

});

// footer
app.controller('PlayerCtrl', function($scope, $rootScope, PlayerFactory){
  // PlayerFactory.getCurrentSong
  // PlayerFactory.pause
  
 
  $scope.toggle = PlayerFactory.resume;
  $scope.next = PlayerFactory.next;    
  $scope.previous = PlayerFactory.previous;

  // PlayerFactory.audio.addEventListener('timeupdate', function () {
  //   $scope.progress = 100 * PlayerFactory.getProgress();
  //   $scope.$digest();
  // });

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

