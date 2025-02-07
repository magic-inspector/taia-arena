# Use a lightweight Node.js image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the remaining files
COPY . .

# Expose the port Next.js runs on
EXPOSE 3000

# Build the application for production
RUN npm run build

# Start the Next.js application in production mode
CMD ["npm", "start"]