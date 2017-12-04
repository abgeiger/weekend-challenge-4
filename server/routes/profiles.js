var express = require('express');
var router = express.Router();
// var pool = require('../modules/pool');

var profilesArray = [
    {
        image: 'images/luke-skywalker.jpeg',
        name: 'Luke Skywalker',
        bio: "Likes: power converters, the Force, bullseyeing womp rats in my T-16 back home. Dislikes: moisture farming, the empire."
    },
    {
        image: 'images/han-solo.jpeg',
        name: 'Han Solo',
        bio: "You can usually find me working on my ship or making the Kessel Run. I'm kinda a scoundrel. And ladies, I don't know who started this vicious rumor, but I don't always shoot first."
    },
    {
        image: 'images/leia.jpeg',
        name: 'Leia Organa',
        bio: "5'. Not looking for hookups. If you're scruffy looking and/or a nerf herder I'm not interested."
    },
    {
        image: 'images/chewie.jpeg',
        name: 'Chewbacca',
        bio: 'RRWWWGG!'
    },
    {
        image: 'images/boba-fett.jpeg',
        name: 'Boba Fett',
        bio: 'Really into disintegration. Not a big fan of sarlaccs.'
    },
    {
        image: 'images/anakin.jpeg',
        name: 'Anakin Skywalker',
        bio: "I don't like sand. It’s coarse and rough and irritating and it gets everywhere."
    }
];

router.get('/', function (req, res) {
    res.send(profilesArray);
});

module.exports = router;