


// const allProducts = 
//     [
//         {
//             "index": 1,
//             "brand": "Acoustic",
//             "title": "Acoustic T-shirt",
//             "price": "40 ron",
//             "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
//             "images": [
//                 "../assets/images/products/productsSite/acoustic1.PNG",
//                 "../assets/images/products/productsSite/acoustic2.PNG",
//                 "../assets/images/products/productsSite/acoustic3.PNG",
//                 "../assets/images/products/productsSite/acoustic4.PNG"
//             ]
    
//         },
//         {
//             "index": 2,
//             "brand": "Luna pe Piele",
//             "title": "Album Luna pe Piele",
//             "price": "50 ron",
//             "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
//             "images": [
//                 "../assets/images/products/productsSite/album1.png",
//                 "../assets/images/products/productsSite/album2.png",
//                 "../assets/images/products/productsSite/album3.png",
//                 "../assets/images/products/productsSite/album4.png"
//             ]
    
//         }
//     ]

// localStorage.setItem('Products', JSON.stringify(allProducts));

// const getProducts = JSON.parse(localStorage.getItem('Products'));
// const allprd = document.getElementById('allProducts1');
// const image = getProducts.images[0];
// console.log(image);

// getProducts.forEach(function(product) {
//     const {index, brand, title, price, description, images} = product;
//     const createDiv = document.createElement('div');
//     createDiv.textContent = `${brand} ${price}`;
//     allprd.appendChild(createDiv);

// });





// fetch(getProducts)
// .then((res) => res.json())
// .then(resData => {
//     const products = resData.data;
//     products.forEach(product => {
//         console.log(product);
//     })

// })





// const hamburger = document.getElementById('hamburger');
// const navUl = document.getElementById('nav-ul');

// hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('show');
//     navUl.classList.toggle('show');
// })




// home products Slider
// ----------------------------------------------------------------------
const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')]; 
const preBtn = [...document.querySelectorAll('.pre-btn')]; 

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


// Product page slider images
// -------------------------------------------------------------------------------
const productImages = document.querySelectorAll('.product-images img');
const productImageSlide = document.querySelector('.image-slider');

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('activate');
        item.classList.add('activate');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})



// Store products
// -------------------------------------------------------------------------------
const products = [
    {
        index: 1,
        brand: "Acoustic",
        title: "Acoustic T-shirt",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/acoustic1.PNG"


    },
    {
        index: 2,
        brand: "Luna pe Piele",
        title: "Album Luna pe Piele",
        price: 50,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/album1.png"


    },
    {
        index: 3,
        brand: "Band",
        title: "T-shirt with the band",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/band1.PNG"

    },
    {
        index: 4,
        brand: "Live Music",
        title: "T-shirt Live Music",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/BBAND1.PNG"
    },
    {
        index: 5,
        brand: "Cup",
        title: "Musical cup",
        price: 30,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/CANA1.PNG"
    },
    {
        index: 6,
        brand: "Cello",
        title: "T-shirt Cello",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/cello1.PNG"
    },
    {
        index: 7,
        brand: "Culorile tale",
        title: "T-shirt Culorile tale",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/culoriletale1.png"
    },
    {
        index: 8,
        brand: "Band",
        title: "T-shirt with Band",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/PAUL-TIHANBAND1.PNG"
    },
    {
        index: 9,
        brand: "Drum Player",
        title: "T-shirt Drum Player",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/drum1.PNG"
    },
    {
        index: 10,
        brand: "Guitar",
        title: "T-shirt Guitar",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/Guitar1.PNG"
    },
    {
        index: 11,
        brand: "Live Music",
        title: "T-shirt Live Music",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/LIVEMUSIC2.PNG"
    },
    {
        index: 12,
        brand: "Luna pe Piele",
        title: "T-shirt Luna pe Piele",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/LUNAGRI1.PNG"
    },
    {
        index: 13,
        brand: "Moon",
        title: "T-shirt with moon",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/lunapepiele1.PNG"
    },
    {
        index: 14,
        brand: "Luna pe Piele",
        title: "T-shirt Luna pe Piele women",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/lunapepielef1.PNG"
    },
    {
        index: 15,
        brand: "Marginini de Ziua",
        title: "T-shirt Margini de Ziua",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/margini-de-ziua1.PNG"
    },
    {
        index: 16,
        brand: "Moon",
        title: "T-shirt Moon for women",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/moon1.PNG"
    },
    {
        index: 17,
        brand: "Luna pe Piele",
        title: "T-shirt Luna pe Piele",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/MOONE1.PNG"
    },
    {
        index: 18,
        brand: "Moon",
        title: "T-shirt Moon",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/MOONSUN1.jpeg"
    },
    {
        index: 19,
        brand: "Music",
        title: "T-shirt Music",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/MUSIC1.jpeg"
    },
    {
        index: 20,
        brand: "Music",
        title: "T-shirt Music",
        price: 40,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/NOTE1.jpeg"
    },
    {
        index: 21,
        brand: "Piro",
        title: "Pyrographed wood with trees",
        price: 50,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/piro1.jpg"
    },
    {
        index: 22,
        brand: "Piro",
        title: "Pyrographed wood with moon",
        price: 50,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor impedit pariatur adipisci asperiores ullam, aliquid sunt reiciendis fuga debitis quaerat provident illum, maxime a unde necessitatibus vitae autem placeat nostrum fugiat vero. Pariatur corporis doloribus quas eum libero, iure sed iusto? Voluptates rem impedit odit architecto tenetur voluptate adipisci ducimus.",
        images: "../assets/images/products/productsSite/pirogravuraluna1.jpg"


    }

]


const productsEl = document.querySelector('#allProducts');
const cartItemsEl = document.querySelector('.cart-items');
const subtotalEl = document.querySelector('.subtotal');
const totalItemsInCartEl = document.querySelector('.total-items-in-cart');


function renderProducts() {
    products.forEach((product) => {
        productsEl.innerHTML += `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.images}" class="product-thumb" alt="${product.brand}">
                <button class="add-chart-btn" onclick="addToCart(${product.index})">add to Cart</button>
            </div>
            <div class="product-info">
                <h2 class="product-brand">${product.brand}</h2>
                <p class="price">${product.price} <small>ron</small></p>
            </div>
        </div>
        `
    });
}
renderProducts();

let cart = [];

function addToCart(index) {

    if (cart.some((item) => item.index === index)) {
        alert('Product is already in cart!');
    } else {
        const item = products.find((product) => product.index === index);
        cart.push({
            ...item,
            numberOfUnits:1,
        });
    }
    updateCart();
}

function updateCart() {
    renderCartItems();
    renderSubtotal();
}
// calculare subtotal
function renderSubtotal() {
    let totalPrice = 0;
    let totalItems = 0;

    cart.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits;
    });
    subtotalEl.innerHTML = `Subtotal (${totalItems} items): ${totalPrice} ron`;
    totalItemsInCartEl.innerHTML = totalItems;
}
// ------------------------------



function renderCartItems() {
    cartItemsEl.innerHTML = '';
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
        <div class="card-item">
            <div class="item-info" onclick="removeItemFromCart(index)">
              <img src="${item.images}" alt="${item.brand}">
              <h4>${item.brand}</h4>
            </div>
            <div class="unit-price">
                ${item.price}<small>ron</small>
            </div>
            <div class="units">
              <div class="btn minus" onclick="changeUnits('minus', ${item.index})">-</div>
              <div class="number">${item.numberOfUnits}</div>
              <div class="btn plus" onclick="changeUnits('plus', ${item.index})">+</div>
            </div>
          </div>
        `
    });
}

//remove items from cart
function removeItemFromCart(index) {
    cart = cart.filter((item) => item.index !== index);

    updateCart();
}



// changeUnits for item
function changeUnits(action, index) {
    cart = cart.map((item) => {
        let numeberOfUnits = item.numberOfUnits;

        if (item.index === index) {
            if (action === "minus" && numeberOfUnits < item.instock) {
                numeberOfUnits++;
            }
        }
        return {
            ...item,
            numberOfUnits,
        };
    });
    updateCart();
}