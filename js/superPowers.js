var categories = [["Almighty Powers","Almighty_Powers"],["Mental Power","Mental_Power"],["Physical Powers","Personal_Physical_Powers"],["Mimicry","Mimicry"],["Enhancements", "Enhancements"],["Manipulations","Manipulations"]];

function getPowers(string){
    var json;
    json = JSON.parse(string);
    return json;
}
function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
var outList = [];
function randomIntFromInterval(min,max,num)
{
    var i = 0;
    while (i < num){
        var current = Math.floor(Math.random()*(max-min+1)+min);
        if (contains(current, outList)){
            continue;
        }
        else{
            outList.push(current);
            i++;
        }
    }
    Math.floor(Math.random()*(max-min+1)+min);
    return outList;
}
function exec(jsonData){
    var req = JSON.stringify(jsonData);
    var results = getPowers(req);
    var powers = [];
    var count = results.items.length;
    while (count > 0){
        count--;
        var currentItem = [];
        currentItem[0] = results.items[count].title;
        currentItem[1] = results.items[count].abstract;
        powers.push(currentItem);
    }
    var topPowers = [];
    var len = 25;
    topPowers = randomIntFromInterval(0, results.items.length - 1, len);
    var displayPowers = [];
    while (len > 0){
        len--;
        if (powers[topPowers[len]][1]!==null){
            displayPowers.push(powers[topPowers[len]]);}
    }
    return displayPowers;}