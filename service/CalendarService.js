'use strict';


/**
 * Add a new reservation
 *
 * returns Reservation
 **/
exports.addReservation = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "service" : "service",
  "customerId" : 6,
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "customerName" : "customerName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all reservations
 *
 * returns List
 **/
exports.getAllReservations = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "service" : "service",
  "customerId" : 6,
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "customerName" : "customerName"
}, {
  "service" : "service",
  "customerId" : 6,
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "customerName" : "customerName"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Partially update a reservation
 *
 * returns Reservation
 **/
exports.partialUpdateReservation = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "service" : "service",
  "customerId" : 6,
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "customerName" : "customerName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove a reservation
 *
 * reservationId Long ID of the reservation to remove
 * no response value expected for this operation
 **/
exports.removeReservation = function(reservationId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Search reservations
 *
 * service String Service provided by the customer (optional)
 * customerName String Customer name (optional)
 * timePeriod Date Time period for the search (optional)
 * returns List
 **/
exports.searchReservations = function(service,customerName,timePeriod) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "service" : "service",
  "customerId" : 6,
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "customerName" : "customerName"
}, {
  "service" : "service",
  "customerId" : 6,
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "customerName" : "customerName"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update an existing reservation
 *
 * reservationId Long ID of the reservation to update
 * returns Reservation
 **/
exports.updateReservation = function(reservationId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "service" : "service",
  "customerId" : 6,
  "startTime" : "2000-01-23T04:56:07.000+00:00",
  "id" : 0,
  "endTime" : "2000-01-23T04:56:07.000+00:00",
  "customerName" : "customerName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

