/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Steve Fallet
 * @version 0.1
 * @since   2019-08-19
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  let celsius = Number(prompt("Température en celsius: "));
  if (isNaN(celsius))
    alert(`${celsius}°C = ${celsius*9/5+32}°F`);
  else
    alert('Ce n\'est pas un nombre!');

}()); // Main IIFE

