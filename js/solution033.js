//P: hex number given as a string
//R: conversion of hex number to a decimal number
//E: '1' => 1
//   'a' => 10
//   '10' => 16
//   'FF' => 255

function hexToDec(hexString){
  return parseInt(hexString, 16);
}