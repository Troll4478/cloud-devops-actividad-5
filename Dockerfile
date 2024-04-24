#Pull the official image of node version 20
FROM node:20

#Create app directory
WORKDIR /app

#Copy app source 
COPY . /app

#Install app dependencies
RUN npm install

#Expose port and start application
EXPOSE 3000

#Start the application
CMD ["npm", "run", "start", "--", "--host", "0 0 0 0"]