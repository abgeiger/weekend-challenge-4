console.log('js');

var app = angular.module('StarWarsApp', []);

app.controller('StarWarsController', ['$http', function ($http){
    console.log('Star Wars Controller has been loaded');
    var self = this;

    self.profilesArray = [];

    self.getProfiles = function() {
        $http({
            method: 'GET',
            url: '/profiles'
        }).then(function(response) {
            console.log('GET profiles response', response.data);
            self.profilesArray = response.data;
        });
    }
}]);