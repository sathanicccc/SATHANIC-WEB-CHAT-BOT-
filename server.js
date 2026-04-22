const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({ status: "Sathanic Bot Online 🔥", server: "Kali Linux" });
});

app.get('/api/download/yt', async (req, res) => {
    const videoURL = req.query.url;
    if (!videoURL) return res.status(400).send("URL venam!");

    try {
        // Cobalt API - Ithu ippo block bypass cheyyaan ettavum nallathaanu
        const response = await axios.post('https://api.cobalt.tools/api/json', {
            url: videoURL,
            isAudioOnly: true, // MP3 mathram mathiyenkil
            aFormat: "mp3"
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        const downloadLink = response.data.url;

        if (downloadLink) {
            res.redirect(downloadLink);
        } else {
            res.status(500).send("API error:Punda Mone Download link generate cheyyaan pattiyilla!");
        }
    } catch (err) {
        console.error("Sathanic Error:", err.message);
        res.status(500).send("YouTube block detection kooduthal strict aayi. Kurachu kazhinju try cheyyu!");
    }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
});

