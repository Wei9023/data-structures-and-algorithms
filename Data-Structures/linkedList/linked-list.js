'use strict';

/**
 * Define class node
 */
class Node {
    //constructor
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
/**
 * Linkedlist class
 */
class LinkedList {

    constructor() {
        this.head = null;
        this.size =0;
    }

    // functions to be implemented 
    /**
     * insert(element)
     * @param {*} element 
     */
    insert(...element){
        // let eles = [...element]
        element.forEach((ele)=>{
            // console.log(element);
            let node = new Node(ele);
            // console.log(node);
            let current = this.head;
            // console.log(current);
            node.next = current;
            this.head = node;
            // console.log(this.head);
            this.size ++;
        });
    }
    
    /**
     * includes(value)
     * @param {*} element 
     */
    includes(element){
        let current = this.head;

        //iterate over the list
        while (current !== null) {
            //comparing element with current element if found then return ture
            if (current.element === element) {
                return true;
            }
            return false;
        }
    }

    /**
     * print the list
     */
    printList(){
        let current = this.head;
        let str = '';
        while (current !== null) {
            str += (current.element + ' ');
            current = current.next;
            console.log(str);
        }
        return str;
    }

    append(...element){
        element.forEach(ele => {
            let node = new Node(ele);
            let current = this.head;

            if(current ===null || current.element === null){
                this.head = node;
            }else{
                while(current!== null){
                    if(current.next === null){
                        current.next = node;
                        break;
                    }
                    current = current.next;
                }
            }
        })
    }

    insertBefore(value, newValue){
        let node = new Node(newValue);
        let current = this.head;        
        let previous = null;

        while(current !== null){        
            
            previous = current; 
            current = previous.next; 

            if(current.element === value){
                previous.next = node;
                node.next = current; 
                break; 
            }

        }
    }

    insertBefore(value, newValue){
        let node = new Node(newValue);
        let current = this.head;        

        while(current !== null){        
            if(current.element === value){
                node.next = current.next;
                current.next = node; 
                break; 
            }
            current = current.next; 

        }
    }
}

module.exports = {LinkedList};