var productDetails = JSON.parse(localStorage.getItem("product-detail"));

function renderSingleProductDetail() {
  document.getElementById("single-product-details").innerHTML = `
    <div class="single-product-details">
        <div class="img">
          <img
            src="${productDetails.strMealThumb}"
          />
        </div>
        <div class="text">
          <div class="name">${productDetails.strMeal}</div>
          <div class="instruction">
            ${productDetails.strInstructions}
          </div>
        </div>
      </div>
    `;
}

(function () {
  renderSingleProductDetail();
})();
