let express=require('express');
let router = express.Router();
router.get("/viewemployees", (req, res) => {
    res.send("View Employee page called");
});

router.post("/assign-task", (req, res) => {
    res.send("Assign Task page called");
});

module.exports = router;

// this is supporting file for the index.js file. It contains the routes for the HR module.