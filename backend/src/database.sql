CREATE DATABASE fvc;

DROP TABLE IF EXISTS produce, ingrdients, videos, users, userFavouriteVideo;

CREATE TABLE produce(
    produceId SERIAL PRIMARY KEY,
    produceName VARCHAR(255) NOT NULL UNIQUE,
    price NUMERIC DEFAULT 0.00,
    calories INTEGER DEFAULT 0
);

CREATE TABLE ingredients(
    ingredientId SERIAL PRIMARY KEY,
    produceId INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    videoId INTEGER
);

CREATE TABLE videos(
    videoId SERIAL PRIMARY KEY,
    userId INTEGER NOT NULL,
    videoUrl VARCHAR(255) NOT NULL UNIQUE,
    favourites INTEGER DEFAULT 0,
    clicks INTEGER DEFAULT 0,
    timeInMinutes INTEGER DEFAULT 0,
    vegetarian BOOLEAN DEFAULT FALSE,
    added BIGINT NOT NULL
);

CREATE TABLE users(
    userId SERIAL PRIMARY KEY,
    username VARCHAR(20) NOT NULL UNIQUE,
    hashcode VARCHAR(255) NOT NULL
);

CREATE TABLE userFavouriteVideo(
    userId INTEGER,
    videoId INTEGER
);

ALTER TABLE ingredients ADD FOREIGN KEY (produceId) REFERENCES produce(produceId) ON DELETE CASCADE;
ALTER TABLE ingredients ADD FOREIGN KEY (videoId) REFERENCES videos(videoId) ON DELETE CASCADE;

ALTER TABLE videos ADD FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE;

ALTER TABLE userFavouriteVideo ADD FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE;
ALTER TABLE userFavouriteVideo ADD FOREIGN KEY (videoId) REFERENCES videos(videoId);




