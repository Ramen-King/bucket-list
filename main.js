// Global variables ftw


let isStack = true;
const bucketList = [];
const completedBucketList = [];


// Set init to run when the window loads.
window.onload = init;
function init() {

    // Set event handlers.
    document.querySelector('#submit')
        .addEventListener('click', addNewItem)

    document.querySelector('#remove')
        .addEventListener('click', removeItem);

    document.querySelector('#toggle')
        .addEventListener('click', toggleQueueAndStack);
}

function addNewItem(event) {
    // Prevent page reload.
    event.preventDefault()
    
    // Get the value from the input field.
    const newItem = document.querySelector('#new-item').value;

    // Set the input field back to blank.
    resetInput();

    // Add the item to the <ul>.
    

    // Now comes your part: add the item to the list.
    



    // Display it in next-item if it's the first item:
   
    if(newItem !== '') { 
        console.log("before " + bucketList)
        bucketList.push(newItem);
    
        displayItem(newItem);
        console.log(bucketList);
        // definitely change that condition!
    } 
    document.querySelector('#next-item').innerText = 'Oldest ' + bucketList[0]; // Replace that empty string with the actual item!
    
    document.querySelector('#newest-item').innerText = 'Newest ' + newItem; // Replace that empty string with the actual item!

    document.querySelector('#number-of-items').innerText = 'Number of items ' + bucketList.length // Replace that with the number of items!
}

function removeItem(event) {
    // Prevent page reload.
    
    event.preventDefault();
    let newItem = bucketList[bucketList.length - 2];
    console.log(newItem);
    // document.querySelector('#newest-item').innerText = 'Newest ' + newItem;
    if(isStack) {
        completedBucketList.push(bucketList.pop());
        console.log(bucketList);
        console.log(completedBucketList);
        console.log(newItem)
        if (bucketList.length === 0) {
            newItem = 'Live a Little';  
            
        }
        removeLastFromPage();
        
        // Your code to remove it from the array  goes here!
        

    } else {
        completedBucketList.push(bucketList.shift());
        if (newItem === 0 && bucketList.length === 0)
        console.log(completedBucketList)

        removeFirstFromPage();

        //bucketList.shift(completedBucketList);
        // Your code to remove it from the array goes here!
        


    }
    document.querySelector('#next-item').innerText = 'Oldest ' + bucketList[0];
    document.querySelector('#number-of-items').innerText = 'Number of items ' + bucketList.length;
    document.querySelector('#newest-item').innerText = 'Newest ' + newItem;
    document.querySelector('#completed-item').innerText = 'Completed ' + completedBucketList;   
}


function toggleQueueAndStack(event) {
    // Prevent page reload.
    event.preventDefault()
    isStack = !isStack;
    if (!isStack){
        document.querySelector('#toggle').innerText = 'Toggle to Stack';
    } else {
        document.querySelector('#toggle').innerText = 'Toggle to Queue';
    }
    // How can we toggle whether it's a stack or a queue?
    // Your code below!
}

/*

No need to touch anything below!
Feel free to check it out though.

*/

function removeLastFromPage() {
    const items = document.querySelectorAll('li');
    const lastItem = items[items.length - 1];
    lastItem.parentNode.removeChild(lastItem);
}

function removeFirstFromPage() {
    const items = document.querySelectorAll('li');
    const firstItem = items[0];
    firstItem.parentNode.removeChild(firstItem);
}

function resetInput() {
    // Resets input field to blank. No need to add anything here!
    document.querySelector('#new-item').value = '';
}

function displayItem(itemText) {
    // Displays item on list. No need to add anything here!
    const newItem = document.createElement('li');
    newItem.innerText = itemText;
    document.querySelector('#items').appendChild(newItem);
}
