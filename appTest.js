const fs = require("fs")
const yargs = require("yargs")
const chalk = require("chalk")

function loadData(){
    const buffer = fs.readFileSync("./data/database.json")
    const data = buffer.toString()
    return JSON.parse(data)
}
function saveData(toDo){
    let data = loadData();
    data.push(toDo)
}
function addToDo(toDoBody,toDoStatus){
    let todos = loadData();
    let newId;

    if(todos.length === 0){

    }
}
yargs.commandDir({
    command:"add",
    describe:"add to do",
    builder:{
        id:{
            describe:"describe of to do",
            demandOption:false,
            
        },
        todo:{

        },
        status:{

        },
    }
})