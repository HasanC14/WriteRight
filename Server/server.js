const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateResponse = async (prompt, res) => {
  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    res.send(text);
  } catch (error) {
    res.status(500).send("Error generating response");
  }
};

app.post("/rewrite", async (req, res) => {
  const input = req.body.inputValue;
  if (!input) return res.status(400).json({ error: "inputValue required" });

  const prompt = `You are an expert English language specialist. Rewrite the following text in a clear and straightforward manner while maintaining the exact original meaning. Provide only one rewritten version, not multiple options or explanations: "${input}"`;
  await generateResponse(prompt, res);
});

app.post("/fluency", async (req, res) => {
  const input = req.body.inputValue;
  if (!input) return res.status(400).json({ error: "inputValue required" });

  const prompt = `You are a professional English writing coach. Rewrite the following text to improve its readability and natural flow. Make it smooth and easy to understand while preserving the original message. Provide only one improved version: "${input}"`;
  await generateResponse(prompt, res);
});

app.post("/natural", async (req, res) => {
  const input = req.body.inputValue;
  if (!input) return res.status(400).json({ error: "inputValue required" });

  const prompt = `You are a native English speaker and communication expert. Rewrite the following text to sound completely natural and conversational, as if spoken by a fluent native speaker in everyday conversation. Make it sound effortless and authentic. Provide only one natural version: "${input}"`;
  await generateResponse(prompt, res);
});

app.post("/formal", async (req, res) => {
  const input = req.body.inputValue;
  if (!input) return res.status(400).json({ error: "inputValue required" });

  const prompt = `You are a professional business communication specialist. Transform the following text into a formal, polished version suitable for official business correspondence, reports, or professional settings. Use sophisticated vocabulary and proper formal structure. Provide only one formal version: "${input}"`;
  await generateResponse(prompt, res);
});

app.post("/academic", async (req, res) => {
  const input = req.body.inputValue;
  if (!input) return res.status(400).json({ error: "inputValue required" });

  const prompt = `You are a distinguished academic professor and scholarly writing expert. Rewrite the following text in a sophisticated academic style appropriate for research papers, dissertations, or scholarly publications. Use precise terminology, complex sentence structures, and scholarly tone. Provide only one academic version: "${input}"`;
  await generateResponse(prompt, res);
});

app.post("/simple", async (req, res) => {
  const input = req.body.inputValue;
  if (!input) return res.status(400).json({ error: "inputValue required" });

  const prompt = `You are an expert at explaining complex ideas in simple terms. Rewrite the following text using basic, everyday language that anyone can easily understand. Use short sentences and common words while keeping the original meaning intact. Provide only one simplified version: "${input}"`;
  await generateResponse(prompt, res);
});

app.post("/creative", async (req, res) => {
  const input = req.body.inputValue;
  if (!input) return res.status(400).json({ error: "inputValue required" });

  const prompt = `You are a creative writing master and storyteller. Transform the following text into an imaginative, engaging version with creative flair, vivid imagery, and unique perspective. Add personality and creativity while preserving the core message. Give me only one creative rewrite, not multiple options: "${input}"`;
  await generateResponse(prompt, res);
});

app.post("/expand", async (req, res) => {
  const input = req.body.inputValue;
  if (!input) return res.status(400).json({ error: "inputValue required" });

  const prompt = `You are a skilled content developer and elaboration specialist. Expand the following text by adding relevant details, examples, context, and deeper explanation while maintaining the original meaning. Make it more comprehensive and informative. Provide only one expanded version: "${input}"`;
  await generateResponse(prompt, res);
});

app.post("/shorten", async (req, res) => {
  const input = req.body.inputValue;
  if (!input) return res.status(400).json({ error: "inputValue required" });

  const prompt = `You are an expert editor specializing in concise communication. Rewrite the following text to be as concise as possible while retaining all essential information and meaning. Remove unnecessary words and make every word count. Provide only one shortened version: "${input}"`;
  await generateResponse(prompt, res);
});

app.post("/grammar", async (req, res) => {
  const input = req.body.inputValue;
  if (!input) return res.status(400).json({ error: "inputValue required" });

  const prompt = `You are a professional English grammar expert and editor. Analyze the following text for grammar errors and provide a corrected version with proper grammar, punctuation, and sentence structure. Give me only the corrected text without explanations: "${input}"`;
  await generateResponse(prompt, res);
});

app.post("/summarize", async (req, res) => {
  const input = req.body.inputValue;
  if (!input) return res.status(400).json({ error: "inputValue required" });

  const prompt = `You are an expert summarization specialist. Create a clear, concise summary of the following text that captures all the main ideas and key points in fewer words. Make it comprehensive yet brief. Provide only one summary: "${input}"`;
  await generateResponse(prompt, res);
});

app.get("/", (req, res) => {
  res.send("API running");
});

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
