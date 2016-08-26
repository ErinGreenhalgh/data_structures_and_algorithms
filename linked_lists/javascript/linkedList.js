function ListNode(data, node) {
  this.data = data;
  this.nextNode = node || null;
}


function List(){
  this._length = 0;
  this.head = null;
  //length is a prototype method; _ indicates this is a different length method
}

// List.prototype.push(data){
//   this.head = new ListNode(data);
// }
