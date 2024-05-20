// const { Configuration, OpenAIApi } = require("openai");
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

app.post("/rewrite", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Please rephrase the following text in your own words, ensuring that the meaning and tone are preserved:  ${input}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  res.send(text);
});
app.post("/formal", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Please convert the following text to a formal tone:  ${input}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  res.send(text);
});
app.post("/grammar", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Please check the grammar of the following text and provide a detailed explanation: ${input}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  res.send(text);
});
app.post("/summarize", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Please summarize the following paragraph into a few concise sentences while preserving the main idea and key points: ${input}`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  res.send(text);
});

app.get("/", (req, res) => {
  res.send("API running");
});
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

// const run = async () => {
//   const prompt = "Write a story about a magic backpack.";

//   const result = await model.generateContent(prompt);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// };

// run();

// const configuration = new Configuration({
//   organization: "org-CeQsOcAwJYIpB68fB5cSpn7j",
//   apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const response = await openai.createCompletion({
//   model: "text-davinci-003",
//   prompt: ``,
//   max_tokens: 3000,
//   temperature: 0.5,
//   top_p: 1,
//   frequency_penalty: 0.5,
//   presence_penalty: 0.3,
// });
// res.send({
//   data: response.data.choices[0].text,
// });

// app.post("/formal", async (req, res) => {
//   const input = req.body.inputValue;
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: `Please convert the following text to a formal tone:  ${input}`,
//     max_tokens: 3000,
//     temperature: 0.5,
//     top_p: 1,
//     frequency_penalty: 0.5,
//     presence_penalty: 0.3,
//   });
//   res.send({
//     data: response.data.choices[0].text,
//   });
// });
// app.post("/grammar", async (req, res) => {
//   const input = req.body.inputValue;
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: `Please check the grammar of the following text and provide a detailed explanation: ${input}`,
//     max_tokens: 3000,
//     temperature: 0.5,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//   });
//   res.send({
//     data: response.data.choices[0].text,
//   });
// });
// app.post("/summarize", async (req, res) => {
//   const input = req.body.inputValue;
//   const response = await openai.createCompletion({
//     model: "text-davinci-003",
//     prompt: `Please summarize the following paragraph into a few concise sentences while preserving the main idea and key points: ${input}`,
//     max_tokens: 2000,
//     temperature: 0.7,
//     top_p: 1,
//     frequency_penalty: 0.3,
//     presence_penalty: 0.2,
//   });
//   res.send({
//     data: response.data.choices[0].text,
//   });
// });
