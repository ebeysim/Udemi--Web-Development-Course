function houseKeeper(name, yearsOfExperience, cleaningReportoire){
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningReportoire = cleaningReportoire;
    this.clean=function (){
        console.log("Cleaning Reportoire");
    }
}
let houseKeeper1=new houseKeeper("Angela", 12, ["bathroom", "bedroom"]);
console.log(houseKeeper1.cleaningReportoire);
let houseKeeper2=new houseKeeper("Deniz", 9, ["lobby", "kitchen"]);
houseKeeper2.clean();


