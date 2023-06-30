class Stack {
    constructor() {
        this.items = [];
    }

    push(value) {
        this.items.push(value);
        this.implementStack();
    }

    pop() {
        if(this.isEmpty()) {
            return"Underflow";
        }
        const poppedItem = this.items.pop();
        this.implementStack();
        return poppedItem;
    }

    isEmpty() {
        return this.items.length === 0;
    }
    
    clear() {
        this.items = [];
        this.implementStack();
    }

    implementStack() {
        const stackContainer = document.querySelector('.stack-container');
        stackContainer.innerHTML = '';

        for(let i=this.items.length - 1; i>=0; i--) {
            const stackItem = document.createElement('div');
            stackItem.classList.add('stack-item');

            const box = document.createElement('div');
            box.classList.add('box');
            
            const arrow = document.createElement('div');
            arrow.classList.add('arrow');
            
            const value = document.createElement('div');
            value.classList.add('value');
            value.textContent = this.items[i];
            
            stackItem.appendChild(box);
            stackItem.appendChild(arrow);
            stackItem.appendChild(value);

            stackContainer.appendChild(stackItem);
        }
    }
}

const getInputValue = document.getElementById('input-value');
const pushButton = document.getElementById('btn-push');
const popButton = document.getElementById('btn-pop');
const clearButton = document.getElementById('btn-clear');

const stack = new Stack();

pushButton.addEventListener('click', () => {
    const value = getInputValue.value;
    if(value !== '') {
        stack.push(value);
        getInputValue.value = '';
    }
    else {
        alert("Enter a value to push ;)");
    }
});

popButton.addEventListener('click', () => {
    const poppedItem = stack.pop();
    if(poppedItem === 'Underflow') {
        alert("Stack is empty :(");
        afterClearText.innerHTML ="Your stack will appear here..."; 
    }
});

clearButton.addEventListener('click', () => {
    stack.clear();
    const afterClearText = document.querySelector('.stack-container');
    afterClearText.innerHTML ="Your stack will appear here...";
});
