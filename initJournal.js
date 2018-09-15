var initJournal = function(){
  return function(res){
var fs = require('fs');
var data = { operations: [] };
var json = JSON.stringify(data); //convert it back to json
fs.writeFile('journal.json', json, 'utf8', function(err){
   if (err) {
     console.log(err);
     res.send('Error');
   }
   else
   {
     res.send('Journal was inited');
   };
}); // write it back 
}
}
module.exports = initJournal;