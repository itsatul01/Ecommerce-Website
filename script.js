const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
// Get all the trash icons in an array
const trashIcons = document.querySelectorAll('.fa-trash');

// Loop through each trash icon and add a click event listener
trashIcons.forEach(icon => {
  icon.addEventListener('click', function(event) {
    // Prevent the default behavior of the anchor tag
    event.preventDefault();

    // Get the parent row of the clicked trash icon
    const parentRow = icon.closest('tr');

    // Remove the parent row from the table
    if (parentRow) {
      parentRow.remove();
    }
  });
});

// Apply Coupon Logic
const applyCouponButton = document.querySelector('#coupon button');

applyCouponButton.addEventListener('click', function() {
  const couponInput = document.querySelector('#coupon input');
  const couponValue = couponInput.value.trim();

  // You can add logic here to validate and apply the coupon
  // For example:
  if (couponValue === 'SAVE20') {
    // Apply a discount or modify the subtotal based on the coupon
    // For demonstration purposes, let's assume a discount of 20%
    const cartTotal = document.querySelector('#subtotal table tr:last-child td:last-child');
    const currentTotal = parseFloat(cartTotal.textContent.slice(1)); // Extracting numeric value without dollar sign

    // Calculate discounted total
    const discountedTotal = currentTotal * 0.8; // Applying a 20% discount

    // Update the displayed total
    cartTotal.textContent = `$${discountedTotal.toFixed(2)}`; // Assuming two decimal places for cents
  } else {
    alert('Invalid coupon code. Please try again.');
  }
});

// Proceed to Checkout Logic (Button Click)
const proceedToCheckoutButton = document.querySelector('#subtotal button');

proceedToCheckoutButton.addEventListener('click', function() {
  // You can add logic here to proceed to the checkout page
  // For example:
  window.location.href = 'checkout.html'; // Redirect to the checkout page
});


