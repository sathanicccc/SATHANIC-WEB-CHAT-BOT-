const express = require('express');
const cors = require('cors');
const axios = require('axios');
const ffmpeg = require('fluent-ffmpeg');
const app = express();

app.use(cors());
app.use(express.json());

// 1. Bot Status (Ping)
app.get('/api/ping', (req, res) => {
    res.json({ 
        status: "Sathanic Bot Online 🔥", 
        ping: "Running stable",
        server: "Koyeb Cloud" 
    });
});

// 2. Downloader (Bot Detection Bypass Logic)
app.get('/api/download/yt', async (req, res) => {
    const videoURL = req.query.url;
    if (!videoURL) return res.status(400).send("URL venam!");

    try {
        // YouTube block bypass cheyyaan external high-speed API upayogikkunnu
        const apiRes = await axios.get(`https://api.vyt.download/fetch?url=${encodeURIComponent(videoURL)}`);
        const finalLink = apiRes.data.url;

        if (finalLink) {
            // Direct download link-ilekku redirect cheyyunnu
            res.redirect(finalLink);
        } else {
            res.status(500).send("Download link generate cheyyaan pattiyilla. Link check cheyyu!");
        }
    } catch (err) {
        console.error("Sathanic Error:", err.message);
        res.status(500).send("YouTube block detection active aanu. Pinne try cheyyu!");
    }
});

// 3. Audio Pro (Voice Only / Beat Removal) - Basic Setup
app.post('/api/audio/process', (req, res) => {
    // Ippo thalkkaalam feature load cheyyanulla response
    res.json({ message: "Audio processing module is initializing..." });
});

// Port setting for Koyeb
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sathanic Server is LIVE on port ${PORT}`);
});
