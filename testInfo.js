const sfdx = require('sfdx');


function retrieveInfoUser(alias){

    let options = {
        alias : alias,
        user: true,
        json : true
    }
   
    //sfdx.open(options);

    sfdx.orgInfo(options);
    
}



retrieveInfoUser('vasly');