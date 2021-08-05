


function generatePage(data) {
var holdHTML = [] 


  const generateManager = manager => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Manager</title>
    </head>
    
    <body>

      <h1>${manager.getName()}</h1>
      <h2><a href="https://github.com/">Github</a></h2>
    </body>
    </html>
    `;
  }
  // create a variable to hold HTML
 for (let i = 0; i < data.length; i++){
   if(data[i].getRole() === "Manager") {
     // generate the manager card and add it to html
   } else if(//engineer) {
     // engineer
   }
 }
  

  // for loop over the data array to build html file based on data
  // if (employee.getRole() === "Manager") {
  //    generateManager(manager)
  // for each one, push it into HTML array variable
};



  module.exports = generatePage;