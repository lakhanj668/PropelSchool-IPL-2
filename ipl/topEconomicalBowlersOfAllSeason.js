function topEconomicalBowlersOfAllSeason(matches,deliveries,year)
{
    let bowler_runs={};
      for(let match of matches)
      {
          if(match.season===year)
          {
              for(let delivery of deliveries)
              {
                  if(match.id===delivery.match_id)
                  {
                      if(bowler_runs[delivery.bowler])
                      {
                          bowler_runs[delivery.bowler]+=(parseInt(delivery.total_runs)-parseInt(delivery.bye_runs)-parseInt(delivery.legbye_runs)-parseInt(delivery.penalty_runs))
                      }
                      else
                      {
                          bowler_runs[delivery.bowler]=(parseInt(delivery.total_runs)-parseInt(delivery.bye_runs)-parseInt(delivery.legbye_runs)-parseInt(delivery.penalty_runs))
                      }

                  }
              }
              
           }
       }
       //console.log(bowler_runs)
       let bowler_balls={};
       for(let match of matches)
       {
          if(match.season===year)
          {
              for(let delivery of deliveries)
              {
                  if(match.id===delivery.match_id)
                  {
                      if(bowler_balls[delivery.bowler])
                      {
                          bowler_balls[delivery.bowler]+=1
                      }
                      else
                      {
                          bowler_balls[delivery.bowler]=1
                      }
                  }
    
               }
              
           }
       }
       //console.log(bowler_balls)
       let bowler_economy={}
       for(let i in bowler_balls)
       {
           bowler_economy[i]=(bowler_runs[i]*6/bowler_balls[i]).toFixed(2)
       }
       //console.log(bowler_economy)
       var sortable = [];
       for (var t in bowler_economy) {
        sortable.push([t, parseFloat(bowler_economy[t])]);
         }

        sortable.sort(function(a, b) {
        return a[1] - b[1];      
        });
        sorted=sortable.slice(0,10)
        return sorted    
}
module.exports=topEconomicalBowlersOfAllSeason;