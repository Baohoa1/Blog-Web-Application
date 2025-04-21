# Blog-Web-Application

Node.js と Express.js で作られたシンプルなブログウェブアプリです。スタイリングには Bootstrap と CSS を使用しています。ブログの基本的な機能として、「投稿の作成」や「投稿の閲覧」などを追加しました。
さらに、投稿を閲覧するときに「編集」と「削除」もできるようになっています。しかし、Express のサーバーで動作するため、サイトをリフレッシュすると作成した投稿は消えてしまいます。


### 説明
このブログサイトでは、ユーザーが氏名、投稿タイトル、投稿内容を入力した後、投稿の閲覧・編集・削除が可能です。ただし、認証セキュリティーが組み込まれておらず、また、サーバーもハードコードされていないため、サイトが更新されると投稿が消えてしまいます。

### プログラミング言語
* <ins>**Node.js**</ins>:Web サイトのサーバー側を構築するために使用される JavaScript ランタイム環境です。<br/>
* <ins>**Express.js**</ins>:一時サーバーの作成、HTTPリクエストの処理、ウェブサイトのページルーティング、ミドルウェアの管理に使用するJavaScriptフレームワークです。このフレームワークはコード量を削減し、可読性を向上させます。<br/>
* <ins>**Bootstrap**</ins>: ウェブサイトのレイアウトを作成し、スタイリングするのツールになります。<br/>
* <ins>**CSS**</ins>: ウェブサイトの詳細の部分をスタイリングのツール<br/>

### ウェブサイト昨日
まず、こちらはホームページになっております。
![Screenshot 2025-04-21 210104](https://github.com/user-attachments/assets/3745c6df-5949-4108-b35e-7390077612f2)

ナヴィゲーションの「投稿作成」には、ユーザーが投稿を作ります。
![Screenshot 2025-04-16 205006](https://github.com/user-attachments/assets/6f274000-384c-4dc6-9a7e-36980fa446a6)

投稿を作成した後、「投稿閲覧」、「投稿編集」、「投稿消除」という選択を選ばれます。
![Screenshot 2025-04-16 205216](https://github.com/user-attachments/assets/58e0b486-fe53-4404-bb40-dac0df81cf58)

「投稿閲覧」は作成したの投稿を閲覧します。
![Screenshot 2025-04-16 205345](https://github.com/user-attachments/assets/354b148f-d9ca-4d02-8583-e8ab193589b7)

「投稿編集」は投稿の内容を直します。
![Screenshot 2025-04-16 205431](https://github.com/user-attachments/assets/94d468aa-59ef-4677-a419-ecbc5d936edb)

### インストール

このプロジェクトをローカルで実行するには、Node.js の依存関係と Express.js パッケージをダウンロードし、以下の手順に従ってインストールしてください。。<br/>
`git clone https://github.com/Baohoa1/Blog-Web-Application.git` <br/>
`cd Blog-Web-Application` <br/>
`npm install` <br/>
`npm install -g nodemon` <br/>

インストール後に, `nodemon index.js` でコマンドプロンプトを起動して、ブラウザの「localhost:3000/」でプロジェクトを実行することになっております。
