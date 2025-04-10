// api/weather.js
export default async function handler(req, res) {
    const { location } = req.query;
    
    // Use environment variable (set this in Vercel dashboard)
    const api_key = process.env.WEATHERSTACK_API_KEY || "12569cfe411f3f308560966e7d71f0d2";
    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${location}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
