class Node{
    constructor(data)
    {
        this.data=data;
        this.next=null;
    }
}
class LinkedList
{
    constructor(data)
    {
        this.head=null;
    }
    insertBeg(data)
    {
    const newNode=new Node(data);
    newNode.next=this.head;
    this.head=newNode;
    }
    insertEnd(data)
    {
        const newNode= new Node(data);
        if(!this.head)
        {
            this.head=newNode;
            return;
        }
        let current=this.head;
        while(current.next)
        {
            current=current.next;
        }
        current.next=newNode;
    }
    delete()
    {
        if(!this.head)
        {
            return null;
        }
        const deleted=this.head.data;
        this.head=this.head.next;
        return deleted;

    }
    deleteEnd()
    {
        if(!this.head)
        {
            return null;
        }
        if(!this.head.next)
        {
            const deleted=this.head.data;
            this.head=null;
            return deleted;
        }
        let current=this.head;
        while(current.next.next)
        {
            current=current.next;
        }
        const deleted=current.next.data;
        current.next=null;
        return deleted;
    }
    travarse()
    {
        let current=this.head;
        let result="";
        while(current)
        {
            result +=current.data+"->";
            current=current.next;
        }
        console.log(result+"null");
    }
    
}
let list=new LinkedList();
list.insertBeg(10);
list.insertEnd(20);
list.insertEnd(30);
list.travarse();
list.delete();
list.travarse();
list.deleteEnd();
list.travarse();