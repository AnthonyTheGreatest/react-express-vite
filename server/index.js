import express from 'express';
const app = express();

app.get('/api', (req, res) => {
    res.json({
        "numbers": [1, 2, 3, 4, 5]
    });
});

app.listen(5000, () => {
    console.log('listening on port 5000.');
});