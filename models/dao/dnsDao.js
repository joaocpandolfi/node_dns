/*
* Dao DNS
*/
const daoBase = require('../dao.js');

const dao = Object.create(daoBase);

dao.Save = (data) => new Promise((resolve,reject)=>{
  const sql = 'INSERT INTO dns (tag,whook) VALUES (?);';
  dao.sql_query(sql, [[data.tag,data.whook]])
    .then((results) => {
      resolve(results);
    })
    .catch((r) => {
      reject(r);
    });
})

dao.Get = (tag) => new Promise((resolve,reject)=>{
    const sql = 'SELECT * FROM dns WHERE tag = ? ORDER BY iddns DESC LIMIT 1 ;';
    dao.sql_query(sql, [tag])
      .then((results) => {
        resolve(results);
      })
      .catch((r) => {
        console.log(r)
        reject(r);
      });
})

module.exports = dao