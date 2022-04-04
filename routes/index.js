// GET requests using the SQL requests and using CRUD to manage/update
import express from "express";
const router = express.Router();

import {
  getAllEnergisers,
  getAllQuotes,
  getAllReminders,
  getEnergiserByID,
  getEnergiserByCategory,
  getQuoteByID,
  getReminderByID,
  addNewEnergiser,
} from "../models/functions.js";



// GET energisers listing
router.get("/", function (req, res) {
  res.send("respond with a Rob");
});

// GET ALL ENERGISERS OR SEARCH
router.get("/energisers", async function (req, res) {
  const { activity, category, url } = req.query;

  if (category) {
    const searchResults = await getEnergiserByCategory(category);
    res.json({
      success: true,
      message: `Searched energisers by ${category}`,
      payload: searchResults,
    });
    return;
  }
  const energisers = await getAllEnergisers();
  res.json({ success: true, payload: energisers });
});

// GET ENERGISER BY ID
router.get("/energisers/:id", async function (req, res) {
  const energiser = Number(req.params.id);
  const returnedEnergiser = await getEnergiserByID(energiser);
  res.set("Access-Control-Allow-Origin", "*")
  res.json({ success: true, payload: returnedEnergiser });
});

// GET ALL QUOTES
router.get("/quotes", async function (req, res) {
  const quotes = await getAllQuotes();
  
  res.json({ success: true, payload: quotes });
});

// GET QUOTE BY ID
router.get("/quotes/:id", async function (req, res) {
  const quote = Number(req.params.id);
  const returnedQuote = await getQuoteByID(quote);
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ success: true, payload: returnedQuote });
});

// GET ALL REMINDERS
router.get("/reminders", async function (req, res) {
  const reminders = await getAllReminders();
  res.json({ success: true, payload: reminders });
});

// GET REMINDER BY ID
router.get("/reminders/:id", async function (req, res) {
  const reminder = Number(req.params.id);
  const returnedReminder = await getReminderByID(reminder);
  res.set("Access-Control-Allow-Origin", "*");
  res.json({ success: true, payload: returnedReminder });
});

// ADD NEW ENERGISER

router.post("/energisers", async function ({ body }, res, next) {
  const { activity, category, url } = body;
  const newEnergiser = await addNewEnergiser(activity, category, url);
  res.json({ success: true, payload: newEnergiser });
});

export default router;
