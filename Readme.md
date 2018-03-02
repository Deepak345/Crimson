# Crimson

### What is Crimson?

_A web application to provide single platform for organizing a blood camp._<br>

### What does crimson provide?

##### For inviduals
1. Register to blood donation camps conducted by organizations.
2. Post requests for blood donation.
3. Respond to blood donation requests by others.
4. See nearby blood banks and get their details.

#### For organizations
1. Register to the website and create event.
2. Maintain a list of all intersted donors and channel to communicate with them.
3. Contact with the State Blood Transfusion Council(SBTC) and other banks.

#### For blood banks
1. Register to the website and post blood requirements.
2. Contact with other blood banks.

# Installation

## Pre-requisites

Your machine should have NPM , Node , MongoDB and Bower installed. 
A full guide for installing each of these is given below. 
Before you install any packages, ensure your package list is up to date with:

    sudo apt-get update

#### Install npm

    sudo apt-get install -y npm

#### Install node

    sudo npm cache clean -f
    sudo npm install -g n
    sudo n stable

#### Install Bower

    sudo npm install -g Bower

#### Install MongoDB

    sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 2930ADAE8CAF5059EE73BB4B58712A2291FA4AD5
    echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.6 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.6.list
    sudo apt-get install -y mongodb-org


## Local setup

#### Clone the repo

    git clone https://github.com/rkpattnaik780/crimson.git

#### Install dependencies
To download the node modules:-

    npm install 
To download the bower components:-
    
    bower install

#### Running the server

    sudo service mongod start #to start the MongoDB
    npm start #start the server

Visit http://localhost:3000 in your browser

# Technologies Used :
* HTML5
* CSS3
* Bootstrap3
* Ajax
* AngularJS
* NodeJS
* Express
* MongoDB

# Authors :
* [NVS Abhishek](https://github.com/nvs16)
* [Deepak Senapati](https://github.com/deepak345)
* [Ramakrishna Pattnaik](https://github.com/rkpattnaik780)
