app.controller("GetController", ['$scope', 'videocasts', 'feed', '$routeParams', 'ngMeta','youtubeFactory'
  ,function($scope, videocasts, feed, $routeParams, ngMeta, youtubeFactory){

  $scope.feedloaded = false;
  $scope.videocast = false;
  $scope.feedlist = [];
  $scope.getTime = function(mydate){
    var d = new Date(mydate);
    return d.getTime();
  };

  $scope.getEpisodes = function(urlRss){
    feed.list(urlRss, function(res){
      $scope.feedlist = res.responseData.feed.entries.slice(0, 9);
      $scope.feedloaded = true;
    });
  };

  videocasts.get($routeParams.videocastSlug, function(res){
    $scope.videocast = res;
    ngMeta.setTitle($scope.videocast.name);
    if(res.rss_link){ 
      $scope.feedloaded = false; 
      $scope.getEpisodes(res.rss_link);
    } else { 
      $scope.feedloaded = true; 
    }
  });
}]);
