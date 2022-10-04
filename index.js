/* Just trying something
var menu = document.getElementById('Menu1122');
var Original_Content = `
<div >
<img src="assets/img/menu/image" class="menu-img" alt="">
<div class="menu-content">
  <a href="#">Title</a><span>price</span>
</div>
<div class="menu-ingredients">
  DESCRIPTION
</div>`

fetch('http://localhost:3000/menu')
  .then(response => response.json())
  .then(json => {
    json.menu.forEach(element => {
      var content = Original_Content;
      content= content.replace('Title',element.A);
      content= content.replace('DESCRIPTION',element.B);
      content = content.replace('image', element.C) 
      content = content.replace('price', element.D)
      
      var food = document.createElement('div')
    food.innerHTML= content;
    food.className = 'col-lg-6 menu-item ' + 'filter-' + element.E;
    menu.appendChild(food)
      
    });
  })
*/