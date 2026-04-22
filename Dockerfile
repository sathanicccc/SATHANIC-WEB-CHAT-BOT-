# Step 1: Use official Node.js image
FROM node:22-slim

# Step 2: Install FFmpeg for Audio processing (Noise/Beat cancellation)
RUN apt-get update && apt-get install -y ffmpeg && rm -rf /var/lib/apt/lists/*

# Step 3: Set working directory
WORKDIR /usr/src/app

# Step 4: Copy package files first (to speed up build)
COPY package.json ./

# Step 5: Clean install dependencies (no lockfile needed)
RUN npm install --omit=dev

# Step 6: Copy all project files
COPY . .

# Step 7: Expose port 8080 for Koyeb
EXPOSE 8080

# Step 8: Start the server
CMD [ "node", "server.js" ]
