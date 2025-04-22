
import express from "express";
import bodyParser from "body-parser";
import path from "path"; 

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// ミドルウェアの設定
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// views フォルダー内のすべての EJS ファイルを自動的にレンダリングします。
app.set('view engine', 'ejs');
app.set('views', path.join(path.dirname(''), 'views'));

// 投稿を保存
let posts = [];
let editBlogIndex = null;

// ルーティングページ
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

// 投稿を閲覧
app.post("/view", (req,res) => {
    const blogIndex = req.body["blogIndex"];
    const post = posts[blogIndex]
    res.render("view-post.ejs", { post: post })
})

// 投稿を編集
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

// 投稿を消除
app.post("/delete", (req, res) =>{
    const indexBlog = req.body["blogIndex"];
    posts.splice(indexBlog, 1);
    res.render("edit-blog.ejs", { posts: posts });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
