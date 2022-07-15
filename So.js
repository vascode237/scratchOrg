const sfdx = require('shelljs');

function createSo(definitionfile, alias){
     
    //login Org
    var log = sfdx.exec(' sfdx force:auth:web:login');
    var getResultLog = log.stdout;
    var getUsername = getResultLog.split(" ");
    var username = getUsername[2]
    console.log('***********' + username);

    //create ScratchOrg
    var org = sfdx.exec(' sfdx force:org:create -f ' + definitionfile +  ' -a ' + alias + ' -v ' + username);
    var getResultOrg = org.stdout;
    var getUsernameScratchOrg = getResultOrg.split(" ");
    var usernameScratchOrg = getUsernameScratchOrg[6];
    console.log('*************' + usernameScratchOrg);

    //generate password
    sfdx.exec(' sfdx force:user:password:generate -u ' + usernameScratchOrg);

    //display data Org
    sfdx.exec(' sfdx force:org:display -u ' + usernameScratchOrg + ' --json');
    

}

const result=createSo('config/project-scratch-def.json', 'vasly');
console.log('*** result ****',result);

