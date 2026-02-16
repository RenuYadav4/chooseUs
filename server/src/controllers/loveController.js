import LoveResponse from "../models/LoveResponse.js";

import { generateLoveContent } from "../services/geminiService.js";

export const validatePassword = (req, res) => {
    const { specialDate } = req.body;
    const entered = String(specialDate).trim();
    const actual = String(process.env.SPECIAL_PASSWORD).trim();

    console.log("ENTERED:", entered);
    console.log("ACTUAL :", actual);

    if (entered === actual) {
        return res.status(200).json({ success: true, message: "Aww, I love you 😘" });
    }

    return res.status(200).json({
        success: false,
        message: "you forgot our special date ? 💔 😭",
    });
}

export const generateLetter = async (req, res) => {
    try {
        const { answers } = req.body;

        if (!Array.isArray(answers) || answers.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Answers must be a non-empty array"
            });
        }

        const aiResponse = await generateLoveContent(answers);

        const saved = await LoveResponse.create({
            answers,
            generatedLetter: aiResponse
        });

        res.status(200).json(aiResponse);
    } catch (error) {
        console.error("Controller Error:", error);

        res.status(error.status || 500).json({
            success: false,
            message: error.message || "Something went wrong"
        });
    }
}