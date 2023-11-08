'use strict';

var utils = require('../utils/writer.js');
var Calendar = require('../service/CalendarService');

module.exports.addReservation = function addReservation (req, res, next) {
  Calendar.addReservation()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAllReservations = function getAllReservations (req, res, next) {
  Calendar.getAllReservations()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.partialUpdateReservation = function partialUpdateReservation (req, res, next) {
  Calendar.partialUpdateReservation()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeReservation = function removeReservation (req, res, next, reservationId) {
  Calendar.removeReservation(reservationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchReservations = function searchReservations (req, res, next, service, customerName, timePeriod) {
  Calendar.searchReservations(service, customerName, timePeriod)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateReservation = function updateReservation (req, res, next, reservationId) {
  Calendar.updateReservation(reservationId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
