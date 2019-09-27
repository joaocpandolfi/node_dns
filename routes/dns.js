const router = require('express').Router();
const dnsController = require("../controller/dnsController")

router.get('/register', dnsController.Register)
router.post('/get/{tag}', dnsController.Get)

module.exports = router