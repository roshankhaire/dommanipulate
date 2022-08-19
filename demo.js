
var filter = document.getElementById('filter');

filter.addEventListener('keyup',filterItems);
var itemList = document.getElementById('items');

function filterItems(e){
   
    var text = e.target.value.toLowerCase();
   
    var items = itemList.getElementsByTagName('li');
   
    Array.from(items).forEach(function(item){
      var itemName = item.firstChild.textContent;
  
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }