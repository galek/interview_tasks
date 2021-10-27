// Расшифровать строку
/*
WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB => WE ARE THE CHAMPIONS MY FRIEND
*/

const tmp = 'WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'
console.warn(tmp.replaceAll('WUB', ' '))

// https://regex101.com/r/ZpgzFz/1
console.warn(tmp.replace(/WUB/g, ' '))


// https://regex101.com/r/ZpgzFz/1
//https://regex101.com/r/au46cH/1
console.warn(tmp.replace(/WUB/g, (res, it) => {
  if (it === 0) return ""
  return ' '
}).replace(/ $/,""))
