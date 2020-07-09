var bodyParser = require("body-parser"),
mongoose 	   = require("mongoose"),
express 	   = require("express"),
app  		   = express();

mongoose.connect("mongodb://localhost/restful_blog_app",{ useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

var blogSchema = new mongoose.Schema({
	title:String,
	image: String,
	body: String,
	created: {type: Date, default: Date.now()}
	
});

var Blog = mongoose.model("Blog", mongoose.blogSchema);

app.listen(3000, function(){
    console.log('Listening on port 3000!')
});
