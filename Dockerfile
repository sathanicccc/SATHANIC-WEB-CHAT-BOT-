# Step 1: Use official Node.js image
FROM node:22-slim

# Step 2: Install FFmpeg for Audio processing (Noise/Beat cancellation)
# Nammal API vazhi download cheyyunnathukondu Python eni venda.
RUN apt-get update && apt-get install -y \
    ffmpeg \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Step 3: Set working directory
WORKDIR /usr/src/app

# Step 4: Copy package files and install dependencies
COPY package.json ./
RUN npm install --omit=dev

# Step 5: Copy the rest of your bot files
COPY . .

# Step 6: Set Port (Koyeb uses 8080 by default)
EXPOSE 8080

# Step 7: Run the server
CMD [ "node", "server.js" ]
