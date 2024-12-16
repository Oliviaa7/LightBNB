INSERT INTO users (name, email, password)
VALUES ('Jessica', 'jessica@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Kieran', 'kieran@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Jess', 'jess@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Jordyn', 'jordyn@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.'),
('Dominique', 'dom@email.com', '$2a$10$FB/BOAVhpuLvpOREQVmvmezD4ED/.JBIDRh70tGevYzYzQgFId2u.');

INSERT INTO properties (owner_id, title, description, thumbnail_photo_url, cover_photo_url, cost_per_night, parking_spaces, number_of_bathrooms, number_of_bedrooms, country, street, city, province, post_code)
VALUES (1, 'Off in the Mountains', 'mountain getaway', 'https://www.pexels.com/photo/landscape-photography-of-mountains-covered-in-snow-691668/', 'https://www.pexels.com/photo/aerial-view-of-mountain-and-body-of-water-1562/', 200, 2, 3, 3, 'Canada', '123 Mount Rd', 'Nelson', 'BC', 'V1A1A1'),
(2, 'Bike Paradise', 'mountain bikes galore', 'https://www.pexels.com/photo/person-riding-bike-making-trek-on-thin-air-71104/', 'https://www.pexels.com/photo/man-standing-near-shore-1208777/', 250, 2, 2, 3, 'Canada', '456 Wahoo St', 'Squamish', 'BC', 'V6V6V6'),
(3, 'Cozy Lakeside', 'Down by the shore', 'https://www.pexels.com/photo/pebble-shoreline-of-lake-in-los-lagos-chile-29713715/', 'https://www.pexels.com/photo/woman-standing-by-bench-on-lakeshore-20994226/', 300, 2, 3, 3, 'Canada', '789 Relax St', 'Kelowna', 'BC', 'V3V3V3');

INSERT INTO reservations (start_date, end_date, property_id, guest_id)
VALUES ('2024-07-02', '2024-07-10', 1, 4),
('2024-09-15', '2024-09-20', 3, 5),
('2024-10-20', '2024-10-25', 2, 1);

INSERT INTO property_reviews (guest_id, property_id, reservation_id, rating, message)
VALUES (5, 1, 1, 4, 'Mountains ooh'),
(5, 3, 2, 5, 'Down by the shore, down by the EXCELLENT'),
(1, 2, 3, 5, 'Biking-- rad.');
