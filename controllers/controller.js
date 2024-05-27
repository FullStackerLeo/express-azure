module.exports = {
    index: function(req, res) {
      res.send('<h1>The home</h1>:index controller');
    },


    ask: async (req, res) => {
      if (!req.body) {
        return res.status(400).json({
          success: false,
          message: "No data provided in request body",
        });
      }
  
      const prompt = req.body.prompt;
  
      try {
        if (prompt == null) {throw new Error("Uh oh, no prompt was provided");}
  
        // Implement your logic to process the prompt (e.g., call an external API)
  
        // Replace with your actual processing and response generation
        return res.status(200).json({
          success: true,
          message: prompt,
        });
      } catch (error) {
        console.log(error.message);
      }
    },
  };
  