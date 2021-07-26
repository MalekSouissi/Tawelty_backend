var express = require('express');
const cors = require("cors")
const db = require('../config/db.config.js');
const { tables } = require('../config/db.config.js');
const Salle = db.Salles;
 
 
const Restaurant = db.restaurants;
//Create Salle
exports.CreateSalle = (req, res) => {

    const Salledata = {
        name: req.body.name,
        RestaurantId: req.body.RestaurantId,
    }
    Salle.create(Salledata)
        .then(Salledata => {

            if (Salledata) {
                res.status(200).json(Salledata)

            } else {
                res.send('Salle dont create ')

            }
        }).catch(err => {
            res.send('errror: ')

        })
}

//get Restaurant with Salles
exports.findRestaurantlwithSalles = (req, res) => {
    const RestaurantId = req.params.id;
    
    return Restaurant.findByPk(RestaurantId, { include: ["salles"] })
        .then(restaurant => {

            if (restaurant) {
       
 
                res.send(restaurant)
               
            } else {
                res.send('restaurant deos not exist')

            }
        }).catch(err => {
            res.send('errror: ' + err)
        })
}