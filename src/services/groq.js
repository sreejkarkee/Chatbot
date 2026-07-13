const API_KEY = import.meta.env.VITE_GROQ_API_KEY;

const URL = "https://api.groq.com/openai/v1/chat/completions";

export async function getAIResponse(prompt) {
  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error(errorData);
      throw new Error(errorData.error?.message || "Request failed");
    }

    const data = await response.json();

    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}