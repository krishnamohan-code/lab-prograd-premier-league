//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName,managerAge,currentTeam,trophiesWon){
 return [managerName,managerAge,currentTeam,trophiesWon];
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
  function createFormation(form){
    if((form.length==0))
    {
      return null;
    }
    var captain = {
      forward: form[0],
      midfield: form[1],
      defender: form[2]
  };
  
   
  return captain;
    
  }
  

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
function filterByDebut(year) {
  let filteredArray = [];
  let count = 0;
  for (let i = 0; i < players.length; i++) {
    if (players[i].debut == year) {
      filteredArray[count++] = players[i];
    }
  }
  return filteredArray;
}

//Progression 4 - Filter players that play at the position _______
function filterByPosition(position) 
{
  let fp=[];
  for(var i=0;i<players.length;i++)
  {
    if(players[i].position==position)
    {
      fp.push(players[i])
    }
  }
  return fp;
}

//Progression 5 - Filter players that have won ______ award
function filterByAward(awardName)
{
       var award=[];
       for(var i=0;i<players.length;i++)
       {
         for(var j=0;j<players[i].awards.length;j++)
         {
           if(players[i].awards[j].name==awardName)
           {
             award.push(players[i]);
           }
         }
       }
       return award
}
//Progression 6 - Filter players that won ______ award ____ times
function filterByAwardxTimes(awardName,noOfTimes)
{
     var noft=[]
     var  awdt=[]
      for(var i=0;i<players.length;i++)
     {
       var count=0;
       for (var j=0;j<players[i].awards.length;j++)
       {
         if(players[i].awards.name==awardName)
         {
           count++;
         }
       }
          awdt[i]=count;
       if(awdt[i]==noOfTimes)
       {
         noft.push(players[i])
       }
    }
    return noft;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country
function  filterByAwardxCountry(awardName,country){
  var pc = [];
  for(var i=0;i < players.length;i++)
  {
    for(var j=0;j<players[i].awards.length;j++)
    {
      if(players[i].awards[j].name==awardName && players[i].country==country)
      {
        pc.push(players[i]);
      }
    }
  }
  return pc;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards,team,age)
{
  var nofawardsbyteam=[]
  for(var i=0;i<players.length;i++)
  {
    if((players[i].awards.length>=noOfAwards)&& (players[i].team==team) && (players[i].age<age))
    {
       nofawardsbyteam.push(players[i])
    }
  }
  return nofawardsbyteam;
  }
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
