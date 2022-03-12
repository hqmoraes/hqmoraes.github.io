const express = require('express');
const { allowedNodeEnvironmentFlags } = require('process');
const app = express();
app.get('/',(req,res)=>{
    res.send('Seja vem vindo - aff');
})





app.listen(3000, e =>{
    console.log('servidor rodando');
});