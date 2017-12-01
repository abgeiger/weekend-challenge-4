console.log('js');

var app = angular.module('StarWarsApp', []);

app.controller('StarWarsController', ['$http', function ($http){
    console.log('Star Wars Controller has been loaded');
    var self = this;

}]);