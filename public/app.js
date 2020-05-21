var year
const form = document.querySelector('form')
form.addEventListener('submit', function(res){
  year = form.elements.year.value
  res.preventDefault()
  fetch(`/economy?year=${year}`)
    .then(data => data.json())   
    .then(visualizeEconomicData)
})
function visualizeEconomicData(data)
{
    return;
}
function visualizeEconomicData(data)
{
  let seriesData=data;
  Highcharts.chart("top-economical-bowlers-all-season", {
    chart: {
      type: "column"
    },
    title: {
      text: `Top 10 economical bowlers of IPL season ${year}`
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy_Rate"
      }
    },
    series: [
      {
        name: "Bowlers_Name",
        data: seriesData
      }
    ]
  });
}

function fetchAndVisualizeData() {
  fetch("./data.json")
    .then(r => r.json())
    .then(visualizeData);
}

fetchAndVisualizeData();

function visualizeData(data) {
  visualizeMatchesPlayedPerYear(data.matchesPlayedPerYear);
  visualizematchesWonPerTeamPerYear(data.matchesWonPerTeamPerYear);
  visualizeextraRunsConceded(data.extraRunsConceded);
  visualizetopEconomicalBowlers(data.topEconomicalBowlers);
  visualizematchesWonAfterWinningToss(data.matchesWonAfterWinningToss);
  return;
}

function visualizeMatchesPlayedPerYear(matchesPlayedPerYear) {
  const seriesData = [];
  for (let year in matchesPlayedPerYear) {
    seriesData.push([year, matchesPlayedPerYear[year]]);
  }

  Highcharts.chart("matches-played-per-year", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Played Per Year"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Years",
        data: seriesData
      }
    ]
  });
}


function visualizematchesWonPerTeamPerYear(matchesWonPerTeamPerYear) {
  let teams=[];
for (let year in matchesWonPerTeamPerYear)
{
    for(let i in matchesWonPerTeamPerYear[year])
    {
        teams.push(i)
    }
}
const names=[...new Set(teams)]
//console.log(names)
 
let yr=[];
for(let y in matchesWonPerTeamPerYear)
{
    yr.push(y)
}
year=[...new Set(yr)]
//console.log(year)
const seriesData=[];
for(let s in names)
{
    let total=[];
    for(let g in year)
    {
        if(matchesWonPerTeamPerYear[year[g]].hasOwnProperty(names[s]))
        {
            total.push(matchesWonPerTeamPerYear[year[g]][names[s]])
        }
        else
        {
            total.push(0)
        }
    }
    seriesData.push({name:names[s],data:total})
}

Highcharts.chart("matches-won-per-team-per-year", {
  chart: {
      type: 'column'
  },
  title: {
      text: 'Matches Won Per Team Per Year'
  },
  subtitle: {
      text: 'Source: Wikipedia'
  },
  xAxis: {
      categories: year,
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Matches Won'
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: seriesData
});
}


function visualizeextraRunsConceded(extraRunsConceded) {
  const seriesData = [];
  for (let year in extraRunsConceded) {
    seriesData.push([year,extraRunsConceded[year]]);
  }

  Highcharts.chart("extra-runs-conceded", {
    chart: {
      type: "column"
    },
    title: {
      text: "Extra runs conceded by each team"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "extra runs conceded"
      }
    },
    series: [
      {
        name: "teams",
        data: seriesData
      }
    ]
  });
}


function visualizetopEconomicalBowlers(topEconomicalBowlers) {
  const seriesData = [];
  for (let year in topEconomicalBowlers) {
    seriesData.push([year, topEconomicalBowlers[year]]);
  }

  Highcharts.chart("top-economical-bowlers", {
    chart: {
      type: "column"
    },
    title: {
      text: "top economical bowler of 2015"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Economy_rate"
      }
    },
    series: [
      {
        name: "Bowlers_name",
        data: seriesData
      }
    ]
  });
}


function visualizematchesWonAfterWinningToss(matchesWonAfterWinningToss) {
  const seriesData = [];
  for (let year in matchesWonAfterWinningToss) {
    seriesData.push([year, matchesWonAfterWinningToss[year]]);
  }

  Highcharts.chart("matches-won-after-winning-toss", {
    chart: {
      type: "column"
    },
    title: {
      text: "Matches Won After Winning Toss"
    },
    subtitle: {
      text:
        'Source: <a href="https://www.kaggle.com/nowke9/ipldata/data">IPL Dataset</a>'
    },
    xAxis: {
      type: "category"
    },
    yAxis: {
      min: 0,
      title: {
        text: "Matches"
      }
    },
    series: [
      {
        name: "Teams",
        data: seriesData
      }
    ]
  });
}
