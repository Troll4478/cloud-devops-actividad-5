# Pull the official image of Node.js (version 20)
FROM node:20

# Create app directory
WORKDIR /app

# Copy app source code
COPY . /app

# Install app dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0"]
