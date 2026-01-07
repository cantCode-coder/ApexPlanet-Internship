const watches = [
  { name: "Rolex Submariner", brand: "rolex", price: 8500 },
  { name: "Rolex Datejust", brand: "rolex", price: 7200 },

  { name: "Omega Seamaster", brand: "omega", price: 6100 },
  { name: "Omega Speedmaster", brand: "omega", price: 6900 },

  { name: "Seiko Presage", brand: "seiko", price: 450 },
  { name: "Seiko Prospex", brand: "seiko", price: 650 },

  { name: "Apple Watch Ultra", brand: "apple", price: 799 },
  { name: "Apple Watch Series 9", brand: "apple", price: 399 }
];

let current = [...watches];

function render(items) {
  const grid = document.getElementById("watchGrid");
  grid.innerHTML = "";

  items.forEach(w => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <span class="badge">${w.brand.toUpperCase()}</span>
      <h3>${w.name}</h3>
      <p class="price">$${w.price}</p>
      <button style="margin-top:10px">Add to Setup</button>
    `;

    grid.appendChild(card);
  });
}

function filterBrand(brand) {
  document.querySelectorAll(".filters button")
    .forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");

  current = brand === "all"
    ? [...watches]
    : watches.filter(w => w.brand === brand);

  render(current);
}

function sortByPrice(type) {
  if (type === "low") {
    current.sort((a, b) => a.price - b.price);
  } else if (type === "high") {
    current.sort((a, b) => b.price - a.price);
  }
  render(current);
}

render(watches);

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const btn = document.createElement("button");
    btn.textContent = "X";
    btn.onclick = () => {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value.trim()) return;

  tasks.push(input.value.trim());
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  renderTasks();
}

renderTasks();
