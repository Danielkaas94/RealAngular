import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-drawing',
  templateUrl: './scroll-drawing.component.html',
  styleUrls: ['./scroll-drawing.component.css']
})
export class ScrollDrawingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.draw(); // https://www.w3schools.com/howto/howto_js_scrolldrawing.asp
  }
  draw(): any {
    // Get the id of the <path> element and the length of <path>
    var triangle = <any>document.getElementById("triangle");
    var length = triangle.getTotalLength();

    // The start position of the drawing
    triangle.style.strokeDasharray = length;

    // Hide the triangle by offsetting dash. Remove this line to show the triangle before scroll draw
    triangle.style.strokeDashoffset = length;

    // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
    window.addEventListener("scroll", myFunction);

    function myFunction() {
      var scrollpercent = (document.body.scrollTop + document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

      var draw = length * scrollpercent;

      // Reverse the drawing (when scrolling upwards)
      triangle.style.strokeDashoffset = length - draw;
    }
  }
}