import express from "express";
const router = express.Router();

router.get("/router", (req, res) => {
  res.send("Router is working fine");
});
router.post("/posttest", (req, res) => {
  const userName = req.body.username;
  console.log(userName);
  res.send("Your user name is: " + userName);
});

export default router;
