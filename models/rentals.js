var Sequelize = require('sequelize');

var sequelize = new Sequelize('earnup', null, null, {
  host: 'localhost',
  port: 5432,
  dialect: 'postgres'
});

var Rentals = sequelize.define('rentals',
  {
    name: {
      type: Sequelize.STRING,
      field: 'name'
    },
    host_id: {
      type: Sequelize.INTEGER,
      field: 'host_id'
    },
    host_name: {
      type: Sequelize.STRING,
      field: 'host_name'
    },
    neighbourhood_group: {
      type: Sequelize.STRING,
      field: 'neighbourhood_group'
    },
    neighbourhood: {
      type: Sequelize.STRING,
      field: 'neighbourhood'
    },
    latitude: {
      type: Sequelize.DECIMAL(8, 5),
      field: 'latitude'
    },
    longitude: {
      type: Sequelize.DECIMAL(8, 5),
      field: 'longitude'
    },
    room_type: {
      type: Sequelize.STRING,
      field: 'room_type'
    },
    price: {
      type: Sequelize.INTEGER,
      field: 'price'
    },
    minimum_nights: {
      type: Sequelize.INTEGER,
      field: 'minimum_nights'
    },
    number_of_reviews: {
      type: Sequelize.INTEGER,
      field: 'number_of_reviews'
    },
    last_review: {
      type: Sequelize.DATE,
      field: 'last_review'
    },
    reviews_per_month: {
      type: Sequelize.DECIMAL(4,2),
      field: 'reviews_per_month'
    },
    calculated_host_listings_count: {
      type: Sequelize.INTEGER,
      field: 'calculated_host_listings_count'
    },
    availability_365: {
      type: Sequelize.INTEGER,
      field: 'availability_365'
    }
  },
  {
    timestamps: false
  }
);

module.exports = Rentals;