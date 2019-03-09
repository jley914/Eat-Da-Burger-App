# Eat Da Sequel Burger!
A Burger eats' Application With Node.js/Express/MySQL/Sequelize/Handlebars/

## Description

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS and elements from the framework and the backend implemented with Node.js and Express. HTML templating is done with Handlebars. The data is stored in MySQL and is manipulated with the [sequelize](https://www.npmjs.com/package/sequelize) package. 

The user may enter any burger name to add it to the presented menu. This also adds the new burger entry into the MySQL database. The initial burger entry is added on the menu and placed on the left side of the screen. The user then can eat any burger by entering their name and clicking on the button. The burger that is eaten is moved into the column on the right and is displayed.

## Installation

To run the application locally, first clone this repository with the following command.

	git clone 
	
Next, install the application 

	cd Eat-Da-burger-sequel
	npm install
	
Finally, run the node server locally.

	node server
	
Now, open the local application on port 8080 at the URL: `http://localhost:3000/`
