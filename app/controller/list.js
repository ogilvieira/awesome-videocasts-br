app.controller("ListController", ['$scope', 'videocasts', 'feed', 'ngMeta', function($scope, videocasts, feed, ngMeta){

  ngMeta.setTitle('Lista de videocasts');

  $scope.videocasts = [];
  $scope.loaded = false;
  $scope.searchform = {};

  (function(){
    var f = localStorage.getItem('searchform');
    if(f){ $scope.searchform = JSON.parse(f); }
  })();

  $scope.stripTags = function(text){
    var regex = /(<([^>]+)>)/ig,
        result = text.replace(regex, "");
        return result;
  };

  $scope.clearQuery = function(){
    localStorage.removeItem('searchform');
    $scope.searchform = {};
  };

  $scope.$watch('searchform', function(){
    localStorage.setItem('searchform', JSON.stringify($scope.searchform));
  }, true);

  videocasts.list(function(res){
    if(res.data){ $scope.videocasts = res.data; $scope.loaded = true; }
  });

}]);
