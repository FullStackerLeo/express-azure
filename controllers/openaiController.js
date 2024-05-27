const { getCompletion } = require('../services/openaiService');

async function handleChatGPT(req, res) {
  try {
    const userMessage = req.query.message; // Extract the query parameter
    if (!userMessage) {
      return res.status(400).json({ error: "Missing query parameter 'message'" });
    }
    const completion = await getCompletion(userMessage);
    res.json({
      message: completion.message.content,
      role: completion.message.role,
      finishReason: completion.finish_reason
    });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { handleChatGPT };
