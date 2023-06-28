import * as fs from 'fs';
// import tx from '../../../src/textFiles/Davidhsu.txt';
interface Account {
    name: string;
    username: string;
    bio: string | null;
    createdAt: string;
  }
export const ReadTextFile= ( fileContent:string)=>{
    const lines = fileContent.split('\n');
    const date = new Date();
    const accounts: Account[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith('account')) {
      const accountInfo: Partial<Account> = {};
      const name= line.split(':')[1].trim();
      accountInfo.name = name;
      accountInfo.username = lines[i+1].trim();
      const bioLine = lines[i+3].trim();
  
      if(bioLine.startsWith('------')){
        accountInfo.bio = null;
      }else{
          accountInfo.bio = bioLine.replace('Following', '').trim();
        }
      accountInfo.createdAt = date.toLocaleDateString() + ' ' + date.toTimeString();
      accounts.push(accountInfo as Account);
    }
  }
  console.log(accounts);    
  
    return accounts;
  }
