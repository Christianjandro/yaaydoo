'use strict';

const chai = require('chai');
const expect = chai.expect;
const insert = require('../src/business/saveUser');


describe('Registra 100 usuarios de prueba con información ', function () {

    //fill characters left and right
    function fillchar(character,value,length,side){
      if(side==1){
          return [Array(length+1-value.toString().length).join(character),value].join("");
      }else{
          return [value,Array(length+1-value.toString().length).join(character)].join("");
      }
    }

    Date.prototype.addDays = function(days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
  }

  let rows = 0;

    it('verifies successful response', async () => {

      let dt = new Date();

      for (let index = 0; index < 1; index++) {
        let param = [];
        param.id = 100;
        param.name = "Usuario ejemplo " + index;
        param.email = "usuario" + index + "@ejemplo.com";
        param.address = "Avenida de usuario " + index;
        param.telephone = fillchar("0",index,10,1);
        let dtf = dt.addDays(index * -1);
        param.dateofbirth = dtf.toISOString().replace(/T/, ' ').replace(/\..+/, '');
        param.password = "12" + index;
        
         await insert(param);
         rows++;
      }

      expect(rows).to.equal(100);

    });
});
