document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (productId) {
        fetchProductDetails(productId);
    } else {
        console.error('No product ID provided.');
    }
});

async function fetchProductDetails(id) {
    try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const product = await response.json();
        displayProductDetails(product);
        displayRatingAndReviews();
    } catch (error) {
        console.error('Error fetching product details:', error);
    }
}

function displayProductDetails(product) {
    const productDetailsDiv = document.getElementById('productDetails');

    productDetailsDiv.innerHTML = `
        <div class="image">
            <img src="${product.images[0]}" alt="${product.title} Image"/>
        </div>
        <div class="describe">
            <h1>${product.title}</h1>
            <p>${product.description}</p>
            <h3>Price: $${product.price.toFixed(2)}</h3>
            <h3>Stock: ${product.stock}</h3>
            <button id="addToCartButton">Add to Cart</button>
        </div>
    `;

    productDetailsDiv.style.width = ''; // Remove any inline width style if set

    document.getElementById('addToCartButton').addEventListener('click', () => {
        // Add product to local storage cart
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const productInCart = cart.find(item => item.id === product.id);

        if (productInCart) {
            productInCart.quantity += 1;
        } else {
            cart.push({ id: product.id, title: product.title, quantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));

        console.log('Product added to cart successfully.');
        // Redirect to the cart page
        window.location.href = 'cart.html';
    });
}

// Star Rating Logic
function generateStars(rating = 0) {
    const starsContainer = document.getElementById('stars-container');
    starsContainer.innerHTML = ''; // Clear the container

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.innerHTML = '★';
        star.style.color = i <= rating ? 'gold' : 'gray'; // Update star color

        star.addEventListener('click', () => {
            setRating(i);
        });

        starsContainer.appendChild(star);
    }
}

function getSavedRating() {
    const productId = new URLSearchParams(window.location.search).get('id');
    return parseInt(localStorage.getItem(`rating-${productId}`), 10) || 0;
}

function setRating(rating) {
    const productId = new URLSearchParams(window.location.search).get('id');
    localStorage.setItem(`rating-${productId}`, rating);
    document.getElementById('rating-message').innerHTML = `You rated this product ${rating} stars!`;
    generateStars(rating);
    displayReviews(); // Update reviews after setting rating
}

// Reviews Logic
function submitReview() {
    const commentBox = document.getElementById('commentBox');
    const reviewText = commentBox.value;

    const ratingStars = document.querySelectorAll('#stars-container .star');
    let selectedRating = 0;

    ratingStars.forEach((star, index) => {
        if (star.style.color === 'gold') {
            selectedRating = index + 1;
        }
    });

    if (selectedRating === 0 || reviewText.trim() === '') {
        alert('Please provide a rating and a review.');
        return;
    }

    const review = {
        comment: reviewText,
        rating: selectedRating
    };

    const productId = new URLSearchParams(window.location.search).get('id');
    let reviews = JSON.parse(localStorage.getItem(`reviews-${productId}`)) || [];
    reviews.push(review);
    localStorage.setItem(`reviews-${productId}`, JSON.stringify(reviews));

    commentBox.value = '';
    displayReviews();
    generateStars(selectedRating); // Update stars to reflect the current rating
}

function displayReviews() {
    const productId = new URLSearchParams(window.location.search).get('id');
    const reviewsList = document.getElementById('reviewsList');
    //local storage
    let reviews = JSON.parse(localStorage.getItem(`reviews-${productId}`)) || [];

    const totalReviews = reviews.length;
    const averageRating = totalReviews === 0 ? 0 : reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews;

    reviewsList.innerHTML = `
        <h3>Average Rating: ${averageRating.toFixed(1)} stars (${totalReviews} reviews)</h3>
        ${reviews.map(review => `
            <div class="review">
                <div class="review-rating">${getStarRating(review.rating)}</div>
                <p>${review.comment}</p>
            </div>
        `).join('')}
    `;

    document.getElementById('submitReviewButton').addEventListener('click', submitReview);
}

function getStarRating(rating) {
    const totalStars = 5;
    let starsHtml = '';
    for (let i = 0; i < totalStars; i++) {
        starsHtml += i < rating ? '★' : '☆';
    }
    return starsHtml;
}

function displayRatingAndReviews() {
    const savedRating = getSavedRating();
    generateStars(savedRating);
    displayReviews();
}

// Preloader Logic
window.addEventListener('load', () => {
    document.getElementById('preloader').style.display = 'none';
});