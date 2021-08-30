var express = require('express');
const cors = require("cors")
const db = require('../config/db.config.js');
const { restaurants } = require('../config/db.config.js');
const User = db.users;
const Restaurant = db.restaurants;


exports.CreateListRestaurant = (req, res) => {
    var container = [];
    var list = [
        'Ange Bleu Gammarth',
        'Palm Beach',
        'Bodega Bucket',
        'La cabane Sousse',
        'Dar Sultan Sousse',
        'Wolf & Rabbit',
        'The Gate Resto - Lounge',
        'The Adress',
        'Au bon vieux temps',
        'La Bottega',
        'The House'
    ]


    var adresse = [
        "carthage tahlasso resort Gammarth",
        "Hôtel palm beach hammamet(9, 52 km) 8050 Hammamet",
        "Zone Touristique Gammarth, Marsa",
        "Rue Ennakhil khzema Est 4011 Sousse",
        "15 Rue Othmane Osmane - La Médina(70, 09 km) 4000 Sousse",
        "rue mohieddine kelibi, manar 2, a coté de la clinique Avicenne Tunis 1013 Tunis",
        "110 Rue Radhia Hadded(62, 83 km) 1000 Tunis",
        "LES JARDINS DE CARTHAGE(59, 09 km) 2046 Sidi Daoud, Tunis, Tunisia",
        "56 Rue Hedi Zarrouk(58, 03 km) 2026 Sidi Bou Saïd",
        "20 Av Habib Bourghiba(56, 55 km) 2033 Mégrine - Coteaux, Tunis",
        "17 voie de la mer rouge(65, 84 km) 4011 Hammam Sousse"
    ]
    var i
    for (i = 0; i < list.length; i++) {
        const restData = {
            NomResto: list[i],
            Description: "",
            adresse: adresse[i],
            NBzone: '2',
            temps_ouverture: req.body.temps_ouverture,
            temps_fermeture: req.body.temps_ouverture,
            heureDebut: "00:00",
            heureFin: "00:00",
            UserId: 0,

        }
        container.push(restData);
    }


    Restaurant.bulkCreate(container)
        .then(container => {

            if (container) {
                res.status(200).json(container)

            } else {
                res.send('container dont create ')

            }
        }).catch(err => {
            res.send('errror: ')

        })
}