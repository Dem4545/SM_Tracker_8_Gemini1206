const express = require('express');
    const app = express();
    const port = 3000;

    app.use(express.json());

    // Basic route for testing
    app.get('/api/hello', (req, res) => {
      res.json({ message: 'Hello from the server!' });
    });

    // Add route handler for /
    app.get('/', (req, res) => {
      res.send('Security Management App is running!');
    });

    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
