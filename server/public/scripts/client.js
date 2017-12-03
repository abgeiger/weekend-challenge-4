console.log('js');

var app = angular.module('StarWarsApp', []);

app.controller('StarWarsController', ['$http', function ($http){
    console.log('Star Wars Controller has been loaded');
    var self = this;

    self.profileArray = [
        {
            image: 'images/luke-skywalker.jpeg',
            description: 'Luke description here'
        },
        {
            image: 'images/han-solo.jpeg',
            description: 'Luke description here'
        },
        {
            image: 'images/leia.jpeg',
            description: 'Luke description here'
        },
        {
            image: 'images/chewie.jpeg',
            description: 'Luke description here'
        },
        {
            image: 'images/boba-fett.jpeg',
            description: 'Luke description here'
        },
        {
            image: 'images/anakin.jpeg',
            description: 'Luke description here'
        }
    ];

}]);