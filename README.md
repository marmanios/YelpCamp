# YelpCamp - The Web Developer Bootcamp 2022 Final Project
![login](https://github.com/marmanios/YelpCamp/blob/c54293fb1fd4c5d975c633e915874949fb9ef12b/Yelpcamp%20(2).png)
### What is YelpCamp

YelpCamp is an online service where people can post, browse, and review campsites. The purpose of this site is to give people a simpler way of discovering camping locations while also enabling campsite owners to increase awareness of their locations.

### Functionality

#### Accounts

Upon opening the application, the user is greeted with the splash page seen above. From there, the user is instructed to either login or browse campgrounds. YelpCamps registration page requires your username, email, and password. The password stored is hashed and salted, thus making it fully secure.

![login](https://github.com/marmanios/YelpCamp/blob/c54293fb1fd4c5d975c633e915874949fb9ef12b/Yelpcamp%20(4).png)

#### Browse Page and Cluster Map

Once logged in you are redirected to the browsing page, where you are introduced to the published campgrounds. Campgrounds can be discovered through scrolling or by browsing the map. The map includes a pin at the location of every campground and can be clicked to take you to the show page of said campground

![login](https://github.com/marmanios/YelpCamp/blob/c54293fb1fd4c5d975c633e915874949fb9ef12b/Yelpcamp%20(3).png)


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
