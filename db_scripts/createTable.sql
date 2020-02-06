CREATE TABLE rentals (id INTEGER PRIMARY KEY, name VARCHAR, host_id INTEGER, host_name VARCHAR, neighbourhood_group VARCHAR, neighbourhood VARCHAR, latitude NUMERIC(8,5), longitude NUMERIC(8,5), room_type VARCHAR, price INTEGER, minimum_nights INTEGER, number_of_reviews INTEGER, last_review DATE, reviews_per_month NUMERIC(4,2), calculated_host_listings_count INTEGER, availability_365 INTEGER);
