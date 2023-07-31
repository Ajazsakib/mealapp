var search = document.getElementById("search");
var suggestion = document.getElementById("suggestion");

// Code for search the meal
search.addEventListener("input", handleSearch);
var favItemList = JSON.parse(localStorage.getItem("favItem")) || [];

async function handleSearch(e) {
  if (search.value.trim() == "" || search.value.trim() == " ") {
    document.getElementById("product-list").innerHTML = "";
    document.getElementById("loading").innerHTML = "";
    return;
  }
  document.getElementById("loading").innerHTML = "Loading...";
  try {
    var res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search.value.trim()}`,
      {
        headers: {
          Accept: "application/json", // Set the Accept header to request JSON
        },
      }
    );
    var data = await res.json();

    if (data.meals) {
      renderMeal(data);
      document.getElementById("loading").innerHTML = "";
    } else {
      document.getElementById("product-list").innerHTML =
        "<p style='text-align: center; width: 100%;'>No Result found</p>";
      document.getElementById("loading").innerHTML = "";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("loading").innerHTML = "";
    document.getElementById("product-list").innerHTML =
      "<p>An error occurred</p>";
  }
}

// render the meal html page
function renderMeal(data) {
  console.log(data);
  if (data) {
    var foodList = data.meals.map(function (food) {
      const isFavorite =
        favItemList &&
        favItemList.some((favorite) => favorite.strMeal === food.strMeal);

      return `<div class="product-details">
        <div class="img" data-food="${encodeURIComponent(
          JSON.stringify(food)
        )}"><img src=${food.strMealThumb} /></div>
        <div class="text">
        <div class="name">${food.strMeal}</div>
        <div class="instruction">${food.strInstructions.slice(0, 100)}</div>
        <div class="favrouite-button">
            <button class="btn btn-favrouite" ${
              isFavorite ? "disabled" : ""
            } data-meal="${encodeURIComponent(JSON.stringify(food))}">${isFavorite ? "Added To favroite" : "Add TO favourite"}</button>
        </div>
        </div>
        </div>`;
    });
  }

  document.getElementById("product-list").innerHTML = foodList;

  var favButton = document.querySelectorAll(".product-details .btn-favrouite");

  for (var i = 0; i < favButton.length; i++) {
    favButton[i].addEventListener("click", handleFavouriteButtonClick);
  }

  var productDetails = document.querySelectorAll(".product-details .img");

  for (var i = 0; i < productDetails.length; i++) {
    (function (index) {
      productDetails[index].addEventListener("click", function (e) {
        console.log(e.target.parentElement);
        var mealData = JSON.parse(
          decodeURIComponent(e.target.parentElement.dataset.food)
        );
        showDetailPage(mealData);
      });
    })(i);
  }
}

// function to add item as a favrouite item
function handleFavouriteButtonClick(e) {
  var mealString = e.target.dataset.meal;
  var meal = JSON.parse(decodeURIComponent(mealString));
  e.target.setAttribute("disabled", "true");
  e.target.innerHTML = "Added To Favrouie";
  favItemList.push(meal);
  localStorage.setItem("favItem", JSON.stringify(favItemList));
  getFavItemLen();
  console.log(favItemList);
}

function getFavItemLen() {
  document.getElementById("count").innerHTML = ` (${favItemList.length})`;
}

(function () {
  getFavItemLen();
})();

function showDetailPage(mealData) {
  console.log(mealData);
  window.location.href = `https://ajazsakib.github.io/mealapp//product-details.html`;
  localStorage.setItem("product-detail", JSON.stringify(mealData));
}
