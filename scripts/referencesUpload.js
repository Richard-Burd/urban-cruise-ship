// reaching into Node's core system and its
// talking to our hard drive
// it takes this:
// /home/richardburd/Desktop/dev/just-add-marmite/scripts/migration.js
// and migrates it
const path = require("path");

require("dotenv").config();

const { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } = process.env;

const { runMigration } = require("contentful-migration");
const options = {
  filePath: path.join(__dirname, "migration.js"),
  spaceId: CONTENTFUL_SPACE_ID,

  // we think this is the token you received when installing the Contentful CLI
  accessToken: CONTENTFUL_ACCESS_TOKEN,
};
runMigration(options)
  .then(() => console.log("Migration Done!"))
  .catch((e) => console.error(e));
