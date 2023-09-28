const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING = "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = "0";

const customers = 1;
let country = "RSA";
let currency = null;
let shipping = null;

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;
const total = shoes + batteries + pens + shirts

if (country === "RSA") {
    currency = "R";
    shipping = 400
}
    else if (country === "NAM") {
        currency = "$";
        shipping = 600
    } 
    else { 
        shipping = 800
    }

if (country === "North Korea") {
    console.log(BANNED_WARNING)
} 

if (country === "RSA" && total >= 1000) {
        shipping = 0;
      }
      else if (country === "NAM" && total >= 60) {
        shipping = 0
      } 
      else if (shipping >= 0 && customers !== 1 && country === "RSA" || country === "NAM"); { 
        console.log(FREE_WARNING) }
