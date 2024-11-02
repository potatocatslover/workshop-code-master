// Step 0 - Define functions for later, as we need to create them before running them
// Step 0.1 - Function for later, for when we want to create a row and reuse for each todo
function stworzMiDiva(todoItem, i) {
    // step 9 - create the row and columns in memory. Not in HTML yet.
    const new_tr = document.createElement('tr');
    const tdSkonczone = document.createElement('td');
    const tdindex = document.createElement('td');
    const czySkonczone = document.createElement('td');
    const buttoncolumn = document.createElement('td');
    const button = document.createElement('button');

    // step 10 - add "skonczone" action to button
    button.addEventListener("click", function kliknieto(e) {
        // step 11 - mark task as done
        listaTodo[i].czySkonczone = true;
        console.log("skonczone");
        // step 12 - update tbale with task as done
        refreshTable();
    })

    // step 13 - add task's name to the name column
    tdSkonczone.innerText = todoItem.tresc;
    // step 14 - add index to index column
    tdindex.innerText = i;
    console.log(tdindex.innerText);
    // step 15 - add either "TAK" or "NIE" to Skończone column, depending on 
    //   the task's 'czySkonczone'
    if (todoItem.czySkonczone){
        czySkonczone.innerText = "TAK :)";
    }
    else {
        czySkonczone.innerText = "NIE :(";
    }
    // step 16 -  Add text to button
    button.innerText = "Zrobione!";

    // step 17 - add rows to HTML table
    new_tr.appendChild(tdindex);
    new_tr.appendChild(tdSkonczone);
    new_tr.appendChild(czySkonczone);
    new_tr.appendChild(buttoncolumn);
    buttoncolumn.appendChild(button);

    // step 17 - return our new row to step 9's const tr
    return new_tr;
}

function refreshTable() {
    // step 6 - get table from html, so we can change it
    const tableListItems = document.getElementById("tableListItems");
    // step 7 - clear table, so we have a clean slate every time
    tableListItems.innerHTML = "";

    // step 8 - For each todo already in memory... add to the table
    for (let i = 0; i < listaTodo.length; i++) {
        const todoItem = listaTodo[i];
        // step 9 - Create a row via stworzMiDiva function. 
        // Give the function the todo, and the index where it lives, so we can update it later
        const tr = stworzMiDiva(todoItem, i);
        // step 18 - add our row to the HTML table
        tableListItems.appendChild(tr);
    }
}

function setUp(){
    // step3 - load data into table
    refreshTable();

    // Step 4 - Add listener to dodaj, to add new item
    const dodaj = document.getElementById("dodaj");
    dodaj.addEventListener("click", function kliknieto(e) {
        // When button is pressed, get new task from textbox
        const inputtext = document.getElementById("inputtext");
        const newline = inputtext.value;

        // Add to listaTodo
        listaTodo.push({ tresc: newline, czySkonczone: false })
        inputtext.value ="";

        // step 5 - Now we have a new item, refresh the table
        refreshTable();
    })
}

// step 1 define items in memory
const listaTodo = [
    { tresc: 'Kupić mleko', czySkonczone: false },
    { tresc: 'Powiesić pranie', czySkonczone: true },
    { tresc: 'Ugotować obiad', czySkonczone: false },
    { tresc: 'Wysłać pocztę', czySkonczone: false },
    { tresc: 'Zrobić zakupy', czySkonczone: false },
];

// step 2 - refresh table first time, and setup dodaj button
setUp();

