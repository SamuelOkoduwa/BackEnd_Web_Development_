## Steps involved in setting up a Node.js server from scratch.

1. **Install Node.js** 
Download and install Node.js from the official [website](https://nodejs.org/) and following the instructions based on the operating system.

2. **Initalizing a New Project**
Use the command line interface(CLI) or terminal to initialzing a new project 
	-	by navigating to the directory where the project is intended to be created.
	-	run the following command to initialize a new Node project 

	```javascript
	npm init -y //creating package.json file default setting
	```
	**or**
	```npm init //followed by the guidelines```

3. **Install Necessary Packages or dependencies such as**
	-	**express** which simplifies the process of building web applications and APIs with tobust fetures for handling routes, middleware, and HTTP requests/responses, making it easier to create scalable and maintainable servers.
	-	**nodemon** a utility that monitors changes in your Node.js application files and automatically restarts the server when changes are detected. This aids in the development process by eliminating the need to manually restart the server after every code change, resulting in a more efficient development workflow.
	
4. **Creating a server**
    -	On the directory of the project, after installing necessary dependencies, create a javascript file e.g 'server.js'
	- 	import your express module using require keyword, save to a variable and create and application looking at the example with more details from this [file](./server.js).
