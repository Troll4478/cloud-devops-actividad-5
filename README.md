
# When building a Dockerfile
This week we are going to build a Dockerfile for a React application. The application is a simple React application that uses Vite.js as the build tool. The application is already set up and you only need to build a Dockerfile to run the application in a Docker container.

Once you finished building the Dockerfile, check that the application is running correctly in the Docker container. Then submit the Dockerfile and also take and screenshot of the application running and showing your name on the screen.

You can submit both files in the following link: [Actividad 5 - Google Forms](https://club.pudin.net/formulario-5)

## Requirements
- The Dockerfile should be able to run the application in a Docker container.
- You should change the name const on /src/App.js to your name.

## Tips to code your Dockerfile

- Use the `node:20` image as the base image.
- Set the working directory to `/app`.
- Install the dependencies.
- Expose port 3000.
- Set the default command to run the development server.

These are only tips to build a Dockerfile but you need to create your own Dockerfile.

1. **Build the Docker image**:
```bash
docker build -t appName .  # <--  Don't forget the dot at the end of the command
```

2. **Run the Docker container**:
```bash
docker run -p 3000:3000 appName
```

# Localhost setup instructions
- If you want to run the application locally, follow the instructions below.
- You can use also these instructions as a point of reference to build your Dockerfile.

1. **Install Vite and React dependencies**:
```bash
npm install
```

1. **Start the development server**:
```bash
npm start
```

That's it! Your React project is now set up with Vite.js. You can start developing your React application with a fast development experience provided by Vite.

This vite-react template includes the following features:
- Runs on port 3000

## Other examples of Dockerfile as reference

### Ruby on Rails
```Dockerfile
FROM ruby:3.0

WORKDIR /app

COPY . .

RUN bundle install

EXPOSE 3000

CMD ["rails", "server", "-b", "3000"]
```
