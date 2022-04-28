// Copyright (c) 2022 Nathan Araujo All rights reserved
//
// Created by: Nathan Araujo
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function sees if you can guess what the computer will generate
 */
function temperature () {

	//declare constants
	const MIN = 15
	
	// get user input
	let temp = parseInt(document.getElementById('temp').value)

  // if the number is equal to the generated number then display Correct
  if (temp <= MIN) {
    document.getElementById("display").innerHTML = "It is cold outside! Stay indoors today!";
  }
		
  // if the number is not equal to the generated number then display Incorrect	
	else {
    document.getElementById("display").innerHTML = "It is warm outside! Go outside have some fun!"
  }
}

