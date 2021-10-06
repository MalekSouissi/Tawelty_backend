var express = require('express');
const cors = require("cors")
const db = require('../config/db.config.js');
const { restaurants } = require('../config/db.config.js');
const User = db.users;
var Sequelize = require('sequelize');
const Restaurant = db.restaurants;
const BookWait = db.bookwaitseats;
var moment = require('moment');
const BookWaitSeat = require('../models/BookWaitSeat.js');








//get Restaurant with bookwaitseat
exports.findRestaurantlwithBookWaitSeat = (req, res) => {

    const RestaurantId = req.params.id;
    return Restaurant.findByPk(RestaurantId, { include: ["bookwaitseat"] })
        .then(restaurant => {

            if (restaurant) {
                res.status(200).json(restaurant["bookwaitseat"])

            } else {
                res.send('restaurant deos not exist')

            }
        }).catch(err => {
            res.send('errror: ' + err)
        })
}

//Create Turnover
exports.CreateBookwaitseat = (req, res) => {
    var container = [];
    var i
    for (i = 0; i < req.body.length; i++) {
        const book = {
            id: req.body[i].id,
            RestaurantId: req.body[i].RestaurantId,
            debut: moment("1990-01-01 00:00:00", "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss"),
            fin: moment("1990-01-01 00:00:00", "YYYY-MM-DD HH:mm:ss").format("YYYY-MM-DD HH:mm:ss"),

        }
        container.push(book);
    }


    BookWait.bulkCreate(container)
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

//Create Turnover
exports.CreateBookwaitseatTRUE = (req, res) => {

    const book = [{
        id: req.body[0].id,
        RestaurantId: req.body[0].RestaurantId,
        debut: req.body[0].debut,
        fin: req.body[0].fin,
        guestName: req.body[0].guestName,
        confResv: req.body[0].confResv,
        cancResv: req.body[0].cancResv,
        UserId: req.body[0].UserId,
        random: req.body[0].random,
        other:req.body[0].other
    }]
    console.log("book", book)
    BookWait.bulkCreate(book)
        .then(book => {

            if (book) {
                res.status(200).json(book)

            } else {
                res.send('book dont create ')

            }
        }).catch(err => {
            res.send('errror: ')

        })
}

/*exports.CreateBookwaitseatTRUE = (req, res) => {

    const book = {
        id: req.body.id,
        RestaurantId: req.body.RestaurantId,
        debut: req.body.debut,
        fin: req.body.fin,
        guestName: req.body.guestName,
        confResv: req.body.confResv,
        cancResv: req.body.cancResv
    }
    console.log("book", book)
    BookWait.create(book)
        .then(book => {

            if (book) {
                res.status(200).json(book)

            } else {
                res.send('book dont create ')

            }
        }).catch(err => {
            res.send('errror: ')

        })
}*/


//UpdateConfBookWaitandSeat
exports.UpdateConfBookWaitandSeat = (req, res) => {

    const id = req.params.id;
    console.log("updatedata", req.body)
    BookWait.update(req.body, {
        where: { ids: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "BookWaitSeat was updated successfully."
                });
            } else {
                res.send({
                    message: `BookWaitSeat update table with ids=${ids}. Maybe BookWaitSeat was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Restaurant with id=" + id
            });
        });
}

//get Restaurant with bookwaitseat Seated
exports.findRestaurantlwithBookWaitSeatSeated = (req, res) => {
    const confResvs = "1"
    const datedefault = ""
    const RestaurantId = req.params.id;
    return Restaurant.findByPk(RestaurantId, { include: [{ model: BookWait, as: 'bookwaitseat', where: { confResv: confResvs } }] })
        .then(restaurant => {

            if (restaurant) {
                res.status(200).json(restaurant)

            } else {
                res.send('restaurant deos not exist')

            }
        }).catch(err => {
            res.send('errror: ' + err)
        })
}

//