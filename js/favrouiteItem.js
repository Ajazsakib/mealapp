// script for favrouite page
var favItemList = JSON.parse(localStorage.getItem("favItem")) || [];
function renderFavrouiteItem() {
  if (favItemList.length > 0) {
    var storeFavIteMlist = favItemList.map(function (food) {
      return `
    <div class="favrouite-item">
          <div class="img">
            <img
              src=${food.strMealThumb}
            />
          </div>
          <div class="text">
            <div class="name">${food.strMeal}</div>
            <div class="instruction">${food.strInstructions.slice(0, 80)}</div>
            <div class="remove-fav-btn">
              <button class="btn btn-remove">Remove From Favrouite</button>
            </div>
          </div>
        </div>
      `;
    });

    document.getElementById("favrouite-item-list").innerHTML = storeFavIteMlist;
  } else {
    document.getElementById("favrouite-item-list").innerHTML =
      "<h1 style='text-align: center; width: 100%'>No Item In Favrouite</h1>";
  }
  var removeFav = document.querySelectorAll(".remove-fav-btn");

  for (var i = 0; i < removeFav.length; i++) {
    (function (index) {
      removeFav[index].addEventListener("click", function () {
        console.log(index);
        removeItemFromFavrouite(index);
      });
    })(i);
  }
}

function removeItemFromFavrouite(index) {
  favItemList.splice(index, 1);
  console.log(favItemList);
  localStorage.setItem("favItem", JSON.stringify(favItemList));
  renderFavrouiteItem();
}

(function () {
  renderFavrouiteItem();
})();
