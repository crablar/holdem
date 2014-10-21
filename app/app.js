angular.module('myApp', [])
    .controller('GameController', ['$scope', function($scope){
        $scope.hero = new Player("Jeff");
        $scope.villain = new Player("Peter");

    }]);