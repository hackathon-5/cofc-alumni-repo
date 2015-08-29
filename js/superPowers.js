var categories = [["Almighty Powers","Almighty_Powers"],["Mental Power","Mental_Power"],["Physical Powers","Personal_Physical_Powers"],["Mimicry","Mimicry"],["Enhancements", "Enhancements"],["Manipulations","Manipulations"]];

function Get(selection){
    var Httpreq = new XMLHttpRequest();
    var url = "http://powerlisting.wikia.com/api/v1/Articles/List?expand=1&category=";
    var urlCall = url.concat(categories[selection][1]);
    Httpreq.open("GET",urlCall,false);
    Httpreq.send(null);
    return Httpreq.responseText;
}

function getPowers(selection){
    var json = JSON.parse(Get(selection));
    return json.toString();
}

var results = getPowers(0);