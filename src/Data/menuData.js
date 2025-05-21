import allMenuIcon from "../assets/icons/all-menu.svg";
import coffeeIcon from "../assets/icons/Coffee.svg";
import fruitsIcon from "../assets/icons/Fruits.svg";
import burgerIcon from "../assets/icons/burger.svg";
import pizzaIcon from "../assets/icons/Pizza.svg";
import cakeIcon from "../assets/icons/Cake.svg";
import saladIcon from "../assets/icons/Salad.svg";
import softDrinksIcon from "../assets/icons/Soft-drinks.svg";
import menuItemData from "./menuItemData";

const categoryDefinitions = [
  { id: 1, title: "All Menu", icon: allMenuIcon, isAll: true },
  { id: 2, title: "Coffee", icon: coffeeIcon },
  { id: 3, title: "Fruits", icon: fruitsIcon },
  { id: 4, title: "Burger", icon: burgerIcon },
  { id: 5, title: "Pizza", icon: pizzaIcon },
  { id: 6, title: "Cake", icon: cakeIcon },
  { id: 7, title: "Salad", icon: saladIcon },
  { id: 8, title: "Soft-drinks", icon: softDrinksIcon }
];

const getCategoryCounts = () => {
  const counts = {};
  menuItemData.forEach(item => {
    // Initialize the count if it doesn't exist
    if (!counts[item.categoryID]) {
      counts[item.categoryID] = 0;
    }
    // Increment the count for this category
    counts[item.categoryID]++;
  });
  return counts;
};

const generateMenuData = () => {
  const categoryCounts = getCategoryCounts();

  return categoryDefinitions.map(category => (
    {
    ...category,
    // Use the category's own ID to look up its count
    count: category.isAll ? menuItemData.length : (categoryCounts[category.id] || 0)
  }
));
};

const menuData = generateMenuData();
export default menuData;