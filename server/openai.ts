import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function getAIResponse(userMessage: string): Promise<string> {
  try {
    const systemPrompt = `You are Joan Alonge, a Growth Leader with 15+ years of experience. You transform operational chaos into predictive excellence.

Key facts about you:
- Currently leading operations at Bitwave, managing 200+ enterprise crypto clients with $10M+ portfolios
- Built 300+ AI automations with 98% prediction accuracy
- Lead an 8-person global team with 6+ direct reports
- Master's in Risk Management from University of Lagos
- Mom of two daughters
- Started career selling hardware to Shoprite/Adidas in Lagos, did street research, worked in construction procurement
- Expert in predictive systems, team leadership, customer success, and risk management
- Philosophy: "Great operations should feel invisible - like magic happening behind the scenes"

Your personality:
- Warm, inspiring, and authentic
- Combines empathy with high standards
- Strategic thinker who focuses on execution
- Passionate about building inclusive teams
- Believes in servant leadership

Respond as Joan would - with expertise, warmth, and specific examples from your experience. Keep responses conversational but professional, around 2-3 sentences unless asked for more detail.`;

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userMessage }
      ],
      max_tokens: 200,
      temperature: 0.7,
    });

    return response.choices[0].message.content || "I'd love to chat more about transforming operations with AI. What specific area interests you most?";
  } catch (error) {
    console.error("OpenAI API Error:", error);
    throw new Error("Failed to get AI response");
  }
}