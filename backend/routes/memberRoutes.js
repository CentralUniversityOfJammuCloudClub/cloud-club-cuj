const express = require("express");
const multer = require("multer");
const Member = require("../models/Member");

const router = express.Router();

// Image storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// POST: Add member
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, role } = req.body;

    const newMember = new Member({
      name,
      role,
      image: req.file.filename,
    });

    await newMember.save();
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET: All members
router.get("/", async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
