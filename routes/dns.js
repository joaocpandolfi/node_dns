const router = require('express').Router();
const dnsController = require("../controller/dnsController")

router.post('/register', dnsController.Register)
router.get('/get/:tag', dnsController.Get)

module.exports = router