var V = 5;
var parent = Array(V).fill(0);
var INF = 1000000000;
 
// Find set of vertex i
function find(i)
{
    while (parent[i] != i)
        i = parent[i];
    return i;
}
 
// Does union of i and j. It returns
// false if i and j are already in same
// set.
function union1(i, j)
{
    var a = find(i);
    var b = find(j);
    parent[a] = b;
}
 
// Finds MST using Kruskal's algorithm
function kruskalMST(cost)
{
    var mincost = 0; // Cost of min MST.
 
    // Initialize sets of disjoint sets.
    for (var i = 0; i < V; i++)
        parent[i] = i;
 
    // Include minimum weight edges one by one
    var edge_count = 0;
    while (edge_count < V - 1)
    {
        var min = INF, a = -1, b = -1;
        for (var i = 0; i < V; i++)
        {
            for (var j = 0; j < V; j++) 
            {
                if (find(i) != find(j) && cost[i][j] < min) 
                {
                    min = cost[i][j];
                    a = i;
                    b = j;
                }
            }
        }
 
        union1(a, b);
        document.write(`Edge ${edge_count++}:(${a}, 
        ${b}) cost:${min} <br>`);
        mincost += min;
    }
    document.write(`<br> Minimum cost= ${mincost} <br>`);
}
 
// Driver code
 
/* Let us create the following graph
        2 3
    (0)--(1)--(2)
    | / \ |
    6| 8/ \5 |7
    | /     \ |
    (3)-------(4)
            9         */
var cost = [
    [INF, 2, INF, 6, INF],
    [2, INF, 3, 8, 5],
    [INF, 3, INF, INF, 7],
    [6, 8, INF, INF, 9],
    [INF, 5, 7, 9, INF]];
// Print the solution
kruskalMST(cost);
 
