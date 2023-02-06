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
  apiKey: process.env.OPENAI_API_KEY,
  //apiKey: "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",
});
const openai = new OpenAIApi(configuration);

app.post("/rewrite", async (req, res) => {
  const input = req.body.inputValue;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Please rephrase the following text in your own words, ensuring that the meaning and tone are preserved.:  ${input}`,
    max_tokens: 3000,
    temperature: 0.5,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0.3,
  });
  res.send({
    data: response.data.choices[0].text,
  });
});
app.post("/formal", async (req, res) => {
  const input = req.body.inputValue;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Please convert the following text to a formal tone:  ${input}`,
    max_tokens: 3000,
    temperature: 0.5,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0.3,
  });
  res.send({
    data: response.data.choices[0].text,
  });
});
app.post("/grammar", async (req, res) => {
  const input = req.body.inputValue;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Please check the grammar and syntax of the following text and provide the mistakes with a detailed explanation in a list: ${input}`,
    max_tokens: 3000,
    temperature: 0,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  res.send({
    data: response.data.choices[0].text,
  });
});
app.post("/spell", async (req, res) => {
  const input = req.body.inputValue;
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Please check the spelling errors in this text and provide the correct spellings in a list, Example: 1.❌Fotball ☑️Football: ${input}`,
    max_tokens: 3000,
    temperature: 0,
    top_p: 1,
    frequency_penalty: 0,
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
