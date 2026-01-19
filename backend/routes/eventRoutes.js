const express = require("express");
const router = express.Router();

// Dummy in-memory events array
let events = [];

// GET all events
router.get("/", (req, res) => {
  res.json(events);
});

// POST new event
router.post("/", (req, res) => {
  const event = req.body;
  events.push(event);
  res.status(201).json(event);
});

module.exports = router;

