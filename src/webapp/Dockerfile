# Use the official Node.js image as base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your React app is running on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]