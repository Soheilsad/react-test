class Queue {
    constructor(initialItems = []) {
        this.items = initialItems;
      }
  
    // Add an element to the back of the queue
    enqueue(element) {
      this.items.push(element);
    }
  
    // Remove and return the element at the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        return 'Queue is empty';
      }
      return this.items.shift();
    }
  
    // View the element at the front of the queue without removing it
    front() {
      if (this.isEmpty()) {
        return 'Queue is empty';
      }
      return this.items[0];
    }
  
    // Check if the queue is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Get the size of the queue
    size() {
      return this.items.length;
    }
  
    // Print the elements of the queue
    print() {
      console.log(this.items.toString());
    }
  }
export default Queue
  