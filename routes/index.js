const router = require('express').Router();
const dnsRouter = require('./dns')

router.use('/', dnsRouter)

router.get('*', function(req, res){
  res.send('EERRRRROUUUUU')
});

module.exports = router