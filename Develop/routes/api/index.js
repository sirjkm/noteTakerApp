const router = require("express").Router();
const bookRoutes = require("./noteRoutes");

router.use("/notes", noteRoutes);

module.exports = router;