alert( 6.35.toFixed(20) ); // 6.34999999999999964473
//in this case the number becomes a tiny bit less, that’s why it rounded down.

alert( 1.35.toFixed(20) ); // 1.35000000000000008882
//in this case the number becomes a little bit greater, that’s why it rounded up.

// fixing a problem
alert(Math.round(6.35 * 10)/10);
//6.35->63.5->rounded->64->rounded->6.4

