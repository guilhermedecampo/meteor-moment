Package.describe({
  summary: "Moment.js, a JavaScript date library for parsing, validating, manipulating, and formatting dates, packaged for Meteor. See http://momentjs.com.",
  version: "2.6.0",
  git: "https://github.com/acreeger/meteor-moment.git"
});

Package.on_use(function (api, where) {
  api.export('moment', where);

  where = where || ['client', 'server'];
  api.add_files('lib/moment/moment.js', where);
  api.add_files('export-moment.js', where);
});
