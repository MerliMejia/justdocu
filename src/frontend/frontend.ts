type DbItemType = {
  title: string;
  desc: string;
};

type DbDataType = {
  items: DbItemType[];
};

let title = "";
let desc = "";

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

const updateItems = async () => {
  const data: DbDataType = await fetch("/items").then((r) => r.json());
  console.log("data: ", data);
  drawITems(data.items);
};

window.onload = async (e) => {
  updateItems();

  const titleInput = document.getElementById("titleInput");
  const descInput = document.getElementById("descInput");

  if (titleInput) {
    titleInput.onkeydown = (e) => {
      // @ts-ignore - HTML stuff.
      title = e.target.value + e.key;
      console.log("TITLE ", title);
    };
  }
  if (descInput) {
    descInput.onkeydown = (e) => {
      // @ts-ignore - HTML stuff.
      desc = e.target.value + e.key;
      console.log("DESC ", desc);
    };
  }

  const addNewBtn = document.getElementById("addNewBtn");

  if (addNewBtn) {
    addNewBtn.onclick = async () => {
      await fetch("/items", {
        method: "POST",
        body: JSON.stringify({ title, desc }),
      });
      await updateItems();

      // @ts-ignore - HTML STUFF
      titleInput.value = "";
      // @ts-ignore - HTML STUFF
      descInput.value = "";
    };
  }
};
