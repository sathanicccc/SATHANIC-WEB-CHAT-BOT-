const express = require('express');
const cors = require('cors');
const { spawn } = require('child_process'); // spawn aanu exec-nekkal stable
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({ status: "Sathanic Bot Online 🔥", ping: "Running stable" });
});

// MP3 Downloader Updated Logic
app.get('/api/download/yt', (req, res) => {
    const videoURL = req.query.url;
    if (!videoURL) return res.status(400).send("URL venam!");

    // Response Headers - Browser-inu file MP3 aano ennu manasilakan
    res.setHeader('Content-Type', 'audio/mpeg');
    res.setHeader('Content-Disposition', 'attachment; filename="sathanic_audio.mp3"');

    // yt-dlp logic with spawn for better streaming
    const ytDlp = spawn('yt-dlp', [
        '-f', 'bestaudio',
        '--extract-audio',
        '--audio-format', 'mp3',
        '--audio-quality', '0', // Highest quality
        '-o', '-', // Output to stdout
        videoURL
    ]);

    // Data stream cheyyunnu
    ytDlp.stdout.pipe(res);

    // Error handling for debugging
    ytDlp.stderr.on('data', (data) => {
        console.error(`Sathanic Bot Debug: ${data}`);
    });

    ytDlp.on('close', (code) => {
        if (code !== 0) {
            console.error(`yt-dlp exited with code ${code}`);
        }
    });
});

// Port setting for Koyeb
const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Sathanic Server running on port ${PORT}`);
});
