app.factory('videocasts', ['$http', 'Slug', function($http, Slug){
  return {
    list: function(callback){
      $http.get('./data/videocasts.json?'+Date.now()).then(callback, callback(false));
    },
    get: function(slug, callback){
      var r;
      $http.get('./data/videocasts.json?'+Date.now()).then(function(res){
        for(var i = 0; i < res.data.length; i++){
          if(slug == Slug.slugify(res.data[i].name)){
            r = res.data[i];
            break;
          }
        };
        callback(r);
      }, callback(false));
    }
  };
}]);
