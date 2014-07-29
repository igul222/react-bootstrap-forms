var test = require('tap').test,
    react\-bootstrap\-forms = require(__dirname + '/../../lib/index.js');

react\-bootstrap\-forms(function (err) {
    test('unit', function (t) {
        t.equal(err, null, 'error object is null');
        t.end();
    });
});