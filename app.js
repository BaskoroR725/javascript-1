let input = prompt("What whould you like to do ?");
const todo =['collect chicken eggs', 'clean litter box'];

while(input !=='quit' && input !== 'q'){
    if (input === 'list'){
        console.log('************')
        for(let i = 0; i < todo.length;i++){
            console.log(`${i} : ${todo[i]}`)
        }
        console.log('************')
    } else if (input === 'new'){
        const newTodo = prompt ('What is the new todo ?');
        todo.push(newTodo);
        console.log(`${newTodo} added to the List`)
    } else if ( input === 'remove'){
        const index = parseInt(prompt('Ok, enter an index to delete'));
        if (!Number.isNaN(index)){
            const removed = todo.splice(index,1);
            console.log(`Ok, removed ${removed[0]}`)
        } else {
            console.log('Unknown Indexs')
        }
    }
    input = prompt("What whould you like to do ?");
}
console.log("Ok You Quit The App")