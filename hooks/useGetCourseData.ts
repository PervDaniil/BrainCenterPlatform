import { useState, useEffect } from "react";


async function fetchCourseData(topic: string) {
    const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    const prompt = `Explain me a topic ${topic} with examples`;

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


export function useGetCourseData(topic: string) {
    const [data, setData] = useState<any | string[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCourse = async () => {
            try {
                setLoading(true);
                setError(null);
                
                const data = await fetchCourseData(topic);
                console.log(data);
                setData(data);

            } catch (err) {
                setError("Error fetching course!");
            } finally {
                setLoading(false);
            }
        };

        fetchCourse();
    }, [topic]);

    return { data, loading, error };
}