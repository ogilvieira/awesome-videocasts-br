app.controller("GetController", ['$scope', 'videocast', 'feed', '$routeParams', 'ngMeta',
  function($scope, videocast, feed, $routeParams, ngMeta){

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

  videocast.get($routeParams.videocastSlug, function(res){
    $scope.podcast = res;
    ngMeta.setTitle($scope.podcast.name);
    if(res.rss_link){ 
      $scope.feedloaded = false; 
      $scope.getEpisodes(res.rss_link);
    } else { 
      $scope.feedloaded = true; 
    }
  });
}]);
