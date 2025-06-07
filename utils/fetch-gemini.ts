export const fetchGeminiResponse = async (question: string, responseLanguage: string) => {
    const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    
    try {
        const prompt = `Answer the following question as an English teacher.
                        Respond in ${responseLanguage} with clear explanation for the question followed below.
                        Response must be in JSON format: { answer: "..." }
                        Question: "${question}"`;

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
        const responseData = JSON.parse(cleanText);

        return responseData?.answer || "Sorry, no answer received.";
    } catch (error) {
        console.error("Error fetching response:", error);
    };
}