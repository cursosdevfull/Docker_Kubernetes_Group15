const tbody = document.querySelector("tbody");

function render(list) {
  for (const item of list) {
    const tr = document.createElement("tr");
    const tdId = document.createElement("td");
    tdId.textContent = item.id;
    tr.append(tdId);
    const tdName = document.createElement("td");
    tdName.textContent = item.name;
    tr.append(tdName);

    tbody.append(tr);
  }
}

function start() {
  fetch("/api/config")
    .then((res) => res.json())
    .then((response) => {
      const urlBackend1 = response.backend1;
      fetch(urlBackend1)
        .then((res) => res.json())
        .then((list) => {
          render(list);
        });
    });
}

start();
