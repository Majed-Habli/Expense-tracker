let totalAmount = 0;

function todoItemElement(text, amount) {
  return `<li>
    <span class="text">${text}</span>
    <span class="text">${amount}</span>
    <span class="remove">&#128465 delete</span>
  </li>`
}

function addItem() {
  const ItemInput = $("#expense-name-input");
  const AmountInput = $("#expenses-input");
  const expenseList = $("#expenses-list");

  if (ItemInput.val().trim() === "") return;

  const todoItem = $(todoItemElement(ItemInput.val(), AmountInput.val()))

  todoItem.find(".remove").click(function () {
    todoItem.remove()
  })

  expenseList.append(todoItem)
  totalAmount += AmountInput.val(); 
  $(".totalAmount").text(totalAmount);
  ItemInput.val("");
  AmountInput.val("");
}

$(document).ready(function () {
  const addButton = $("#add-button");
  addButton.click(addItem);

  $(".totalAmount").text(totalAmount);

})