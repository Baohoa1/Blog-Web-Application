
import express from "express";
import bodyParser from "body-parser";
import path from "path"; 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Setting middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Automatically render any ejs file in the views folder
app.set('view engine', 'ejs');
app.set('views', path.join(path.dirname(''), 'views'));

// Store blog posts
let posts = [];
let editBlogIndex = null;

// Routing pages
app.get("/", (req, res) => {
    res.render("index.ejs", { posts: posts });
});

app.get("/create-blog", (req, res) => {
    res.render('create-blog.ejs');
});

app.get("/view-post", (req, res) => {
    res.render('edit-blog.ejs', { posts: posts});
})


app.post("/submit", (req, res) => {
    const newBlog = {
        fname: req.body["fullname"],
        title: req.body["title"],
        blogContent: req.body["content"],
    };
    posts.push(newBlog);
    res.render("edit-blog.ejs", { posts: posts });
})

// View each post
app.post("/view", (req,res) => {
    const blogIndex = req.body["blogIndex"];
    const post = posts[blogIndex]
    res.render("view-post.ejs", { post: post })
})

// Edit post
app.post("/edit", (req, res) =>{
    editBlogIndex = req.body["blogIndex"];
    // console.log(`Editing blog at index: ${editBlogIndex}`);
    const blogEdit = posts[editBlogIndex];
    // console.log(blogEdit);
    res.render("create-blog.ejs", { blogEdit: blogEdit })
})

app.post("/editBlog", (req, res) => {
    // console.log(`Edit blog at index: ${editBlogIndex}`);
    const blogToEdit = posts[editBlogIndex];
    // console.log(blogToEdit);
    blogToEdit.fname = req.body["fullname"];
    blogToEdit.title = req.body["title"];
    blogToEdit.blogContent = req.body["content"];
    res.render("edit-blog.ejs", { posts: posts });
})

// Delete post
app.post("/delete", (req, res) =>{
    const indexBlog = req.body["blogIndex"];
    posts.splice(indexBlog, 1);
    res.render("edit-blog.ejs", { posts: posts });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
