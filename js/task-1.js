// Cписок категорій
const categoriesList = document.querySelector("#categories");

// Bсі елементи li з класом item
const categoryItems = categoriesList.querySelectorAll(".item");

// Кількість категорій
console.log(`Number of categories: ${categoryItems.length}`);

//  Цикл forEach()
categoryItems.forEach((item) => {
  // Заголовок категорії
  const categoryTitle = item.querySelector("h2").textContent;

  // Всі вкладені елементи li
  const categoryElements = item.querySelectorAll("ul li").length;

  // Виводимо заголовок і кількість вкладених елементів
  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
