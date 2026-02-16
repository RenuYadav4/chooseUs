import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateLoveContent = async (answers) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const prompt = `You are writing something extremely personal and emotional.
This is NOT generic love content.
This must feel handwritten and human.
You are an API.
You MUST return ONLY valid JSON.
NO explanations.
NO markdown.
NO extra text.

RULES:
- Never use any past incident in the content you generate (don't use such statements like remember we had late night talks etc.)
- All the content you generate should completely related to the questions and answers . not anything by you
- Use the question text to infer emotion, memory, and intent
- Do NOT assume living together
- Do NOT invent events not implied by answers
- Keep tone human, imperfect, and intimate
- Nickname: Nickname must feel intimate and personal (like "baby", "peppa", "babu", "My puggu", "Mr. Hyper", etc.) Avoid generic AI names like "bae", "sunshine", "captain"
- Love Letter: Love letter must feel real, loving emotional and personal and human written it is a love letter not the alphabet letter, we were just in college we never stayed under the same roof, so don't mention something like that.
- Teasing: Teasing must feel playful and specific based on the answers he selects amongs two.
- FutureDream: He always likes me to getting ready for him looking pretty all the time , we both are in IT field have done computer Science Engineering. He loves me chubby , so keep all of that in mind while generating future dream e.g. {when you will come from office you will find me looking hot and pretty only for you }, and futureDream should not more than of 2 lines.
- Compatibily: Compatibility must be ONLY a number between 85 and 100 (no % symbol)

JSON FORMAT:
{
  "nickname": "",
  "loveLetter": "",
  "teasing": "",
  "futureDream": "",
  "compatibility": ""
}

Each item contains a question and the user's selected answer.
Use the questions to understand emotional intent.
All the content you generate should completely related to the questions and answers . not anything by you

UserResponses:
${JSON.stringify(answers)}

`;

    const result = await model.generateContent(prompt);
    const rawText = result.response.text().trim();

    // SAFETY: Extract JSON only
    const jsonStart = rawText.indexOf("{");
    const jsonEnd = rawText.lastIndexOf("}");

    if (jsonStart === -1 || jsonEnd === -1) {
      throw new Error("Invalid JSON returned by Gemini");
    }

    const cleanJSON = rawText.substring(jsonStart, jsonEnd + 1);

    const parsed = JSON.parse(cleanJSON);
    parsed.compatibility = Number(parsed.compatibility);
    return parsed;


  } catch (error) {
    console.error("Gemini Parse Error:", error.message);

    //  FALLBACK (APP NEVER BREAKS)
    return {
      nickname: "My love",
      loveLetter: "Even when words fall short, my heart stays sure about you.",
      teasing: "I guess you tried to outsmart destiny this time 😉",
      futureDream: "One day after office, I’ll be dressed up just for you, waiting.",
      compatibility: 99
    };

  }
};
