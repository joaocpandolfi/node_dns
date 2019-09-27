const constants = require('../configurations/constants')
const daoDNS  = require('../models/dao/dnsDao')

var DNS = {}

DNS.Register = (req, res) =>{
    daoDNS.Save(req.body)
    .then((r)=>{
        res.send({success:true})
    })
    .catch((e)=>{
        res.send({success:false})
    })
}

DNS.Get = (req,res) =>{
    daoDNS.Get(req.params.tag)
    .then(r=>{
        if(r.data.length != 0)
            res.send(r.data[0]["whook"])
        else
            res.send("")
    })
    
}

module.exports = DNS;