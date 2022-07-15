const sfdx = require('sfdx');
//const fs = require('fs');
 
// options - all options to use for the relevant commands
//   (see sfdx config documentation)

 function createSo(alias, day, definitionfile ) {
  // Create a new scratch org
  
let options = {
    alias : alias,
    days : day,
    definitionfile : definitionfile
}
var log = {
    alias : alias,
    devhub  : true,
    sandbox : false
}
  try{
        const login= sfdx.login(log);
        console.log('*** login ok ****',login);
        const createx= sfdx.create(options);
        console.log('*** create ok ****',createx);
        const orgInfo= sfdx.orgInfo(alias);
        console.log('*** org info ok ****',orgInfo);
        const userInfo= sfdx.userInfo(alias);
        console.log('*** user info ok ****',userInfo);
  }catch(err){

  }

  return;
}

const result=createSo('test4', 1, 'config/project-scratch-def.json');
console.log('*** result ****',result);