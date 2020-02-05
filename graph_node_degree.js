// Calculate the degree of a node
// Reference: https://stackoverflow.com/questions/54471028/how-can-i-calculate-the-degree-of-nodes-in-d3-v5 

// Add degree 

d3.selectAll('g.node')
  .each(function(d) {
    d.degree = 0;
  });

// Calculate degree
// Interesting loop
// Each link has a source or target
// d.source.degree singles the source node and add to its degree

links.forEach(function(d){
    d.source.degree += 1;
    d.target.degree += 1;
  });

// Accessor functions to get min & max
var minDegree = d3.min(
  d3.values(nodes), function(d) {
    return d.degree; })

var maxDegree = d3.max(
  d3.values(nodes), function(d) { 
    return d.degree; })

// Create node scale based on degree
var nodescale = d3.scaleSqrt()
  .domain( [minDegree, maxDegree] )
  .range( [3, 15] ); // Change this to your desired range

// Add the node circles
node.append("circle")
    .attr("r", function(d) {
      return nodescale(d.degree);
    })
