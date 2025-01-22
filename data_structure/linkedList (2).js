class Node {
    constructor(val) {
        this.data=val;
        this.next=null;
    }

}


class Linkedlist{
    constructor(){
        this.head=null;
        this.size=0;
    }

    printlist(){
        let x=0;
        while(this.head!==null){
            x++;
            console.log(x+"- "+this.head.data);
            this.head=this.head.next;
        }
        console.log("This linked list has "+this.size+" nodes.");
    }

    add(data){
        let node=new Node(data);
        let current=0;

        if(this.head===null){
            this.head=node;
        }else{
            current=this.head;

            while(current.next){
                current=current.next;
            }

            current.next=node;

        }

        this.size++;
    }

    insertAsyouLike(data,index){
        let node=new Node(data);

        if(index<0 || index>this.size){
            return console.log("You cannot make insertion in this place.");

        }else if(index===0){

            node.next=this.head;
            this.head=node;

        }else{
            let temp=this.head;
            let i=0;

            while(i<index-1){
                // previous=temp;  -for alternative way by declaring previous variable
                temp=temp.next;
                i++;
            }

            node.next=temp.next;
            temp.next=node;

        }
        this.size++;
    }
}


let linkedlist=new Linkedlist();

linkedlist.add(25);
linkedlist.add(35);
linkedlist.add(45);
linkedlist.add(50);



linkedlist.insertAsyouLike(20,0);

linkedlist.printlist();