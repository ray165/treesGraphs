// BFS uses a queue for the current things to check
/**
 * BFS is used for:
 *  1. Is there a path from Node A to Node B (is there a mango seller in your network)
 * 2. What is the SHORTEST path from node A to node B (who is the closest mango seller)
 * 
 * 
 * Simply: Check for existence. OR the shortets path
 *  */ 


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function myBFS(tree, rootNode, searchValue) {
    let q = []; // simulated with an array instead of a 'new Queue()'
    q.push(rootNode)
    let searched = [];

    // While not empty
    while (q.length > 0) {
        current_node = q.shift(); //shift removes first item
        // If its not in our already searched list 
        if (!searched.includes(current_node)) {
            if(checkNode(current_node, searchValue)) {
                console.log("You found a match!")
                return true;
            } else {
                // Add all children of the unmatched node
                q.push(tree[current_node])
                searched.push(current_node)

            }

        }
    }
    return false
}

function checkNode(node, value) {
    if (node.val === value) {
        return true
    }
}
