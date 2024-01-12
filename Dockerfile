### Uncomment the following lines when you create a new GitHub codespace
### on this repository for the first time, do the same in .devcontainer.json
### after that, go to the green menu in the lower left corner of the codespace
### screen and select "Rebuild Container" in order to apply all these settings
### Do not commit this file to the repository unless every line is commented out!

# # Use a specific version of Node.js as the base image
# FROM node:14

# # Set the working directory in the container
# WORKDIR /app

# # Copy package.json and package-lock.json first to leverage Docker cache
# COPY package*.json ./

# # Install project dependencies
# RUN npm install

# # Copy the rest of the project files into the container
# COPY . .

# # Expose the port that Next.js runs on
# EXPOSE 3000

# # Command to run the application
# CMD ["npm", "run", "dev"]