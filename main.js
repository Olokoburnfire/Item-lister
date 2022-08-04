const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter')

//Form submit event

form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click', removeItem )


//Filter event
filter.addEventListener('keyup', filterItems)

//Add Items
function addItem(e) {
    e.preventDefault();

    //get inpit value
    const newItem = document.getElementById('item').value;

    //Create New li Element
    let li = document.createElement('li');

    //Add Class
    li.className = 'list-group-item';

    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element

    let deleteBtn = document.createElement('button');

    //add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //append button to li
    li.appendChild(deleteBtn)

    //Append li to list
    itemList.appendChild(li);
}



//Remove Item
function removeItem(e) {
    if (e.target.classList.contains('delete')) {
     if (confirm('Are You Sure?')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
     }   
    }
}

//Filter Items

function filterItems(e) {
    //conver to lowercase
    let text = e.target.value.toLowerCase();

    //Get List
    let items = itemList.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text)!= -1) {
            item.style.display = 'block';
        } else{
            item.style.display = 'none';
        }
    })
}