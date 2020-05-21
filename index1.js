const fs = require("fs");
const csv = require("csvtojson");
const matchesPlayedPerYear = require("./ipl/matchesPlayedPerYear");
const matchesWonPerTeamPerYear = require("./ipl/matchesWonPerTeamPerYear");
const extraRunsConceded = require("./ipl/extraRunsConceded");
const topEconomicalBowlers = require("./ipl/topEconomicalBowlers");
const  matchesWonAfterWinningToss = require("./ipl/matchesWonAfterWinningToss")
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const JSON_OUTPUT_FILE_PATH = "./public/data.json";

function main() {
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
      let result1 = matchesPlayedPerYear(matches);
      let result2 = matchesWonPerTeamPerYear(matches);
      let result5 = matchesWonAfterWinningToss(matches);
      csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
            let result3 = extraRunsConceded(matches,deliveries);
            let result4 = topEconomicalBowlers(matches,deliveries);
      save(result1,result2,result3,result4,result5);
    });
    });
}


function save(result1,result2,result3,result4,result5) {
  const jsonData = {
    matchesPlayedPerYear: result1,
    matchesWonPerTeamPerYear: result2,
    extraRunsConceded: result3,
    topEconomicalBowlers: result4,
    matchesWonAfterWinningToss: result5
  };
  const jsonString = JSON.stringify(jsonData);
  fs.writeFile(JSON_OUTPUT_FILE_PATH, jsonString, "utf8", err => {
    if (err) {
      console.error(err);
    }
  });
}

main();