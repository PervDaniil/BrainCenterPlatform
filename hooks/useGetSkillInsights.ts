import { useUser } from './useUser';
import { useState, useEffect } from 'react';
import { useDashboardUserData } from './useDashboardUserData';

interface Suggestion {
    suggestion: string;
}

export function useGetSkillInsights(aspect: string) {
    const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    const user = useUser();
    const { data: userData, loading: userLoading, error: userError } = useDashboardUserData({ uid: user?.uid });

    const [suggestions, setSuggestions] = useState<Suggestion[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!aspect || !userData) {
            setSuggestions(null);
            return;
        }

        async function fetchSuggestions() {
            setLoading(true);
            setError(null);

            try {
                const prompt = `Make suggestions based on this data: ${JSON.stringify(userData)} for this English aspect: ${aspect}.
                        Response must be like [{ suggestion: "..." }]. Quantity of suggestions must be 4.
                        Suggestion must include less than 8 words`;

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

                if (!response.ok) {
                    throw new Error(`API error: ${response.statusText}`);
                }

                const data = await response.json();
                const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;

                if (!text) {
                    throw new Error("No suggestions received from API");
                }

                const cleanText = text.replace(/```json|```/g, "").trim();
                const parsedSuggestions = JSON.parse(cleanText) as Suggestion[];
                
                setSuggestions(parsedSuggestions);
            } catch (err: any) {
                setError(err);
                setSuggestions(null);
            } finally {
                setLoading(false);
            }
        }

        fetchSuggestions();
    }, [aspect, userData]);

    return {
        suggestions,
        loading: loading || userLoading,
        error: error || userError,
    };
}
