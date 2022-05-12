FROM node:16.3.0-alpine as base

#Set workdir in the container
WORKDIR /usr/src/app

#Create directory structure
RUN mkdir website/

# Copying this separately prevents re-running npm install on every code change.
COPY website/package*.json ./website/

# Install production dependencies.
RUN cd website/ && npm install

# Copy local code to the container image.
COPY ./website ./website/

#Second docker stage for caching purposes
FROM base as production

#Specify dir
ENV NODE_PATH=./build

#run website builder
RUN cd website/ && npm run build

WORKDIR /usr/src/app/website

# Run the web service on container startup.
CMD [ "npm", "start" ]
