// Generate hour selector content
function intToHour(hourNum)
{
    return `${hourNum % 12 + 1} ${hourNum < 12 ? "A.M" : "P.M"}`;
}

function decToHex(val)
{
    
    if(val === 0)
    {
        return '0';
    }

    let output = "";
    while(val > 0)
    {
        let remainder = val % 16;

        if(remainder < 10)
        {
            output = remainder.toString() + output;
        }
        else
        {
            output = String.fromCharCode(87 + remainder) + output;
        }

        val = Math.floor(val / 16);
    }
    return output;
}

function colorCode(r, g, b, a=255)
{
    return '#' + decToHex(r) + decToHex(g) + decToHex(b) + decToHex(a);
}


let scheduleEntries = Array(96);
for(let i = 0; i < 96; i++)
{
    let boolRow = Array(7).fill(false);
    scheduleEntries[i] = boolRow;
}

let table = document.querySelector("table.schedule");
table.setAttribute("draggable", "false");


function generateSchedule(startHour, endHour)
{
    startHour = Number(startHour);
    endHour = Number(endHour);
    
    // Generate table
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    while(table.firstChild)
    {
        table.removeChild(table.firstChild);
    }

    // Generate colgroup
    let colGroup = document.createElement("colgroup");
    colGroup.appendChild(document.createElement("col"));
    for(let i = 0; i < 7; i++)
    {
        let column = document.createElement("col");
        column.setAttribute("background-color", i % 2 == 0 ? "gray" : "lightgray");
        colGroup.appendChild(column);
    }

    // Generate header row of days
    let thead = document.createElement("thead");
    let topRow = document.createElement("tr");
    topRow.appendChild(document.createElement("th"));
    for(let day of days)
    {
        let dayCell = document.createElement("th");
        dayCell.textContent = day;
        topRow.appendChild(dayCell);
    }
    thead.appendChild(topRow);

    // Generate bulk of schedule table
    let tbody = document.createElement("tbody");
    for(let i = startHour; i <= endHour; i++)
    {
        // Create hour row header
        let tRow = document.createElement("tr");
        let hourHeader = document.createElement("th");
        hourHeader.setAttribute("rowspan", 4);
        hourHeader.textContent = intToHour(i);
        tRow.appendChild(hourHeader);
        
    
        // Generate 4 sub-rows for 15-minute blocks
        for(let j = 0; j < 4; j++)
        {
            if(j !== 0)
            {
                tRow = document.createElement("tr");
            }

            for(let k = 0; k < 7; k++)
            {
                let cell = document.createElement("td");
                cell.setAttribute("draggable", "false");
                cell.row = i * 4 + j;
                cell.column = k;
                cell.addEventListener('dragstart', (e) => { e.preventDefault() });
                cell.onclick = cellClick;

                if(scheduleEntries[i * 4 + j][k])
                {
                    cell.setAttribute("class", "selected");
                }

                tRow.appendChild(cell);
            }
            tbody.appendChild(tRow);
        }
    }

    // Add elements to table
    table.appendChild(colGroup);
    table.appendChild(thead);
    table.appendChild(tbody);
}



let startSelector = document.querySelector("select.start-hour-select");
let endSelector = document.querySelector("select.end-hour-select");
let startHour = 8;
let endHour = 16;

function populateHours()
{
    while(startSelector.firstChild)
    {
        startSelector.removeChild(startSelector.firstChild);
    }

    while(endSelector.firstChild)
    {
        endSelector.removeChild(endSelector.firstChild);
    }

    for(let i = 0; i < Number(endHour); i++)
    {
        let hour = document.createElement("option");
        hour.setAttribute("value", i.toString());
        hour.textContent = intToHour(i);
        startSelector.appendChild(hour);
    }

    for(let i = Number(startHour) + 1; i < 24; i++)
    {
        let hour = document.createElement("option");
        hour.setAttribute("value", i.toString());
        hour.textContent = intToHour(i);
        endSelector.appendChild(hour);
    }
    
    startSelector.value = startHour;
    endSelector.value = endHour;
}





let startClick = true;
let startCell;

function cellClick()
{
    console.log(startClick ? "start" : "end");

    if(startClick)
    {
        startCell = this;
        if(!scheduleEntries[startCell.row][startCell.column])
            startCell.setAttribute("class", "selected");
        else
            startCell.removeAttribute("class");
    }
    else if(startCell.column === this.column)
    {
        startCell.removeAttribute("class");

        // Select Set of rows to toggle
        let rows = table.querySelector("tbody").childNodes;

        // Set variables according to click order
        let startRow = Math.min(startCell.row, this.row);
        let endRow = Math.max(startCell.row, this.row);
        

        for(let i = startRow; i <= endRow; i++)
        {
            scheduleEntries[i][startCell.column] = !scheduleEntries[i][startCell.column];

            // Array of td elements
            let cells = rows[i - startHour * 4].childNodes;

            let selectedCol = i % 4 !== 0 ? startCell.column : startCell.column + 1;
            let cell = cells[selectedCol];

            if(scheduleEntries[i][startCell.column])
                cell.setAttribute("class", "selected");
            else
                cell.removeAttribute("class");
        }
    }
    else
    {
        console.log("Clicked outside of selected column");
        startCell.removeAttribute("class");
    }
    startClick = !startClick;
}


generateSchedule(startHour, endHour);
populateHours();

startSelector.addEventListener('change', () => { startHour = startSelector.value; populateHours(); generateSchedule(startHour, endHour);});
endSelector.addEventListener('change', () => { endHour = endSelector.value; populateHours(); generateSchedule(startHour, endHour); });


function toggleEdit()
{
    this.editToggle = !this.editToggle;
    this.textContent = this.editToggle ? "Finalize Schedule" : "Edit Schedule";

    if(!this.editToggle)
    {
        startSelector.setAttribute("disabled", true);
        endSelector.setAttribute("disabled", true);
        table.style.display = "none";
    }
    else
    {
        startSelector.removeAttribute("disabled");
        endSelector.removeAttribute("disabled");
        table.style.display = "revert";
    }
}

let editButton = document.querySelector("button.edit");
editButton.editToggle = true;
editButton.textContent = "Finalize Schedule";

editButton.addEventListener("click", toggleEdit);



