const OpenAI = require("openai");
const openai = new OpenAI();

module.exports = {
    index: function(req, res) {res.send('<h1>The home</h1>:index controller');},

    ask: async (req, res) => {
      console.log('here')
      if (!req.body || req.body.prompt === null) {
        return res.status(400).json({
          success: false,
          message: "No data provided in request body",
        });
      }
  
      const prompt = req.body.prompt;
  
      try {
        // const ai_res = await getCompletion(userMessage);
        console.log(prompt)
        const msg = [{ role: "system", content: "You are a helpful assistant." }];
        if (prompt) {
          msg.push({ role: "user", content: prompt });
        } else {
          msg.push({ role: "user", content: "just say hi." });
        }
        const response = await openai.chat.completions.create({
          messages: msg,
          model: "gpt-3.5-turbo",
        });
        const completion=response.choices[0];
      
 
        // Actual processing and response generation
        return res.status(200).json({
          success: true,
          message: prompt,
          ai_res: completion,
        });
      } catch (error) {
        console.log(error.message);
      }
    },
  };
  