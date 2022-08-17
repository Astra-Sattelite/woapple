export const range = (max: number) => [...Array((max + 1)).keys()].slice(1)

// const mybutton = document.getElementById("myBtn")!;

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// When the user clicks on the button, scroll to the top of the document
export const scrollR = (n: number, elemId: string) => {
  const elem = document.getElementById(elemId)!
  // document.body.scrollTop = 0;
  elem.scrollLeft = elem.scrollLeft + n;
}