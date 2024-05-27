const OpenAI = require("openai");

const openai = new OpenAI();

async function getCompletion(query) {
  const messages = [{ role: "system", content: "You are a helpful assistant." }];
  if (query) {
    messages.push({ role: "user", content: query });
  } else {
    messages.push({ role: "user", content: "No specific query provided." });
  }
  const completion = await openai.chat.completions.create({
    messages,
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0];
}

module.exports = { getCompletion };
