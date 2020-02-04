# earnup

## Introduction

This RESTful service provides the rentals of a given area. The area is defined by the coordinates (in latitude and longitude) of the center of the area and its radius (in meters).

## Usage Instructions

To use the service, perform a REST calll on the service:

```http
http://localhost:3000/rentals?latitude=40.64749&longitude=-73.97237&distance=12000
```

The parameters must be specified in the query string of the URL. The parameters are:

1. latitude - This is the latitude part of the coordinates, which is specified in degrees.
2. longitude - This is the longitude part of the coordinates, which is specified in degrees.
3. distance - This is the radius of the area, which is specified in meters.

The service would return a JSON of the results:

```json
[
    {
        "id": 2539,
        "name": "Clean & quiet apt home by the park",
        "host_id": 2787,
        "host_name": "John",
        "neighbourhood_group": "Brooklyn",
        "neighbourhood": "Kensington",
        "latitude": "40.64749",
        "longitude": "-73.97237",
        "room_type": "Private room",
        "price": 149,
        "minimum_nights": 1,
        "number_of_reviews": 9,
        "last_review": "2018-10-19",
        "reviews_per_month": "0.21",
        "calculated_host_listings_count": 6,
        "availability_365": 365
    },
    {
        "id": 2595,
        "name": "Skylit Midtown Castle",
        "host_id": 2845,
        "host_name": "Jennifer",
        "neighbourhood_group": "Manhattan",
        "neighbourhood": "Midtown",
        "latitude": "40.75362",
        "longitude": "-73.98377",
        "room_type": "Entire home/apt",
        "price": 225,
        "minimum_nights": 1,
        "number_of_reviews": 45,
        "last_review": "2019-05-21",
        "reviews_per_month": "0.38",
        "calculated_host_listings_count": 2,
        "availability_365": 355
    }
]
```

## Conclusion

Have fun using the service!
