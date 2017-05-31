'use strict';
var expect = require('chai').expect;
var app = require('../app/kamienpapiernozyce.js');

describe('unit tests', function()
{
    describe('outcomes', function ()
    {
        it('should return remis', function ()
        {
            expect(app.kamienPapierNozyce("kamien", "kamien")).to.eql("remis");
        });
        it('should return gracz2', function ()
        {
            expect(app.kamienPapierNozyce("kamien", "papier")).to.eql("gracz2");
        });
        it('should return gracz1', function ()
        {
            expect(app.kamienPapierNozyce("kamien", "nozyce")).to.eql("gracz1");
        });
        it('should return gracz1', function ()
        {
            expect(app.kamienPapierNozyce("papier", "kamien")).to.eql("gracz1");
        });
        it('should return remis', function ()
        {
            expect(app.kamienPapierNozyce("papier", "papier")).to.eql("remis");
        });
        it('should return gracz2', function ()
        {
            expect(app.kamienPapierNozyce("papier", "nozyce")).to.eql("gracz2");
        });
        it('should return gracz2', function ()
        {
            expect(app.kamienPapierNozyce("nozyce", "kamien")).to.eql("gracz2");
        });
        it('should return gracz1', function ()
        {
            expect(app.kamienPapierNozyce("nozyce", "papier")).to.eql("gracz1");
        });
        it('should return remis', function ()
        {
            expect(app.kamienPapierNozyce("nozyce", "nozyce")).to.eql("remis");
        });

    });

    describe('error cases', function() {
        it('it should return false', function() {
            expect(app.kamienPapierNozyce(42, "nozyce")).to.eql(false);
        })
        it('it should return false', function() {
            expect(app.kamienPapierNozyce("kamien", 3.14)).to.eql(false);
        })
        it('it should return false', function() {
            expect(app.kamienPapierNozyce(42, 34)).to.eql(false);
        })
        it('it should return false', function() {
            expect(app.kamienPapierNozyce("lol", "lmao")).to.eql(false);
        })
        it('it should return false', function() {
            expect(app.kamienPapierNozyce("kamien", "rotfl")).to.eql(false);
        })
        it('it should return false', function() {
            expect(app.kamienPapierNozyce("kamiendsf", "nozyce")).to.eql(false);
        })
    })
})