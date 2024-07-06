Description:
This code sets up a simple Express server that reads user data from a JSON file and exposes an API endpoint to fetch all users.

Steps:

1.Initializing Dependencies

It imports the express framework and the fs (file system) module. Creates an instance of the express application.

2.Middleware

Sets up middleware to parse incoming requests with JSON payloads.

3.Reading Data

Defines a function readData that reads and parse data from the 'data.json' file synchronously.

4.Defining Endpoints:

Sets up a GET endpoint at '/data' to respond with all users by reading data from the 'data.json' file and sending it as a JSON response.

5.Listening on Port

Finally, it starts the server to listen on port 3000 and logs a message to the console once the server is up and running.
