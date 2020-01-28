class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev
  }
}
class Stack {
  constructor() {
    this.head = null;
    this.current = null;
  }

  PushToList(){
    let res = document.getElementById('res');
    let data = document.getElementById('inpt').value;
    if(!this.head){
      this.head = this.current = new Node(data);
    }else{
      let tmp = this.head;
      this.head = new Node(data,null,tmp);
      tmp.next = this.head;
    }
    res.innerHTML = this.head.data;
    }



       PopFromList()
   {
      if (this.head && this.head === this.current) {
            this.current = this.head.prev;
        }
        if (this.head && this.head.prev) {
            this.head = this.head.prev;
            this.head.next = null;
        } else {
            this.head = this.current = null;
            res.innerHTML = "Empty Stack!!!!!";
    
        }
 

       
   }




    up(){
      if(this.current && this.current.next){
      this.current = this.current.next;
    }
  }
    down(){
      if(this.current && this.current.prev){
      this.current = this.current.prev;
    }
  }
  showCurrent() {
    if (this.current)
    res.innerHTML = this.current.data;
        
  }
  
}
let stack = new Stack();

function PushToList(){
  stack.PushToList();
  stack.showCurrent();
}

function PopFromList(){
  stack.PopFromList();
  stack.showCurrent();

}

function up(){
  stack.up();
  stack.showCurrent();

}

function down(){
  stack.down();
  stack.showCurrent();

}
