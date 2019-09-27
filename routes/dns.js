const router = require('express').Router();
const dnsController = require("../controller/dnsController")

router.post('/register', fileController.GetCertFile)
router.post('/get/{tag}', fileController.GetCertFile)

module.exports = router