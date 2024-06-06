# Use the official Node.js image as a base
FROM node:21

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json/yarn.lock first to leverage Docker cache
COPY package*.json ./
# If you are using Yarn, uncomment the following line:
# COPY yarn.lock ./

# Install dependencies
RUN npm install
# If you are using Yarn, uncomment the following line:
# RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build
# If you are using Yarn, uncomment the following line:
# RUN yarn build

# Specify the command to run the app
CMD ["npm", "start"]
# If you are using Yarn, uncomment the following line:
# CMD ["yarn", "start"]
