/**
 * Fichier de base pour application web HTML/CSS/JS
 * @author  Michaël Demars
 * @version 0.2
 * @since   2022-08-23
 */

(function main() {
  'use strict'; // Demande un interprétation stricte du code

  let celsius = Number(prompt("Température en celsius: "));
  if (isNaN(celsius))
    alert(`${celsius}°C = ${celsius*9/5+32}°F`);
  else
    alert('Ce n\'est pas un nombre!');

}()); // Main IIFE

