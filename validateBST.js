/**
 * Leetcode #98... CLOSE BUT INCORRECT.   
 * Using Level order traversal
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    let q = [root]
    let visited = []
    
    while (q.length > 0) {
        let curr = q.shift() // remove first in the queue
        
        if(curr) {
            visited.push(curr)
            console.log(curr, curr.val)
        } 
        
        if (curr.left) {
            console.log(curr.left, curr.left.val, "LEFT VALUES")
            if (curr.left.val >= curr.val) {
                console.log("returning false", curr.left.val)
                return false
            }
            
            q.push(curr.left)
        }
        if (curr.right) {
            console.log(curr.right, curr.right.val, "RIGHT VALUES")
            if (curr.right.val <= curr.val) {
                console.log("returning false", curr.right.val)
                return false
            }
            
            q.push(curr.right)
        }
        
    }
    
    return true
    
    
    
};