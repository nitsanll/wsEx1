var jsonFile = require('../data/data.json');

exports.getAllStud = function()
{
   return jsonFile;
}

exports.getStudById = function(id1)
{
    for(var i = 0; i<jsonFile.students.length; i++)
    {
        if(jsonFile.students[i].id == id1)
            return jsonFile.students[i];
    }
}

exports.getStudByYear = function(year)
{
    var studString = "[";
    for(var i = 0; i<jsonFile.students.length; i++)
    {
        if(jsonFile.students[i].year == year)
        {
            studString += (JSON.stringify(jsonFile.students[i]));
            studString += ","; 
        }
    }
    studString = studString.substring(0, studString.length-1);
    studString += "]";
    studJson = JSON.parse(studString.toString());
    return studJson;
}  
