const fs = require('fs');
fs.readFile("employee.json", function(err,data){
     if(err) throw err;
	 const employee=JSON.parse(data);
	 console.log(employee);
	});

