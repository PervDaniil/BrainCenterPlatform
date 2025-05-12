export async function fetchQuizQuestions(level: string) {
  const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  const prompt = `Make one English Grammar quiz test that consists of 1 question for ${level} English level.
  Response must be in JSON format like:
  [
    {
      "question": "I ___ a programmer",
      "answers": ["am", "is", "are", "were"],
      "correct": 0
    }
  ]`;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    }
  );

  const data = await response.json();
  const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!text) throw new Error("Empty response from Gemini.");

  const cleanText = text.replace(/```json|```/g, "").trim();
  return JSON.parse(cleanText);
}
