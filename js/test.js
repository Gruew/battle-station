'use strict';

function Parser(action) {
    this.action = action;
    this.emailExpression = /^[0-9a-zA-Z._]+@[0-9a-zA-Z]+.[a-zA-Z]{2,4}$/;
    this.nameExpression = /^[A-Z][a-z]+ [A-Z][a-z]/;
    this.urlExpression = /^https?:\/\/www.+\w.\w{2,4}/;
    this.localUrlExpression = /^(https?:\/\/)?localhost:?\d?/;

    this.emails = [
        'flyby.1226@gmail.com',
        'acgreen1226@gmail.com',
        'agreen@sugarcrm.com',
        'andre1226.dev@gmail.com',
        'andre@velo-labs.com',
        'andre@gruew.com',
        'andre@hothouselabs.com',
        'andre@stitchapp.com',
        'andre@lotusflare.com'
    ];

    this.names = [
        'Andre',
        'Laura lawson',
        'Harper Green',
        'Monty Matlock',
        'Buster Green',
        'Wookie Evil',
        'Tippie Toe',
        'Chipper Roo'
    ];

    //this.names = [
    //    'Andre',
    //    'Laura',
    //    'Harper',
    //    'Monty',
    //    'Buster',
    //    'Wookie',
    //    'Tippie',
    //    'Chipper',
    //    'Henrietta'
    //];

    this.urls = [
        'https://www.google.com',
        'http://www.yahoo.com',
        'http://localhost:9000/gruew',
        'http://localhost:9000/gruew/users/34',
        'localhost/sugarcrm',
        'localhost:9000/gruew'
    ];
}

Parser.prototype.parse = function() {
    console.log('parsing');
    _.each(this.emails, function(email) {
        console.log('parsing:', email);
        if (this.expression.test(email)) {
            console.log(email, 'contains:', this.expression);
        } else {
            console.log(email, 'does not contain:', this.expression);
        }
    }, this);
};

Parser.prototype.checkFormat = function() {
    var collection;
    var expressions;

    try {
        if (this.action === 'emails') {
            collection = this.emails;
            expressions = [this.emailExpression];
        } else if (this.action === 'names') {
            collection = this.names;
            expressions = [this.nameExpression];
        } else if (this.action === 'urls') {
            collection = this.urls;
            expressions = [this.urlExpression, this.localUrlExpression];
        } else {
            throw {
                name: 'Invalid argument error',
                message: 'Must use one of these arguments: emails, names, urls'
            }
        }
    } catch(exception) {
        console.log(exception.name, exception.message);
        return;
    }



    _.each(collection, function (entry) {
        var matches = false;
        _.each(expressions, function(expression){
            var match = expression.exec(entry);
            if (match) {
                console.log(entry, 'MATCHES:', match, 'for expression:', expression);
            } else {
                console.log(entry, ' DOES NOT MATCH', expression);
            }
        }, this);
    }, this);
};

var parser = new Parser('urls');
parser.checkFormat();
