let hasCycle = function (head) {
  // edge-case
  if (head == null) {
    return false;
  }
  // create new set to track nodes seen
  let nodesSeen = new Set();
  // while not at the end of the linked list
  while (head.next !== null) {
    // if see same node twice
    if (nodesSeen.has(head)) {
      return true;
    } else {
      // log node seen
      nodesSeen.add(head);
      // step to the next nide
      head = head.next;
    }
  }
  // return false [current state: end of list and haven't seen repeat node]
  return false;
};
