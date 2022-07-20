const sfdx = require('sfdx');
//const fs = require('fs');
 
// options - all options to use for the relevant commands
//   (see sfdx config documentation)

 function createSo(alias, day, definitionfile ) {
  // Create a new scratch org
  
let options = {
    alias : alias,
    devhub  : true,
    sandbox : false,
    definitionfile : definitionfile,
    user: true,
    json : true
}

let newOptions = {
  alias : alias,
  days : day,
  definitionfile : definitionfile,

}

/*var log = {
    alias : alias,
    devhub  : true,
    sandbox : false
}*/

  try{

        //login Org
        sfdx.login(options.alias, options.devhub, options.sandbox);

        //sfdx.setDefaultDevHub( alias );

        //create ScratchOrg
        sfdx.create(newOptions);

        //display data Org
        sfdx.orgInfo(options.alias, options.user, options.json);

        //Import data in the ScratchOrg
        sfdx.push(options.alias);
        
  }catch(err){

  }


}

createSo('vasly1', 1, "config/project-scratch-desf.json");
