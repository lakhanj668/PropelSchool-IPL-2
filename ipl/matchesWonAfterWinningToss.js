function matchesWonAfterWinningToss(matches)
{
    const r=[];
    const p=[];
    for(let match of matches)
    {
        r.push(match.winner)
        p.push(match.toss_winner)

    }
    u=[];
    for(let i=0;i<r.length;i++)
    {
        if(r[i]===p[i])
        {
          u.push(r[i])
        }
    }
    dic={};
    for(let i of u)
    {
        if(dic[i])
        {
            dic[i]+=1
        }
        else
        {
            dic[i]=1
        }
    }
    return dic
}
module.exports=matchesWonAfterWinningToss;