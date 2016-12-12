"use strict"; 
const express = require('express');

const seneca = require('seneca')();
const app = express();

seneca.add('role:api,cmd:getData', getData);

seneca.act('role:web',{use:{
    prefix: '/api',
    pin: {role:'api',cmd:'*'},
    map:{
        getData: {GET:true}          // explicitly accepting GETs
    }
 }});

 app.use(seneca.export('web'));

 app.listen(3002, function () {
     console.log('listening on port 3002');
 });

function getData(arg, done){
    done(null, {foo: 'bar'});
}

// 