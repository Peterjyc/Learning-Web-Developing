function loop_size(node){
  let nodeInLoop = getNodeInLoop(node)
  let pointer = nodeInLoop.next
  let length = 1;
  while (nodeInLoop !== pointer){
    pointer = pointer.next
    length++
  }
  return length
}
  

function getNodeInLoop(node){
  let slow = node
  let fast = node.next;
  while (slow !== fast){
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
