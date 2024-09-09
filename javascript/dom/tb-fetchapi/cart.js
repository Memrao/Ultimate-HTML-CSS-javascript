// // Function to fetch cart items from localStorage and populate the cart page
// async function populateCart() {
//     const cartItemsContainer = document.getElementById('cartItems');
//     const cartTotalElement = document.getElementById('cartTotal');

//     // Get the cart from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

//     let total = 0;

//     // Clear any existing content
//     cartItemsContainer.innerHTML = '';

//     if (cart.length === 0) {
//         // Show empty cart message if no items are in the cart
//         cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
//         cartTotalElement.innerHTML = '';
//         return;
//     }

//     // Populate cart items
//     cart.forEach(item => {
//         // Create cart item element
//         const itemElement = document.createElement('div');
//         itemElement.classList.add('cart-item');
//         itemElement.innerHTML = `
//         <h3>${item.title}</h3>
//         <p>Quantity: ${item.quantity}</p>
//         <p>Price: $${(item.price * item.quantity).toFixed(2)}</p>
//     `;

//         // Append to container
//         cartItemsContainer.appendChild(itemElement);

//         // Update total
//         total += item.price * item.quantity;
//     });

//     // Display total
//     cartTotalElement.innerHTML = `
//     <h2>Total</h2>
//     <p>$${total.toFixed(2)}</p>
// `;
// }

// // Call the function to populate the cart when the page loads
// document.addEventListener('DOMContentLoaded', populateCart);

// // Function to clear the cart (e.g., after checkout)
// function clearCart() {
//     localStorage.removeItem('cart'); // Clear the cart from localStorage
//     populateCart(); // Re-populate the cart (which will now show as empty)
// }

async function addtocart(id) {

    const response = await fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: 1,
                products: [{
                        id: 144,
                        quantity: 4,
                    },
                    {
                        id: 98,
                        quantity: 1,
                    },
                ]
            })
        })
        .then(res => res.json())
        .then(console.log);
}