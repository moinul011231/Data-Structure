class Queue{
    constructor()
    {
        this.data = [];
    }

    add(record)
    {
        this.data.unshift(record);
    }

    remove()
    {
        this.data.pop();
    }

    addLastElement(data)
    {
        this.data.push(data);
    }
}   

let queue = new Queue();
queue.add(1);
queue.add(2);
queue.add(3);
queue.addLastElement(1);

console.log(queue.data);
    
