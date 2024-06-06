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

const generateResponse = async (prompt, res) => {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    res.send(text);
  } catch (error) {
    res.status(500).send("Error generating response");
  }
};

app.post("/rewrite", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Paraphrase the following text in a clear and straightforward manner, maintaining the original meaning: '${input}'`;
  await generateResponse(prompt, res);
});

app.post("/fluency", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Paraphrase the following text to improve readability and flow, ensuring it is smooth and easy to understand: '${input}'`;
  await generateResponse(prompt, res);
});

app.post("/natural", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Paraphrase the following text to make it sound natural and conversational, as if it were spoken by a native speaker: '${input}'`;
  await generateResponse(prompt, res);
});

app.post("/formal", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Paraphrase the following text in a formal tone suitable for professional or official communication: '${input}'`;
  await generateResponse(prompt, res);
});

app.post("/academic", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Paraphrase the following text in an academic style, suitable for use in scholarly writing or research papers: '${input}'`;
  await generateResponse(prompt, res);
});

app.post("/simple", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Paraphrase the following text to make it simpler and easier to understand, using basic language: '${input}'`;
  await generateResponse(prompt, res);
});

app.post("/creative", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Paraphrase the following text with a creative twist, adding imaginative elements or a unique perspective: '${input}'`;
  await generateResponse(prompt, res);
});

app.post("/expand", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Paraphrase the following text by expanding on the ideas, adding more details and elaboration: '${input}'`;
  await generateResponse(prompt, res);
});

app.post("/shorten", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Paraphrase the following text to make it more concise, keeping only the essential information: '${input}'`;
  await generateResponse(prompt, res);
});

app.post("/grammar", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Please check the grammar of the following text and provide a detailed explanation: ${input}`;
  await generateResponse(prompt, res);
});

app.post("/summarize", async (req, res) => {
  const input = req.body.inputValue;
  const prompt = `Please summarize the following paragraph into a few concise sentences while preserving the main idea and key points: ${input}`;
  await generateResponse(prompt, res);
});

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
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
