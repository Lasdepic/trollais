import express from "express";
import ollama from "ollama";
import { connectDb } from "./config/database.js";

connectDb();

const app = express();
app.use(express.json());

const PORT = 3000;

app.post("/api/ask", async (req, res) => {
    const { question } = req.body;
  try {
    const response = await ollama.chat({
      model: "trollais",
      messages: [
        {
          role: "user",
          content: question,
        },
      ],
    });
    const answer = response.message.content;
    res.status(200).json(answer);
  } catch (error) {
    res.status(500).json({error : error, message : "Une Erreur est survenue sur le serveur"})
  }
});

app.listen(PORT, () => console.log("Le serveur ok sur le port" + PORT))