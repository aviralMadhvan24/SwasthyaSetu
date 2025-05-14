import React, { useState } from 'react';

const adviceMap = {
  fever: "You might have a fever. Rest at home, stay hydrated, and monitor your temperature regularly.",
  cough: "A persistent cough can signal a respiratory infection. Try a warm honey-lemon drink and consider a humidifier.",
  headache: "Headaches often respond to rest in a quiet, dark room and over-the-counter pain relief (if appropriate).",
  "sore throat": "Gargle with warm salt water, stay hydrated, and suck on lozenges to ease throat discomfort.",
  fatigue: "Feeling unusually tired—prioritize sleep, cut back on caffeine, and consider a light walk to boost energy.",
  "shortness of breath": "If mild, sit upright and breathe slowly; if severe or sudden, seek medical attention immediately.",
  nausea: "Nausea can ease with small sips of ginger tea, plain crackers, or rest until it subsides.",
  vomiting: "Sip clear fluids slowly, avoid solid foods for a few hours, then reintroduce bland foods like toast.",
  diarrhea: "Stay hydrated with electrolyte drinks, and eat binding foods like bananas, rice, applesauce, and toast (BRAT diet).",
  dizziness: "If you feel dizzy, lie down with feet elevated. Stand up slowly and stay hydrated.",
  "chest pain": "Mild tightness may improve with rest; if it’s crushing, radiating, or accompanied by sweating, call emergency services.",
  "back pain": "Apply a heat pack, practice gentle stretches, and avoid heavy lifting until pain eases.",
  "abdominal pain": "Try a warm compress on your belly, rest, and sip clear fluids; if severe or persistent, see a doctor.",
  "nasal congestion": "Use saline nasal spray or steam inhalation to loosen mucus and ease breathing.",
  "runny nose": "Stay hydrated, use a tissue, and consider an antihistamine if it’s allergy-related.",
  "muscle ache": "Rest the affected muscles, apply heat or a warm bath, and try gentle stretching.",
  "joint pain": "Elevate and rest the joint, apply ice packs if swelling, and consider gentle range-of-motion exercises.",
  rash: "Keep the area clean and dry; a cool compress and over-the-counter anti-itch cream can help.",
  "loss of taste": "Often comes with upper respiratory infections; stay safe and get tested if you suspect COVID-19.",
  "loss of smell": "Similar advice—monitor symptoms, rest, and consider ENT evaluation if it doesn’t return in 2–3 weeks."
};

export default function SymptomChecker() {
  const [input, setInput] = useState('');
  const [responses, setResponses] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.toLowerCase();
    const matched = [];

    // Check each symptom key against the input
    for (const [symptom, advice] of Object.entries(adviceMap)) {
      if (text.includes(symptom)) {
        matched.push({ symptom, advice });
      }
    }

    if (matched.length > 0) {
      setResponses(matched);
    } else {
      setResponses([{ symptom: null, advice: "Couldn't match your symptom—please consult a healthcare professional." }]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-700 p-6 rounded-lg">
      <label className="block text-md font-medium mb-2 text-gray-200">Describe your symptom(s):</label>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-600 text-white"
        placeholder="e.g., I have a fever, headache, and sore throat"
        rows={3}
        required
      />
      <button
        type="submit"
        className="w-full py-2 mb-4 rounded bg-blue-600 hover:bg-blue-500 text-white font-semibold"
      >
        Check Symptoms
      </button>

      {responses.map((resp, idx) => (
        <div
          key={idx}
          className="mb-3 p-3 bg-gray-800 rounded border border-gray-600"
        >
          {resp.symptom
            ? <p><strong>{resp.symptom.toUpperCase()}:</strong> {resp.advice}</p>
            : <p>{resp.advice}</p>
          }
        </div>
      ))}
    </form>
  );
}
