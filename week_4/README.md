#	Week 4 Assessment

1.	Create a [basic Node.js server using Express framework](./package.json), incorporating environment variables with dotenv, and automating server restarts with nodemon. Implement three simple endpoints to serve different data types.

	&nbsp; **Initialize a new Node.js project.**
	&nbsp;	-	Install necessary packages:
	&nbsp; -	Express (npm install express)
	&nbsp; -	dotenv (npm install dotenv)
	&nbsp; -	nodemon (npm install -D nodemon)
	&nbsp; -	Create a .env file to store environment variables.

2. **[Creating Scripts:](./package.json)**
	-	Implement two scripts in package.json:
	-	start: To start the server in production mode.
	-	dev: To start the server in development mode using nodemon.

3. **[Endpoints:](./app.js)**
	&nbsp;	Define three endpoints in your Express application:
	- **[Endpoint 1:](./app.js)**
		- **Path:** /string or anything you want to use.
		- **HTTP Method:** GET
		- **Response:** Send back a simple string as the response.

	-	**[Endpoint 2:](./app.js)**
		-	Path: /object or anything you want to use.
		-	HTTP Method: GET
		-	Response: Send back an object (e.g., {message: "Hello, world!"}).
	-	**[Endpoint 3:](./app.js)**
		-	Path: /array or anything you want to use.
		-	HTTP Method: GET
		-	Response: Send back an array (e.g., ["apple", "banana", "orange"]).
	
4. **Testing:**
Test your server by making GET requests to each endpoint using your web browser.

***
