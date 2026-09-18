let express=require('express');
let app=express();
// this is the main entry point for the back-end server. It sets up the express app and imports the HR routes.
let hrRoutes=require('./routes/hr_routes');

app.use('/api/hr', hrRoutes); 
// localhost:3000/api/hr/viewemployees 
// run the server
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})