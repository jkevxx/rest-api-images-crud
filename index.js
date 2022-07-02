//const express = require('express');

import express from 'express'
const app = express();


const PORT = 3000;

app.get('/', (req, res)=>{
  res.send('Hellow World')
})

app.listen(PORT, ()=>{
  console.log("I'm listening in port", PORT);
})
