var app = angular.module("AVBR", ["slugifier","ngRoute","checklist-model", "ngSanitize", "ngMeta"]);

app.run(['ngMeta', function(ngMeta) {
  ngMeta.init();
}]);

app.config(['ngMetaProvider', function(ngMetaProvider) {
  ngMetaProvider.useTitleSuffix(true);
  ngMetaProvider.setDefaultTitle('Lista de Videocasts');
  ngMetaProvider.setDefaultTitleSuffix(' - Awesome Videocasts BR');
}]);
