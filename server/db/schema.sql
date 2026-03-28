CREATE DATABASE IF NOT EXISTS database_data;
USE database_data;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);

CREATE TABLE IF NOT EXISTS friends (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  age INT(2),
  location VARCHAR(200),
  description VARCHAR(500),
  photoLink VARCHAR(100),
  tags JSON
);

CREATE TABLE IF NOT EXISTS spooners (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  age INT(2),
  location VARCHAR(200),
  description VARCHAR(500),
  photoLink VARCHAR(100),
  tags JSON
);

-- Test data: -- 

-- Users
INSERT INTO users (name, email) VALUES
('Alice Johnson', 'alice@gmail.com'),
('Bob Smith', 'bob@gmail.com'),
('Carol White', 'carol@gmail.com'),
('David Brown', 'david@gmail.com'),
('Emma Davis', 'emma@gmail.com');

-- Friends
INSERT INTO friends (name, email, age, location, description, photoLink, tags) VALUES
('James Wilson', 'james@gmail.com', 24, 'London, UK', 'Loves hiking and outdoor adventures', 'https://randomuser.me/api/portraits/men/1.jpg', '["hiking", "outdoors", "photography"]'),
('Sophie Turner', 'sophie@gmail.com', 22, 'Manchester, UK', 'Coffee addict and bookworm', 'https://randomuser.me/api/portraits/women/1.jpg', '["reading", "coffee", "art"]'),
('Liam Harris', 'liam@gmail.com', 27, 'Edinburgh, UK', 'Musician and part time chef', 'https://randomuser.me/api/portraits/men/2.jpg', '["music", "cooking", "guitar"]'),
('Mia Clark', 'mia@gmail.com', 23, 'Bristol, UK', 'Yoga teacher who loves travel', 'https://randomuser.me/api/portraits/women/2.jpg', '["yoga", "travel", "wellness"]'),
('Noah Lewis', 'noah@gmail.com', 25, 'Leeds, UK', 'Gamer and film enthusiast', 'https://randomuser.me/api/portraits/men/3.jpg', '["gaming", "films", "tech"]');

-- Spooners
INSERT INTO spooners (name, email, age, location, description, photoLink, tags) VALUES
('Olivia Martin', 'olivia@gmail.com', 26, 'London, UK', 'Dog lover and brunch fanatic', 'https://randomuser.me/api/portraits/women/3.jpg', '["dogs", "brunch", "running"]'),
('Ethan Walker', 'ethan@gmail.com', 28, 'Glasgow, UK', 'Architect who loves city exploring', 'https://randomuser.me/api/portraits/men/4.jpg', '["architecture", "travel", "cycling"]'),
('Isla Scott', 'isla@gmail.com', 21, 'Aberdeen, UK', 'Student and amateur photographer', 'https://randomuser.me/api/portraits/women/4.jpg', '["photography", "art", "music"]'),
('Harry Thompson', 'harry@gmail.com', 29, 'Birmingham, UK', 'Fitness coach and foodie', 'https://randomuser.me/api/portraits/men/5.jpg', '["fitness", "food", "sports"]'),
('Ava Robinson', 'ava@gmail.com', 24, 'Cambridge, UK', 'Scientist who paints on weekends', 'https://randomuser.me/api/portraits/women/5.jpg', '["science", "painting", "hiking"]');