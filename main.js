// set up margins

var margin = {top: 20, right: 20, bottom: 40, left: 50};
var width = 960 - margin.right - margin.left;
var height = 500 - margin.top - margin.bottom;

// set up scales 'X' scales

var xValue = function(d){
	return d.played;
}

var xScale = d3.scale.linear()
	.range([0, width])

var xMap = function(d){
	return xScale(xValue(d))
}

var xAxis = d3.svg.axis()
	.scale(xScale)
	.orient('bottom')

// set up scales 'Y' scales

var yValue = function(d){
	return d['win'];
}

var yScale = d3.scale.linear()
	.range([height, 0])

var yMap = function(d){
	return yScale(yValue(d))
}

var yAxis = d3.svg.axis()
	.scale(yScale)
	.orient('left')

// set up color

// draw canvas

var svg = d3.select('body').append('svg')
	.attr('width', width +  margin.left + margin.right)
	.attr('height', height + margin.top + margin.bottom)
	.style('background', '#f4f4f4')
	.attr('transform', 'translate('+ margin.left +','+ margin.top +')')

d3.csv('data.csv', function(error, data){
	// format to numbers
	data.forEach(function(d){
		console.log(d);
		d.win = +d.win;
		d.played = +d.played;
	})
})











































// var data = [[40, 7], [40,32], [155, 42], [155,106]];
   
//     var margin = {top: 20, right: 15, bottom: 60, left: 60}
//       , width = 960 - margin.left - margin.right
//       , height = 500 - margin.top - margin.bottom;
    
//     var x = d3.scale.linear()
//               .domain([0, d3.max(data, function(d) { 
//               	return d[0]; })])
//               .range([ 0, width ]);
    
//     var y = d3.scale.linear()
//     	      .domain([0, d3.max(data, function(d) { 
//     	      	return d[1]; })])
//     	      .range([ height, 0 ]);
 
//     var chart = d3.select('body')
// 	.append('svg:svg')
// 	.attr('width', width + margin.right + margin.left)
// 	.attr('height', height + margin.top + margin.bottom)
// 	.attr('class', 'chart')

//     var main = chart.append('g')
// 	.attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
// 	.attr('width', width)
// 	.attr('height', height)
// 	.attr('class', 'main')   
        
//     // draw the x axis
//     var xAxis = d3.svg.axis()
// 	.scale(x)
// 	.orient('bottom');

//     main.append('g')
// 	.attr('transform', 'translate(0,' + height + ')')
// 	.attr('class', 'main axis date')
// 	.call(xAxis);

//     // draw the y axis
//     var yAxis = d3.svg.axis()
// 	.scale(y)
// 	.orient('left');

//     main.append('g')
// 	.attr('transform', 'translate(0,0)')
// 	.attr('class', 'main axis date')
// 	.call(yAxis);

//     var g = main.append("svg:g"); 
    
//     g.selectAll("scatter-dots")
//       .data(data)
//       .enter().append("svg:circle")
//           .attr("cx", function (d,i) { 
//           	return x(d[0]); 
//           })
//           .attr("cy", function (d) { 
//           	return y(d[1]); 
//           })
//           .attr("r", 8);












