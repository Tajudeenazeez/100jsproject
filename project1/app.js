//project 0ne
// (function () {
//     const body = document.querySelector("body")
//     const button = document.querySelector("#click")
//     const color = ['red', 'blue', 'green', 'tomato', 'yellow', 'purple', 'black', 'grey', 'brown', 'white']

//     button.addEventListener("click", changeColorHandler)

//     function changeColorHandler (event) {
//         body.style.backgroundColor = color[Math.floor(Math.random() * color.length)]
//         button.style.color = color[Math.floor(Math.random() * color.length)]  
//     }

// }())
// Set Dimensions

// d3.select("body").append("p").text("Hello World!");

const xSize = 500;
const ySize = 500;
const margin = 40;
const xMax = xSize - margin*2;
const yMax = ySize - margin*2;

// Create Random Points
const numPoints = 100;
const data = [];
for (let i = 0; i < numPoints; i++) {
  data.push([Math.random() * xMax, Math.random() * yMax]);
}

// Append SVG Object to the Page
const svg = d3.select("#myPlot")
  .append("svg")
  .append("g")
  .attr("transform","translate(" + margin + "," + margin + ")");

// X Axis
const x = d3.scaleLinear()
  .domain([0, 500])
  .range([0, xMax]);

svg.append("g")
  .attr("transform", "translate(0," + yMax + ")")
  .call(d3.axisBottom(x));

// Y Axis
const y = d3.scaleLinear()
  .domain([0, 500])
  .range([ yMax, 0]);

svg.append("g")
  .call(d3.axisLeft(y));

// Dots
svg.append('g')
  .selectAll("dot")
  .data(data).enter()
  .append("circle")
  .attr("cx", function (d) { return d[0] } )
  .attr("cy", function (d) { return d[1] } )
  .attr("r", 3)
  .style("fill", "Red");

  //tranisition
  d3.select("body").transition()
  .style("background-color", "blue");

    // Update…
var p = d3.select("body")
.selectAll("p")
.data([14, 18, 25, 36, 43, 52])
  .text(function(d) { return d; })
  .style('font-size', function(d) { return d + 'px'; })
  .style('color', function(_, i) { return i % 2 ? "#4b2": "#2bf29b"; });


// Enter…
p.enter().append("p")
  .text(function(d) { return d; })
  .style('font-size', function(d) { return d + 'px'; })
  .style('color', function(_, i) { return i % 2 ? "#4be": "#29f2ee"; });

// Exit…
p.exit().remove();
