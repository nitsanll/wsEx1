var jsonFile = require('../data/data.json');

//get all student's details in json
exports.getAllStud = function()
{
   return jsonFile;
}

//get a specific student details 
exports.getStudById = function(id1)
{
    for(var i = 0; i<jsonFile.students.length; i++)
    {
        if(jsonFile.students[i].id == id1)
            return jsonFile.students[i];
    }
}

//get number of student's details by a specific year
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
    var studJson = JSON.parse(studString);
    return studJson;
}  
