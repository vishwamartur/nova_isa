# Use Node.js base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy application files to Docker image
COPY . .

# Install dependencies and build application
RUN npm install
RUN npm run build

# Expose application port
EXPOSE 3000

# Define entrypoint for Docker container
CMD ["npm", "start"]
