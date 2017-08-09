# Glify

Glify is an open source platfrom for sharing and curating SBOL glyphs
used in the SBOL standard. The platform uses a Github like approach for
building up the libraries where the users and organizations can upload
individual glyphs or curate different sets of glyphs in the form of
collections. As a baseline attempt we want to model the popularity of
the Glyph / Library by counting the total number of reactions to each
of the entities.

## Standard Interchange Formats

Glify only accepts an SVG format for the Glyph. We believe this will
start enforcing proper guidelines onto how we should go about creating
and sharing glyphs in the community.

## Targets

The things we wanted to complete and the status of these things.

- Web App Routing : Partially complete
- Mongo DB Data Model :  Complete
- CRUD REST API  : Partially Complete
- UI : Partial Mockups Completed
- Frontend Controllers : Not Started
- Authentication : Complete (Has some obvious bugs)


## Environment Variables

Populate the environment file (.env)

```
MONGOLAB_URI=CONNECTION STRING
SESSION_SECRET = "WHATEVER THIS IS GOING TO BE"

```

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone --depth=1 https://github.com/sahat/hackathon-starter.git myproject

# Change directory
cd myproject

# Install NPM dependencies
npm install

# Or, if you prefer to use `yarn` instead of `npm`
yarn install

# Then simply start your app
node app.js
```

**Note:** I highly recommend installing [Nodemon](https://github.com/remy/nodemon).
It watches for any changes in your  node.js app and automatically restarts the
server. Once installed, instead of `node app.js` use `nodemon app.js`. It will
save you a lot of time in the long run, because you won't need to manually
restart the server each time you make a small change in code. To install, run
`sudo npm install -g nodemon`.


Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/passport.js             | Passport Local and OAuth strategies, plus login middleware.  |
| **controllers**/api.js             | Controller for /api route and all api examples.              |
| **controllers**/contact.js         | Controller for contact form.                                 |
| **controllers**/home.js            | Controller for home page (index).                            |
| **controllers**/user.js            | Controller for user account management.                      |
| **models**/User.js                 | Mongoose schema and model for User.                          |
| **models**/Organization.js         | Mongoose schema and model for Organization.                          |
| **models**/VGlyph.js               | Mongoose schema and model for VGlyph.                          |
| **models**/VLibrary.js             | Mongoose schema and model for VLibrary.                          |
| **models**/Glyph.js                | Mongoose schema and model for Glyph.                          |
| **models**/Library.js              | Mongoose schema and model for Library.                          |
| **models**/Comment.js              | Mongoose schema and model for Comment.                          |
| **models**/Issue.js                | Mongoose schema and model for Issue.                          |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **public**/**js**/application.js   | Specify client-side JavaScript dependencies.                 |
| **public**/**js**/main.js          | Place your client-side JavaScript here.                      |
| **public**/**css**/main.scss       | Main stylesheet for your app.                                |
| **public/css/themes**/default.scss | Some Bootstrap overrides to make it look prettier.           |
| **views/account**/                 | Templates for *login, password reset, signup, profile*.      |
| **views/api**/                     | Templates for API Examples.                                  |
| **views/partials**/flash.hbs       | Error, info and success flash notifications.                 |
| **views/partials**/header.hbs      | Navbar partial template.                                     |
| **views/partials**/footer.hbs      | Footer partial template.                                     |
| **views**/layout.hbs               | Base template.                                               |
| **views**/home.hbs                 | Home page template.                                          |
| **views**/browse.hbs               | Browse page template.                                          |
| **views**/submitglyph.hbs          | Upload page template.                                          |
| .env.example                       | Your API keys, tokens, passwords and database URI.           |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |

**Note:** There is no preference how you name or structure your views.
You could place all your templates in a top-level `views` directory without
having a nested folder structure, if that makes things easier for you.
Just don't forget to update `extends ../layout`  and corresponding
`res.render()` paths in controllers.

### Why do I get `403 Error: Forbidden` when submitting a form?
You need to add the following hidden input element to your form. This has been
added in the [pull request #40](https://github.com/sahat/hackathon-starter/pull/40)
as part of the CSRF protection.

```
input(type='hidden', name='_csrf', value=_csrf)
```

**Note:** It is now possible to whitelist certain URLs. In other words you can
specify a list of routes that should bypass CSRF verification check.

**Note 2:** To whitelist dynamic URLs use regular expression tests inside the
CSRF middleware to see if `req.originalUrl` matches your desired pattern.

### I am getting MongoDB Connection Error, how do I fix it?
That's a custom error message defined in `app.js` to indicate that there was a
problem connecting to MongoDB:

```js
mongoose.connection.on('error', () => {
  console.error('MongoDB Connection Error. Please make sure MongoDB is running.');
});
```
You need to have a MongoDB server running before launching `app.js`. You can
download MongoDB [here](http://mongodb.org/downloads), or install it via a package manager.
<img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">
Windows users, read [Install MongoDB on Windows](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/).


### Mongoose Cheatsheet

#### Find all users:
```js
User.find((err, users) => {
  console.log(users);
});
```

#### Find a user by email:
```js
let userEmail = 'example@gmail.com';
User.findOne({ email: userEmail }, (err, user) => {
  console.log(user);
});
```

#### Find 5 most recent user accounts:
```js
User
  .find()
  .sort({ _id: -1 })
  .limit(5)
  .exec((err, users) => {
    console.log(users);
  });
```

#### Get total count of a field from all documents:
Let's suppose that each user has a `votes` field and you would like to count
the total number of votes in your database across all users. One very
inefficient way would be to loop through each document and manually accumulate
the count. Or you could use [MongoDB Aggregation Framework](https://docs.mongodb.org/manual/core/aggregation-introduction/) instead:

```js
User.aggregate({ $group: { _id: null, total: { $sum: '$votes' } } }, (err, votesCount)  => {
  console.log(votesCount.total);
});
```



# Attribution

This project is based off the hackathon started template : [https://github.com/sahat/hackathon-starter](https://github.com/sahat/hackathon-starter)