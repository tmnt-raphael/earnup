COPY rentals(id,name,host_id,host_name,neighbourhood_group,neighbourhood,latitude,longitude,room_type,price,minimum_nights,number_of_reviews,last_review,reviews_per_month,calculated_host_listings_count,availability_365)
FROM '/Users/Ken/Desktop/AB_NYC_2019.csv' DELIMITER ',' CSV HEADER;
