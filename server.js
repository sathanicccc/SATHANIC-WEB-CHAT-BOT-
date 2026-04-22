const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({ status: "Sathanic Bot Online 🔥", ping: "Running stable" });
});

// MP3 & MP4 Downloader using yt-dlp logic
app.get('/api/download/yt', (req, res) => {
    const videoURL = req.query.url;
    if (!videoURL) return res.status(400).send("URL venam!");

    // MP3 aanu kooduthal request varunnath ennu karuthi athu set cheyyunnu
    res.header('Content-Disposition', 'attachment; filename="sathanic_audio.mp3"');
    
    // yt-dlp vazhi bot detection bypass cheythu direct audio stream cheyyunnu
    const command = `yt-dlp -f bestaudio -o - "${videoURL}"`;
    
    const child = exec(command);
    child.stdout.pipe(res);
    
    child.on('error', (err) => {
        console.error(err);
        res.status(500).send("Download error!");
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

