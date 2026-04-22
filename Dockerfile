FROM node:22-slim

# Step 1: Install Python, FFmpeg, and essential tools
RUN apt-get update && apt-get install -y \
    python3 \
    python3-pip \
    python3-full \
    ffmpeg \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Step 2: Install yt-dlp via binary (This is the most stable way for bots)
RUN curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp \
    && chmod a+rx /usr/local/bin/yt-dlp

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
