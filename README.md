# Foodstagram - Server Side App

A server side application that believed to be a part of foostagram web application

## Getting Started

To use this app, you need to follow the instruction and obey the routes with it's requirement

### Prerequisites

You need a terminal that does not have buses.

### Installing

First you need to clone the github repository url above

```
git clone <repository link>
```

Install all dependency on the repository by run command

```
npm i
```

Run the server side app! (finally)

```
npm start
```

That's it, and may the fork be with you!

## How to Use It

You can get any data we provide by following these route and http method

### List of routes:

ROUTE  |  HTTP  | Description
-------|--------|------------
/ | GET | Returns Express Works

### List of USERS routes:

ROUTE  |  HTTP  | Description | Body | Header | Result
-------|--------|-------------|------|--------|---------
/register | POST | Creating new user | username, email, password, city | - | Success or error message
/login | POST | Login into user account | email, password | user, token or error message
/update | POST | Updating user account | username, email, password, city | - | Updated data or error message
/findUser | GET | Get a user account | - | id | user data or error message

### List of FOODS routes:

ROUTE  |  HTTP  | Description | Body | Header | Result
-------|--------|-------------|------|--------|---------
/image | GET | Get all images with populated user | - | - | JSON type all images
/image | POST | Post an image to Foodstagram | user, title, description, tags[], image file | token | JSON type image uploaded
/image/userID | GET | Get all images posted by User | - | - | Images posted by user
/image/del/imageId | DELETE | Delete an image posted by User | - | - | Deleted image


### List of ZOOMATO routes:

ROUTE  |  HTTP  | Description | Body | Header | Result
-------|--------|-------------|------|--------|---------
/search | GET | Get foods in zomato api | - | food title | JSON type searched foods
/reviews | GET | Get reviews from zomato | - | user id | JSON type food review

## Built With

* Vue
* Google Cloud Server
* Google Cloud Platform
* mLab
* MongoDB with mLab
* Express
* NodeJS
* Axios
* MomentJS
* BcryptJS
* JWT
* Multer

## Authors

* **Arief** [Github](https://github.com/ariefardi)

* **Tushar** [Github](https://github.com/TushBedi)

* **Rin** [Github](https://github.com/Rin-ng)

* **Haddawi** [Github](https://github.com/dawimuhammad)

## License

This project is NOT licensed under the MIT License - do not see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
