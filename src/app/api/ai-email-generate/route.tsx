import { GenerateEmailTemplateAIModel } from "@/config/AiModel";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // Generate AI response
    const result = await GenerateEmailTemplateAIModel.sendMessage(prompt);
    const aiResp = result.response?.text();

    console.log("AI Response:", aiResp);

    // Save to database logic here (pseudo code)
    // await saveToDatabase({ userEmail, tId, prompt, aiResp });

    return NextResponse.json(JSON.parse(aiResp));
  } catch (e) {
    console.error("Error generating email template:", e);
    return NextResponse.json({
      success: false,
      error: "Failed to generate email template. Please try again later.",
    });
  }
}
