
document.addEventListener("DOMContentLoaded", function () {
    var formSection = document.getElementById("productForm");
    formSection.style.display = "none";

    var sectionTitle = document.querySelector(".menyu-slide-title i");

    var isOpen = false;

    sectionTitle.addEventListener("click", function () {
        if (isOpen) {
            formSection.style.display = "none";
        } else {
            formSection.style.display = "block";
            formSection.scrollIntoView({ behavior: "smooth" });
        }

        isOpen = !isOpen;
    });
});

var products = [];


function listProducts() {
   
    const productList = document.getElementById("productList");

    if (!productList) {
        console.error("Product list container not found!");
        return;
    }

    products.forEach((product, index) => {
      
        const productItem = document.createElement("li");
        productItem.innerHTML = `
            <div class="product-card">
                <figure class="card-banner">
                    <img src="${product.image}" alt="${product.name}" width="239" height="239" loading="lazy">
                    <div class="btn-wrapper">
                    <button class="btn btn-primary" onclick="editProduct(${index})"><i class="fa-solid fa-user-pen"></i>Redaktə et</button>
                  </div>
                </figure>

                <div class="rating-wrapper">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                </div>

                <h3 class="h4 card-title">
                    <a href="./product-details.html">${product.name}</a>
                </h3>

                <div class="price-wrapper">
                    <data class="price" value="${product.newPrice}">${product.newPrice} azn</data>
                </div>

                <button class="btn btn-primary" onclick="addToCart(${index})"><i class="fa-solid fa-cart-shopping"></i> Səbətə at</button>
                <button class="btn btn-primary" id="delToCartBtn${index}" onclick="deleteProduct(${index})"><i class="fa-solid fa-trash-can"></i>Məhsulu Sil</button>
                
            </div>
        `;

        productList.appendChild(productItem);
    });
}

function getBase64Image(imgUrl) {
    return new Promise((resolve, reject) => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.crossOrigin = "Anonymous";

        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            const base64 = canvas.toDataURL("image/png");
            resolve(base64);
        };

        img.onerror = function (error) {
            reject(error);
        };

        img.src = imgUrl;
    });
}


async function addProduct() {
    const productImageInput = document.getElementById("productImage");
    const productNameInput = document.getElementById("productName");
    const newPriceInput = document.getElementById("newPrice");

    try {
        const file = productImageInput.files[0];

        if (!file) {
            console.error("No file selected.");
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {
            const imageDataURL = event.target.result;

            const newProduct = {
                image: imageDataURL,
                name: productNameInput.value,
                newPrice: newPriceInput.value,
            };

            products.push(newProduct);
            productNameInput.value = "";
            newPriceInput.value = "";
            productImageInput.value = ""; 

            listProducts();
        };

        reader.readAsDataURL(file);
    } catch (error) {
        console.error("Error reading file:", error);
    }
}


function hideListItem(index) {
    const listItem = document.querySelectorAll('.grid-list li')[index];

    if (listItem) {
        listItem.style.display = 'none';
    }
}


function editProduct(index) {
    const productItem = document.querySelectorAll('.product-card')[index];


    const imgElement = productItem.querySelector('.card-banner img');
    const titleElement = productItem.querySelector('.card-title a');
    const priceElement = productItem.querySelector('.price');

    const newImgSrc = prompt("Enter new image URL:", imgElement.src);
    const newTitle = prompt("Enter new title:", titleElement.innerText);
    const newPrice = prompt("Enter new price:", priceElement.getAttribute('value'));

    imgElement.src = newImgSrc;
    titleElement.innerText = newTitle;
    priceElement.setAttribute('value', newPrice);
    priceElement.innerText = ` ${newPrice} azn`;
}