let canvas = document.getElementById("my-canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d')

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.strokeStyle = "white";
    c.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    c.stroke()
  }

  this.update = function () {
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      (this.dx = -this.dx)
    }

    if(this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      (this.dy = -this.dy)
    }  
    this.y += this.dy
    this.x += this.dx

    this.draw();
  }

}

let circleArray = [];

for (i = 0; i < 20; i++) {
  let radius = 50;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = (Math.random() - 0.5) * 6;
  let dy = (Math.random() - 0.5) * 6;
  circleArray.push(new Circle(x, y, dx, dy, radius))
}

const animate = () => {
  requestAnimationFrame(animate)    

  c.clearRect(0, 0, innerWidth, innerHeight) 

  for (i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}
  animate()












  // }

  

    // Conditional, if x is greater than innerWidth
    

    // // Conditional, if x is greater than innerWidth
    // if(y + radius > innerWidth || y - radius < 0) {
    //   dy = -dy
    // }





// let i = 0;
//   animate {
//     i+1;
//     )
//   } while (i < 25);

// const twentyfiveCircles = (repeat) => {
//   let repeat = 0

//   for (i = 0; i < 25; i++) {
//     animate()    
//   }
  
//   return repeat
// }

// animate(twentyfiveCircles)




// define the canvas
// let canvas = document.getElementById("my-canvas")
// console.log(canvas)

// adjust the canvas
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// capture the drawing context in a variable
// const c = canvas.getContext('2d')

// TODO follow the instructions in the Canvas Pt. 2 Pre-Lesson to see how to build this project

// let x = 500;
// let y = 500;
// let dx = 8;
// let dy = 8;
// let radius = 100;

// const animate = () => {
  // const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]
        
  // const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1
  // use this special Window method to refresh the Window and call `animate` again, and again, and again...
  // requestAnimationFrame(animate)
  // c.clearRect(0, 0, innerWidth, innerHeight)
  // c.beginPath();
  // c.strokeStyle = colors[randomIndex];
  // c.arc(x, y, radius, 0, 2 * Math.PI);
  // c.stroke();

  

    // Conditional, if x is greater than innerWidth
    // if(x + radius > innerWidth || x - radius < 0) {
    //   (dx = -dx)
    // }

    // if(y + radius > innerHeight || y - radius < 0) {
    //   (dy = -dy)
    // }

    // // Conditional, if x is greater than innerWidth
    // if(y + radius > innerWidth || y - radius < 0) {
    //   dy = -dy
    // }  
  // y += dy
  // x += dx
// }

// animate()






  // const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]
        
  // const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1






// Code to draw new circles on a click of the window
// *************************************************

// window.onclick = () => {
//   for(let i=0; i < 50; i++ ) {
//     const x = Math.random() * (window.innerWidth - 100)
//     const y = Math.random() * (window.innerHeight - 100)
//     // the first value will be null to accommodate for no 0 number being drawn
//     const colors = [null, "#8C0C3C", "#1B2968", "#4B9C2B", "#A4C89C", "#F8605F", "#F8B493", "#32B9B2", "#F85532", "#C2C8E4", "#357153", "#A061D4", "#404462"]
//     const randomIndex = Math.floor(Math.random() * (13 - 1)) + 1;

//     // Draw Circle
//     c.beginPath();
//     // replace "black" with the random color selected from the list
//     c.strokeStyle = colors[randomIndex];
//     c.arc(x, y, 50, 0, 2 * Math.PI);
//     c.stroke();
//   }
// }