function todoItemElement(text, amount) {
  return `<li>
    <span class="text">${text}</span>
    <span class="text">${amount}</span>
    <span class="remove">&#128465</span>
  </li>`
}