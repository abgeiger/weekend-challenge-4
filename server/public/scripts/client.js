var app = angular.module('StarWarsApp', []);

app.controller('StarWarsController', ['$http', function ($http){
    var self = this;

    self.profilesArray = [];

    self.addLookinGood = function(profile) {
        if (profile.lookinGood) {
            profile.lookinGood++;
        } else {
            profile.lookinGood = 1;
        }
    }

    self.flipOver = function(profile) {
        if (profile.textUp) {
            profile.textUp = false;
        } else {
            profile.textUp = true;
            if (profile.viewed) {
                profile.viewed++;
            } else {
                profile.viewed = 1;
            }
        }
    }

    self.getProfiles = function() {
        $http({
            method: 'GET',
            url: '/profiles'
        }).then(function(response) {
            self.profilesArray = response.data;
        });
    }

    self.getProfiles();
}]);