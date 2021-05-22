// The game starts when user clicks the let's play button
// Deck of cards appears first
// Board apprears 5 secs after
// Assign a number to each image/card
// Generate a random number to select the image to be displayed
// When user clicks an image on the board display a check mark
// When user clicks the loteria button, check if the numbers on the cards dealt match the divs,
// if they match display win message and ask if user wants to keep playing
// if they do not match display error message for 5 secs and continue playing
//
let cardNumber = [];
const div1 = 1;
const div2 = 2;
const div3 = 3;
const div4 = 4;
const div5 = 5;
const div6 = 6;
const div7 = 7;
const div8 = 8;
const div9 = 9;

let cards = [
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/72570/233068/132430-1024__22756.1606987805.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/76143/116275/138790-1024__29093.1564898446.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/104688/240108/163822-1024__36211.1607450439.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/89226/130592/163152-1024__18963.1571637727.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/120455/236974/132415-1024__61899.1607169702.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/129594/278620/132560-1024__15714.1613554268.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/81031/121044/145630-1024__57951.1566460855.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/72298/110353/132403-1024__57286.1552629733.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/72256/110278/132353-1024__35781.1552629616.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/98052/234753/141891-1024__67494.1607099864.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/72364/110560/132449-1024__31532.1552640437.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/113592/183705/139684-1024__27751.1581703264.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/72569/233069/132446-1024__03878.1606987806.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/72463/233073/132342-1024__74751.1606987833.jpg?c=2",
  "https://cdn11.bigcommerce.com/s-nq6l4syi/images/stencil/608x608/products/72305/110451/132358-1024__24793.1552636820.jpg?c=2"
];

let currentCard = 0;

const randomCard = cards[Math.floor(Math.random() * cards.length)];
  console.log(randomCard);
  currentCard = randomCard;
  console.log(currentCard);

//   Random card generator
//   const randomCard = function() {
//     // const dealer = document.getElementById('dealer');
//     //   console.log(dealer);
//     const randomSelection =
// }
//   randomCard();
//
// const game = function() {
//
// }
