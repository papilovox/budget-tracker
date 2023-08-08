  const expenseInput = document.getElementById('expense');
  const amountInput = document.getElementById('amount');
  const addButton = document.getElementById('addButton');
  const expenseList = document.getElementById('expenseList');
  const totalExpenses = document.getElementById('totalExpenses');

  let expenses = [];
  let total = 0;

  addButton.addEventListener('click', () => {
    const expense = expenseInput.value.trim();
    const amount = parseFloat(amountInput.value);

    if (expense !== '' && !isNaN(amount)) {
      expenses.push({ expense, amount });
      total += amount;

      updateUI();
    }

    expenseInput.value = '';
    amountInput.value = '';
  });

  function updateUI() {
    expenseList.innerHTML = '';
    expenses.forEach(expenseObj => {
      const listItem = document.createElement('li');
      listItem.textContent = `${expenseObj.expense}: $${expenseObj.amount.toFixed(2)}`;
      expenseList.appendChild(listItem);
    });

    totalExpenses.textContent = total.toFixed(2);
  }

