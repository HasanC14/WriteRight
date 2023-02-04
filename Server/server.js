const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());

const configuration = new Configuration({
  organization: "org-CeQsOcAwJYIpB68fB5cSpn7j",
  // apiKey: process.env.OPENAI_API_KEY,
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/response", async (req, res) => {
  const input = req.body.inputValue;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `can you Rewrite the following text:  ${input}`,
    max_tokens: 3000,
    temperature: 0,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });
  res.send({
    data: response.data.choices[0].text,
  });
});
app.get("/", (req, res) => {
  res.send("API running");
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
