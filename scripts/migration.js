/// you have to take your content and then put it in
// contentful's special JSON format...
// you cannot just use your existing JSON

const testData = require("./references.json");

module.exports = function (migration, context) {
  console.log(testData);
  migration.deleteContentType("dog");
  const dog = migration.createContentType("dog").name("Dog");
  dog
    .createField("michaelID")
    .name("Michaels Identifier")
    .type("Symbol")
    .required(true);

  dog.createField("title").name("Title").type("Symbol");
  dog.createField("url").name("Url").type("Symbol");
  dog.createField("journal").name("Journal").type("Symbol");
  dog.createField("author").name("Author").type("Symbol");
  dog.createField("date").name("Date").type("Symbol");

  // const references = Object.entries(testData).forEach((reference) => {
  //   const [referenceID, referenceInfo] = reference;
  //   console.log(dog.fieldInstanceIds.getNew());
  //   //dog.field.exists
  //   // dog
  //   //   .createField("michaelID")
  //   //   .name("Michaels Identifier")
  //   //   .type("Symbol")
  //   //   .required(true);

  //   // const fields = Object.keys(referenceInfo).forEach((field) => {
  //   //   dog.createField(field).name(field).type("Symbol");
  //   // });
  // });
};
