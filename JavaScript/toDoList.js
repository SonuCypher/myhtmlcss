let input = prompt('what would you like to do?')
const todos = ['kill chicken', 'shoot the dog']
while (input !== 'quit' && input !== 'q') {

    if (input === 'list') {
        console.log('*************************')
        for (let i = 0; i < todos.length; i++) {
            console.log(i + " " + todos[i])
            console.log('************************')
        }


    }
    else if (input === 'new') {
        const newTodo = prompt('Okay, what is the new Todo')
        todos.push(newTodo)
        console.log('added ' + newTodo + ' to the list')
    }
    else if (input === 'delete') {
        const index = parseInt(prompt('enter the index to delete'))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            console.log('ok,deleted ' + deleted[0])
        }
    } else {
        console.log('Unknown index')
    }
    input = prompt('what would you like to do')
}
console.log('ok quit. you wuss')   