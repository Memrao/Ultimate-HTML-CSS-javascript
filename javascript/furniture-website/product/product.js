document.addEventListener('DOMContentLoaded', () => {
    const userList = document.getElementById('user-list');
    const cart = document.getElementById('cart');
    let cartItems = [];
    let currentCartId = null;

    // Fetch users from the API
    async function fetchUsers() {
        try {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            displayUsers(data.users);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    // Display users in the list
    function displayUsers(users) {
        userList.innerHTML = '';
        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.className = 'user-card';
            userCard.innerHTML = `
                <h3>${user.firstName} ${user.lastName}</h3>
                <p>Email: ${user.email}</p>
                <button onclick="addToCart(${user.id})">Add to Cart</button>
            `;
            userList.appendChild(userCard);
        });
    }

    // Add user to cart
    window.addToCart = async function(userId) {
        try {
            const response = await fetch(`https://dummyjson.com/users/${userId}`);
            const user = await response.json();
            if (!cartItems.find(item => item.id === user.id)) {
                cartItems.push(user);
                updateCart();
                if (currentCartId === null) {
                    const cartResponse = await createCart(userId, cartItems);
                    currentCartId = cartResponse.id;
                } else {
                    await updateCartContent(currentCartId, cartItems);
                }
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    };

    // Create a new cart
    async function createCart(userId, products) {
        try {
            const response = await fetch('https://dummyjson.com/carts/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: userId,
                    products: products.map(product => ({ id: product.id, quantity: 1 }))
                })
            });
            const cart = await response.json();
            return cart;
        } catch (error) {
            console.error('Error creating cart:', error);
        }
    }

    // Update existing cart
    async function updateCartContent(cartId, products) {
        try {
            const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    merge: true,
                    products: products.map(product => ({ id: product.id, quantity: 1 }))
                })
            });
            const updatedCart = await response.json();
            console.log('Cart updated:', updatedCart);
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    }

    // Delete cart
    async function deleteCart(cartId) {
        try {
            const response = await fetch(`https://dummyjson.com/carts/${cartId}`, {
                method: 'DELETE'
            });
            const deletedCart = await response.json();
            console.log('Cart deleted:', deletedCart);
        } catch (error) {
            console.error('Error deleting cart:', error);
        }
    }

    // Update cart display
    function updateCart() {
        cart.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <h4>${item.firstName} ${item.lastName}</h4>
                <p>Email: ${item.email}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cart.appendChild(cartItem);
        });
    }

    // Remove item from cart
    window.removeFromCart = async function(userId) {
        try {
            cartItems = cartItems.filter(item => item.id !== userId);
            updateCart();
            if (currentCartId !== null) {
                await updateCartContent(currentCartId, cartItems);
            }
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    };

    // Initialize
    fetchUsers();
});