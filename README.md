# Blog-Web-Application

Node.js と Express.js で作られたシンプルなブログウェブアプリです。スタイリングには Bootstrap と CSS を使用しています。ブログの基本的な機能として、「投稿の作成」や「投稿の閲覧」などを追加しました。
さらに、投稿を閲覧するときに「編集」と「削除」もできるようになっています。しかし、Express のサーバーで動作するため、サイトをリフレッシュすると作成した投稿は消えてしまいます。


### Description
This is a simple version of a Blog web application. Users can create posts with their full name, title, and content. After they finish their blog, they can view it, or if they want to fix something, they can edit the post. Last but not least, users can delete their posts. However, there is no authentication security built into this website, and no hard-coded server, so the posts would disappear after reloading the page.

### Languages
* <ins>**Node.js**</ins>: A JavaScript runtime environment, used to build the server-side of a website.<br/>
* <ins>**Express.js**</ins>: A JavaScript framework, used to create a temporary server, handle HTTP requests, website page routes, and manage middleware. This framework reduces code and provides better readability.<br/>
* <ins>**Bootstrap**</ins>: Used to create layout, as well as styling.<br/>
* <ins>**CSS**</ins>: Used for further component styling.<br/>

### Website Features
First, this is the Homepage.

![Screenshot 2025-04-16 204839](https://github.com/user-attachments/assets/06920075-8b45-4be0-8070-f56df0ce830a)

The "Create Post" is where users create their blog on the navigation bar.
![Screenshot 2025-04-16 205006](https://github.com/user-attachments/assets/6f274000-384c-4dc6-9a7e-36980fa446a6)

After finishing their blog, they could view it, edit, or even delete the post.
![Screenshot 2025-04-16 205216](https://github.com/user-attachments/assets/58e0b486-fe53-4404-bb40-dac0df81cf58)

Click "View" to see the post.
![Screenshot 2025-04-16 205345](https://github.com/user-attachments/assets/354b148f-d9ca-4d02-8583-e8ab193589b7)

Click "Edit" to change the content.
![Screenshot 2025-04-16 205431](https://github.com/user-attachments/assets/94d468aa-59ef-4677-a419-ecbc5d936edb)

### Installation

To run this project locally, please download Node.js dependencies and the Express.js package, then follow below to install.<br/>
`git clone https://github.com/Baohoa1/Blog-Web-Application.git` <br/>
`cd Blog-Web-Application` <br/>
`npm install` <br/>
`npm install -g nodemon` <br/>

After installation, run `nodemon index.js` on the command prompt to start.
