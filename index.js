const csv = require("csvtojson");
const topEconomicalBowlersAllSeason = require("./ipl/topEconomicalBowlersOfAllSeason");
const MATCHES_FILE_PATH = "./csv_data/matches.csv";
const DELIVERIES_FILE_PATH = "./csv_data/deliveries.csv";
const express=require("express");
const app=express();
var cors=require("cors");
app.use(
	cors({
		credentials: true,
		origin: true
	})
);
app.options('*', cors());

app.use(express.static(__dirname+"/public"));
app.get("/",function(req,res){
  res.send("Working!!!")
})

app.get("/economy",function(req,res){
  let year=req.query.year;
  //console.log(year)
  csv()
    .fromFile(MATCHES_FILE_PATH)
    .then(matches => {
        csv()
        .fromFile(DELIVERIES_FILE_PATH)
        .then(deliveries => {
           
          let final = topEconomicalBowlersAllSeason(matches,deliveries,year);
          //console.log(final) 
          res.json(final)
        
    });
});
})

const port=process.env.PORT || 3000
app.listen(port, () => console.log(`listening to ${port}`));