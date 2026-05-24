# Blog-Web-Application

シンプルで使いやすいブログWebアプリケーション。<br/>
ユーザーが「書く」「読む」といった基本行動に集中できるよう、必要最小限の構成で設計・実装しました。

### Preview
* <ins> CRUD機能搭載（投稿 / 閲覧 / 編集 / 削除）<br/>
* <ins> シンプルなUI設計 <br/>
* <ins> Node.js / Expressによるバックエンド実装 <br/>
* <ins> Bootstrapを活用したレスポンシブデザイン 

### 制作背景
既存のブログサービスは高機能である一方、情報量が多く、ユーザーが「書くこと」「読むこと」に集中しづらいと感じた。<br/>
また、個人開発を通じてCRUD構造の理解を深める目的もあり、シンプルなブログアプリケーションを制作した。

### コンセプト
無駄な装飾や複雑な機能を排除し、ユーザーが直感的に操作できる設計を目指した。<br/>
投稿・閲覧・編集といった基本機能にフォーカスし、視認性と操作性を重視したUI/UXを設計。

### 制作期間
約3ヶ月（業務後や週末の時間を活用して制作）

### 担当領域
#### 企画・設計<br/>
- 情報設計<br/>
- 画面遷移設計<br/>
- CRUD構造設計<br/>

#### デザイン<br/>
- UI/UX設計<br/>
- レイアウト設計<br/>
- ビジュアルデザイン<br/>

#### 実装<br/>
- フロントエンド実装<br/>
- バックエンド実装<br/>
- Node.js / ExpressによるCRUD機能構築<br/>

 #### 使用技術<br/>
- Frontend - HTML / CSS / Bootstrap<br/>
- Backend - Node.js / Express.js<br/>
- Design - Figma<br/>


### 工夫したポイント

#### UX
- ホーム → 投稿作成 → 投稿閲覧 → 編集・削除までの導線をシンプル化
- ユーザーが迷わず操作できる構成を意識

#### UI
- 情報の優先度に応じて余白やフォントサイズを調整
- タイトルと概要を見やすく配置
- ボタンや操作要素のデザインを統一

### 成果
ブログアプリケーションに必要な基本的なCRUD機能を一通り実装し、フロントエンドとバックエンド連携への理解を深めた。<br/>

また、UI設計では情報量を見直すことで視認性を改善し、シンプルな構成でもユーザー体験を向上できることを学んだ。<br/>


### Screenshot
ホームページ
![Screenshot 2025-04-21 210104](https://github.com/user-attachments/assets/3745c6df-5949-4108-b35e-7390077612f2)

「投稿作成」
![Screenshot 2025-04-16 205006](https://github.com/user-attachments/assets/6f274000-384c-4dc6-9a7e-36980fa446a6)

「投稿閲覧」、「投稿編集」、「投稿消除」
![Screenshot 2025-04-16 205216](https://github.com/user-attachments/assets/58e0b486-fe53-4404-bb40-dac0df81cf58)

「投稿閲覧」
![Screenshot 2025-04-16 205345](https://github.com/user-attachments/assets/354b148f-d9ca-4d02-8583-e8ab193589b7)

「投稿編集」
![Screenshot 2025-04-16 205431](https://github.com/user-attachments/assets/94d468aa-59ef-4677-a419-ecbc5d936edb)

### インストール方法
まず、Gitをインストールするのは必要になります。
このプロジェクトをローカルで実行するには、Node.js の依存関係と Express.js パッケージをダウンロードし、以下の手順に従ってインストールしてください。<br/>
#### Step 1: `git clone https://github.com/Baohoa1/Blog-Web-Application.git` <br/>
#### Step 2: `cd Blog-Web-Application` <br/>
#### Step 3: `npm install` <br/>
#### Step 4: `npm install -g nodemon`　<br/>

インストール後に, `nodemon index.js` でコマンドプロンプトを起動して、ブラウザの「localhost:3000/」でプロジェクトを実行することになっております。
このようなのエラーにあったら：
![npm-command-disable_02](https://github.com/user-attachments/assets/7571caa8-f717-43e0-b69a-d55828a2007c)

こんなように解決できます：
https://a-m-t.co.jp/blog/npm-command-disable/

