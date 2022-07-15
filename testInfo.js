const sfdx = require('sfdx');

function retrieveInfoUser(alias){
   
    let infos1 = sfdx.orgInfo(alias);
    
    let infos2 = new Promise((resolve,reject) =>{
        // sfdx.userInfo(alias);
        resolve(sfdx.userInfo(alias));
    }) 

    return infos2;
}

retrieveInfoUser('test1').then(e =>{
    console.log('#### return'+e);
    console.log(typeof e);
});