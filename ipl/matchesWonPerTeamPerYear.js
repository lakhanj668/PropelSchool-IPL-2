function matchesWonPerTeamPerYear(matches)
{
    const r={};
    for(let match of matches)
    {
        if(r[match.season])
        {
            if(r[match.season][match.winner])
            {
                r[match.season][match.winner]+=1
            }
            else
            {
                r[match.season][match.winner]=1
            }
        }
        else
        {
            r[match.season]={}
            r[match.season][match.winner]=1
        }

    }
    return r
}
module.exports=matchesWonPerTeamPerYear;