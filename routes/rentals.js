var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var sequelize = new Sequelize('earnup', null, null, {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

var Rentals = require('../models/rentals');

var earthRadius = 6371000;

/* GET questions listing. */
router.get('/', async function(req, res, next) {
  var lat = req.query.latitude;
  var long = req.query.longitude;
  var distance = req.query.distance;

  var latDiff = toDegrees(distance/earthRadius);
  var maxLat = lat + latDiff;
  var minLat = lat - latDiff;
  var longDiff = toDegrees(Math.asin(distance/earthRadius) / Math.cos(toRadians(lat)))
  var maxLong = long + longDiff;
  var minLong = long - longDiff;

  var rentals = await Rentals.findAll({});
  var filteredRentals = []
  for (var i = 0; i < rentals.length; i++) {
    console.log(rentals[i].latitude);
    curLat = rentals[i].latitude;
    curLong = rentals[i].longitude
    if(isWithinDistance(lat, long, curLat, curLong, distance)){
      filteredRentals.push(rentals[i])
    }
  }

  res.send(filteredRentals);
});

function isWithinDistance(lat1, long1, lat2, long2, distance) {
  var phi1 = toRadians(lat1);
  var phi2 = toRadians(lat2);
  var deltaPhi = toRadians(lat2 - lat1);
  var deltaLamda = toRadians(long2 - long1);

  var a = Math.pow(Math.sin(deltaPhi/2), 2) + 
          Math.cos(phi1) * Math.cos(phi2) *
          Math.pow(Math.sin(deltaLamda/2), 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = earthRadius * c;

  return d <= distance;
}

function toRadians(degrees) {
  var answer = degrees * Math.PI / 180
  return answer;
}

function toDegrees(radians) {
  var answer = radians * 180;
  return answer;
}

module.exports = router;
