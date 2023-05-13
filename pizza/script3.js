// Get the order form and submit button
const orderForm = document.querySelector('#order-form');
const submitButton = document.querySelector('#submit-button');

// Listen for form submission
orderForm.addEventListener('submit', (event) => {
  // Prevent the form from submitting normally
  event.preventDefault();

  // Get the user's selected pizza size and toppings
  const pizzaSize = document.querySelector('input[name="size"]:checked').value;
  const selectedToppings = [];
  const toppingsCheckboxes = document.querySelectorAll('input[name="toppings"]:checked');
  toppingsCheckboxes.forEach((checkbox) => {
    selectedToppings.push(checkbox.value);
  });

  // Calculate the total cost of the order
  let totalCost = 0;
  if (pizzaSize === 'small') {
    totalCost += 10;
  } else if (pizzaSize === 'medium') {
    totalCost += 15;
  } else if (pizzaSize === 'large') {
    totalCost += 20;
  }
  totalCost += selectedToppings.length * 2;

  // Display the order summary and total cost
  const orderSummary = `You ordered a ${pizzaSize} pizza with ${selectedToppings.join(', ')} toppings.`;
  const totalCostDisplay = `Your total cost is $${totalCost.toFixed(2)}.`;
  const orderOutput = document.querySelector('#order-output');
  orderOutput.innerHTML = `${orderSummary} ${totalCostDisplay}`;

  // Reset the form
  orderForm.reset();
});

// Disable the submit button until the user has selected a pizza size
submitButton.disabled = true;
const pizzaSizeRadios = document.querySelectorAll('input[name="size"]');
pizzaSizeRadios.forEach((radio) => {
  radio.addEventListener('change', () => {
    submitButton.disabled = false;
  });
});