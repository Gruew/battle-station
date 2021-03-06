var GruewContstants = {
    appName: 'gruewApp',

    controllers: {
        userController: 'UserController',
        cropController: 'CropController'
    },

    templateUrls: {
        users1: 'views/users1.html',
        users2: 'views/users2.html',
        crops: 'views/crops.html'
    },

    serverUrls: {
        allUsers: 'http://localhost:9000/all-users',
        allCrops: 'http://localhost:9000/all-crops'
    }
};

var app = angular.module(GruewContstants.appName, ['ngRoute']);
app.config(function($routeProvider) {
   $routeProvider.when('/', {
       controller: GruewContstants.controllers.userController,
       templateUrl: GruewContstants.templateUrls.users1
   }).when('/users1', {
       redirectsTo: '/'
   }).when('/users2', {
       controller: GruewContstants.controllers.userController,
       templateUrl: GruewContstants.templateUrls.users2
   }).when('/crops', {
       controller: GruewContstants.controllers.cropController,
       templateUrl: GruewContstants.templateUrls.crops
   }).otherwise({
       redirectsTo: '/'
   });
});

var controllers = {
    UserController: function($scope, $http) {
        $scope.users = [];

        var success = function(response) {
            console.log('success! response code', response.data.response);
            $scope.users = response.data.payload;
        };

        var failure = function(response) {
            console.log('failure :( response:', response);
        };

        $http.get(GruewContstants.serverUrls.allUsers).then(success, failure);
    },

    CropController: function($scope, $http) {
        $scope.crops = [];

        var success = function(response) {
            $scope.crops = response.data.payload;
        };

        var failure = function(response) {
            console.log('Error: failed to receive crop data');
        };

        $http.get(GruewContstants.serverUrls.allCrops).then(success, failure);
    }
};

app.controller(controllers);