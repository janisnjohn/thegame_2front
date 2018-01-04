const express = require("express");
const router = express.Router();
const controllers = require("../controllers")

router.post('/login', controllers.auth.login);
router.get("/logout", controllers.auth.logout);
router.post("/register", controllers.auth.register);

// router.post('/', function(req, res, next) {
// 	const username = req.body.username;
// 	const password = req.body.password;

	
// })

router.get('/', (req, res) => res.send('Hello from auth!'));

module.exports = router;