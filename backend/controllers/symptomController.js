// backend/controllers/symptomController.js
import axios from 'axios';

export const checkSymptoms = async (req, res) => {
  console.log('Received body:', req.body);
  const { symptoms } = req.body;

  if (!symptoms) {
    return res.status(400).json({ error: 'Symptoms are required.' });
  }

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful medical assistant.' },
          { role: 'user', content: `Patient symptoms: ${symptoms}. What could this be?` }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    const advice = response.data.choices[0].message.content;
    return res.json({ advice });
  } catch (error) {
    console.error('OpenAI error:', error.response?.data || error.message);
    return res.status(500).json({ error: 'Error checking symptoms.' });
  }
};
