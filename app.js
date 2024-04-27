const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const dbUrl = "mongodb+srv://admin:admin@cluster0.tjjayee.mongodb.net/Login?retryWrites=true&w=majority&appName=Cluster0";
const ChannelModel = require('./public/Register');

app.use(express.urlencoded({ extended: true }));


// const connectionParams =  {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// };

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Add any additional options here if needed
}).then(() => {
    console.info("Connected to MongoDB");
}).catch((e) => {
    console.error("Error connecting to MongoDB:", e);
});

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files (if needed)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/About-Us', (req, res) => {
    res.render('About-Us');
});

app.get('/Crops', (req, res) => {
    res.render('Crops');
});

app.get('/Demo', (req, res) => {
    res.render('Demo');
});

app.get('/Element', (req, res) => {
    res.render('Element');
});

app.get('/Harvestor_Lend', (req, res) => {
    res.render('Harvestor_Lend');
});

app.get('/Harvestor-Step3', (req, res) => {
    res.render('/Harvestor-Step3');
});

app.get('/Harvestor-Step4', (req, res) => {
    res.render('Harvestor-Step4');
});

app.get('/Harvestor', (req, res) => {
    res.render('Harvestor');
});

app.get('/Implement_Lend', (req, res) => {
    res.render('Implement_Lend');
});

app.get('/Implement-Step3', (req, res) => {
    res.render('Implement-Step3');
});
app.get('/Implement-Step4', (req, res) => {
    res.render('Implement-Step4');
});
app.get('/Implements', (req, res) => {
    res.render('Implements');
});
app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/Login', (req, res) => {
    res.render('Login');
});
app.get('/Nutrition', (req, res) => {
    res.render('Nutrition');
});
app.get('/pesticides', (req, res) => {
    res.render('pesticides');
});
app.get('/Plant_Growth', (req, res) => {
    res.render('plant_Growth');
});
app.get('/PlantNutrition', (req, res) => {
    res.render('PlantNutrition');
});
app.get('/Prevention', (req, res) => {
    res.render('Prevention');
});
app.get('/Register', (req, res) => {
    res.render('Register');
});

app.post('/register', async (req, res) => {
    try {
        // Extract form data from request body
        const { fname, lname, age, gender, mobileno, email, state, district, tehsil, pincode, password} = req.body;

        // Create a new document using the extracted data
        const newChannel = new ChannelModel({
            FName: fname,
            LName: lname,
            Age: age,
            Gender: gender,
            MobileNo: mobileno,
            Email: email,
            State: state,
            District: district,
            Tehsil: tehsil,
            Pincode: pincode,
            Password:password
        });

        // Save the new document to the database
        await newChannel.save();

        // Redirect to a success page or send a success response
        res.send('Data successfully inserted into database!');
    } catch (error) {
        // Handle errors
        console.error('Error:', error);
        res.status(500).send('Error inserting data into database');
    }
});
app.get('/Soil Health', (req, res) => {
    res.render('Soil Health');
});
app.get('/SoilIssue', (req, res) => {
    res.render('SoilIssue');
});
app.get('/Tractor_Lend', (req, res) => {
    res.render('Tractor_Lend');
});

app.get('/Tractor-Step3', (req, res) => {
    res.render('Tractor-Step3');
});

app.get('/Tractor-Step4', (req, res) => {
    res.render('Tractor-Step4');
});

app.get('/Tractor', (req, res) => {
    res.render('Tractor');
});

app.get('/index-l', (req, res) => {
    res.render('index');
});
app.get('/insert', async (req, res) => {
    try {
        var newChannel = new ChannelModel({
            FName: "Karan",
            LName: "Ghai",
            Age: 20
        });
        
        await newChannel.save();
        res.status(200).send({ "message": "Inserted to DB" });
    } catch (err) {
        console.error("Error!", err);
        res.status(500).send({ "error": "Failed to insert into DB" });
    }
});

app.post('/Login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await ChannelModel.findOne({ Email: email });
        if (user && user.Password === password) {
            res.redirect('/index-l');
        } else {
            res.status(401).send('Invalid email or password');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});