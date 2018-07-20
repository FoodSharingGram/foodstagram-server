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
-------|--------|-------------|------|-------
/register | POST | Creating new user | username, email, password, city | - | Success or error message
/login | POST | Login into user account | email, password | user, token or error message
/update | POST | Updating user account | username, email, password, city | - | Updated data or error message
/findUser | GET | Get a user account | - | id | user data or error message

## Built With

*
*
*

## Authors

* **Arief** [PurpleBooth](https://github.com/PurpleBooth)

* **Tushar** [PurpleBooth](https://github.com/PurpleBooth)

* **Rin** [PurpleBooth](https://github.com/PurpleBooth)

* **Haddawi** [PurpleBooth](https://github.com/PurpleBooth)

## License

This project is NOT licensed under the MIT License - do not see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
