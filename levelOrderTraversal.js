/**
 * Leet Code #102
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    let q = [root]
    let visited = []

    while (q.length > 0) {
        let curr = q.shift()
        if (!visited.includes(curr)) {
            visited.push([curr.val])
        }
        if (curr.left) {
            q.push(curr.left)
        }

        if (curr.right) {
            q.push(curr.right)
        }
    }

    return visited
    
};