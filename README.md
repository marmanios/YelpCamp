# YelpCamp - The Web Developer Bootcamp 2022 Final Project
![login](./Yelpcamp (1).png)
![login](Yelpcamp (1).png)
![login](https://github.com/marmanios/YelpCamp/blob/8fa603574080536b571d1a0f66494aefb01b33d3/Yelpcamp%20(1).png)
![login](./Yelpcamp (1).png)?raw=true
![login](Yelpcamp (1).png)?raw=true
![login](https://github.com/marmanios/YelpCamp/blob/8fa603574080536b571d1a0f66494aefb01b33d3/Yelpcamp%20(1).png)?raw=true
### What is YelpCamp

YelpCamp is an online service where people can post, browse, and review campsites. The purpose of this site is to give people a simpler way of discovering camping locations while also enabling campsite owners to increase awareness of their locations.

### Functionality

#### Accounts

Upon opening the application, the user is greeted with the splash page seen above. From there, the user is instructed to either login or browse campgrounds. YelpCamp features a fully functional login and registration page, requiring your username, email, and password. The password stored is hashed and salted, thus making it fully secured.

#### Browse Page and Cluster Map

Once logged in you are redirected to the browsing page, where you are introduced to the published campgrounds. Campgrounds can be discovered through scrolling or by browsing the map. The map includes a pin at the location of every campground and can be clicked to take you to the show page of said campground

#### Campgrounds

Campgrounds include a title alongside a short description of the campground with a daily price. In addition, the campground includes a location which is then added to the cluster map and images added by the author.

Campgrounds can be edited to update any information or images and they can also be deleted, completely removing them and their images from the database.

#### Reviews

Reviews can be placed on any campground by a user. Reviews are on a 1-5 scale and include the review author and a review body


## Setup and requirements


#### Initial install

Upon downloading the YelpCamp file, run npm I to install the necessary node packages. Additionally, install MongoDB

#### Seeding the database

In the Seedhelpers.js file, replace the client_ID with your own unsplash API Key or replace the function with some other means of providing randomly generated images.

After, run the index.js file in the seeds folder

### Running the app

Finally, run app.js and run the *Mongod* command (if you don't have mongo installed as a service).
