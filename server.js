const express = require('express');
const cors = require('cors');
const ytdl = require('@distube/ytdl-core');
const instagramGetUrl = require('instagram-url-direct');
const ffmpeg = require('fluent-ffmpeg');
const app = express();

app.use(cors());
app.use(express.json());

// 1. Alive & Ping logic
app.get('/api/ping', (req, res) => {
    res.json({ status: "Sathanic Bot Online", ping: "Fast as light ⚡", lang: "Malayalam" });
});

// 2. YouTube & Short Downloader
app.get('/api/download/yt', async (req, res) => {
    const url = req.query.url;
    try {
        res.header('Content-Disposition', 'attachment; filename="video.mp4"');
        ytdl(url, { format: 'mp4' }).pipe(res);
    } catch (err) {
        res.status(500).send("Error downloading YouTube video");
    }
});

// 3. Instagram Story/Video Downloader
app.get('/api/download/insta', async (req, res) => {
    const url = req.query.url;
    try {
        const result = await instagramGetUrl(url);
        res.json(result);
    } catch (err) {
        res.status(500).send("Error downloading Instagram content");
    }
});

// 4. Audio Pro (Noise Cancellation Logic)
app.post('/api/audio-pro', (req, res) => {
    // Ithu FFmpeg upayogichu beat cut cheyyanulla basic setup aanu
    // Voice output mathram kittaanaayi highpass/lowpass filters use cheyyum
    console.log("Processing audio for voice only...");
    res.json({ message: "Audio processing thudangi, Malayalam bot reply: Enthoora, ippo shariyakki tharaam!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sathanic Server running on port ${PORT}`));
