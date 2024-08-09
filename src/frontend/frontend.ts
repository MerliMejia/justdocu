type DbItemType = {
  title: string;
  desc: string;
};

type DbDataType = {
  items: DbItemType[];
};

const constructItem = (item: DbItemType) => {
  const string = `<div class="item-container">
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </div>`;

  return string;
};

const drawITems = (items: DbItemType[]) => {
  const element = document.getElementById("items");

  if (element) {
    const allItemsString = items.map((item) => constructItem(item)).join("");
    element.innerHTML = allItemsString;
  }
};

window.onload = async (e) => {
  const data: DbDataType = await fetch("/items").then((r) => r.json());
  console.log("data: ", data);
  drawITems(data.items);
};
