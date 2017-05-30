/**
 * Created by Ebisu on 5/30/2017.
 */

'use strict';
var expect = require('chai').expect;
var app = require('../app/kamienpapiernozyce.js');

describe('calculateDiscount', function ()
{
    it('should return false', function ()
    {
        expect(app.kamienPapierNozyce("kamien", "papier")).to.eql("gracz2");
    });

});
