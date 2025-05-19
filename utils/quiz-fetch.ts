export async function fetchQuizQuestions(level: string, area = "common") {
  const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  
  const prompt = `Make one English Grammar quiz test for ${area} area that consists of 1 question for ${level} English level.
  You can select one of these topics (but don't select difficult topics for low English levels): [
    "Present Simple",
    "Present Continuous",
    "Present Perfect",
    "Present Perfect Continuous",
    "Past Simple",
    "Past Continuous",
    "Past Perfect",
    "Past Perfect Continuous",
    "Future Simple",
    "Future Continuous",
    "Future Perfect",
    "Future Perfect Continuous"
    "Subject-Verb Agreement",
    "Articles",
    "Plural Nouns",
    "Countable and Uncountable Nouns",
    "Pronouns",
    "Modifiers",
    "Prepositions",
    "Conjunctions",
    "Direct and Indirect Speech",
    "Active and Passive Voice",
    "Questions",
    "Conditionals",
    "Punctuation",
    "Comparatives and Superlatives",
    "Gerunds and Infinitives",
    "Adjective and Adverb Comparison",
    "Relative Clauses",
    "Determiners",
    "Conjunctions and Connectors",
    "Verb Forms",
    "Common Errors"
  ];
  Response must be in JSON format like:
  [
    {
      "topic" : "...",
      "question": "...",
      "answers": ["...", "...", "...", "..."],
      "correct": 0,
      "explanation" : "...",
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
