const properties = require("./json/properties.json");
const users = require("./json/users.json");
const { Pool } = require('pg');

const pool = new Pool({
  user: "development",
  password: "development",
  host: "localhost",
  database: "lightbnb"
});

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function (email) {

  return pool
    .query(
    `SELECT * FROM users
    WHERE email = $1 LIMIT 1;`, [email])
    .then((result) => {
      if (result.rows.length === 0) {
        return null;
      }
      return result.rows[0];
    })
    .catch((err) => {
      console.error('Error querying database: ', err);
      throw err;
    })

};

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function (id) {

  return pool
    .query(
    `SELECT * FROM users
    WHERE id = $1 LIMIT 1;`, [id])
    .then((result) => {
      if (result.rows.length === 0) {
        return null;
      }
      return result.rows[0];
    })
    .catch((err) => {
      console.error('Error querying database: ', err);
      throw err;
    })
};

/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser = function (user) {

  const queryParams = [user.name, user.email, user.password];

  return pool
  .query(
  `INSERT INTO users (name, email, password) 
  VALUES ($1, $2, $3)
  RETURNING *;`, queryParams)
  .then((result) => {
    return result.rows[0];
  })
  .catch((err) => {
    console.error('Error adding user:', err.message);
    throw err;
  })
};

/// Reservations

/**
 * Get all reservations for a single user.
 * @param {string} guest_id The id of the user.
 * @return {Promise<[{}]>} A promise to the reservations.
 */
const getAllReservations = function (guest_id, limit = 10) {
  return pool
  .query(`
  SELECT reservations.*, properties.title, properties.cost_per_night, avg(property_reviews.rating) as average_rating
  FROM reservations
  JOIN properties ON properties.id = reservations.property_id
  JOIN property_reviews ON properties.id = property_reviews.property_id
  WHERE reservations.guest_id = $1
  GROUP BY reservations.id, properties.title, properties.cost_per_night
  ORDER BY reservations.start_date
  LIMIT $2;
    `, [guest_id, limit])
  .then((result) => {
    return result.rows;
  })
  .catch((err) => {
    console.error('Error fetching reservations: ', err.message);
    throw err;
  })
};

/// Properties

/**
 * Get all properties.
 * @param {{}} options An object containing query options.
 * @param {*} limit The number of results to return.
 * @return {Promise<[{}]>}  A promise to the properties.
 */
const getAllProperties = function (options, limit = 10) {

  return pool
    .query(`SELECT * FROM properties LIMIT $1;`, [limit])
    .then((result) => {
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    })
};

/**
 * Add a property to the database
 * @param {{}} property An object containing all of the property details.
 * @return {Promise<{}>} A promise to the property.
 */
const addProperty = function (property) {
  const propertyId = Object.keys(properties).length + 1;
  property.id = propertyId;
  properties[propertyId] = property;
  return Promise.resolve(property);
};

module.exports = {
  getUserWithEmail,
  getUserWithId,
  addUser,
  getAllReservations,
  getAllProperties,
  addProperty,
};
