import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private Menu = [
    // Starters
    {
      id: 1,
      name: "Seasonal Harvest Salad",
      price: 14.99,
      category: "Starters",
      description: "Fresh mixed greens, heirloom tomatoes, pickled beets, roasted squash, goat cheese, and candied walnuts, drizzled with a lemon-honey vinaigrette.",
      notes: "Vibrant and fresh, this salad reflects the bounty of the season with local farm-fresh ingredients.",
      image: "../assets/images/Starters/Seasonal Harvest Salad.jpg",
      featured: true
    },
    {
      id: 2,
      name: "Charcuterie & Cheese Board",
      price: 22.00,
      category: "Starters",
      description: "A selection of artisan cured meats and local cheeses, served with house-made pickles, seasonal jams, and slices of rustic sourdough.",
      notes: "Great for sharing. A taste of local craftsmanship with each bite.",
      image: "../assets/images/Starters/Charcuterie & Cheese Board.jpg",
      featured: false
    },
    {
      id: 3,
      name: "Stuffed Zucchini Blossoms",
      price: 12.75,
      category: "Starters",
      description: "Lightly battered zucchini flowers stuffed with creamy ricotta and fresh herbs, served with a tangy tomato-basil sauce.",
      notes: "Delicate and bursting with flavor – a true seasonal delight.",
      image: "../assets/images/Starters/Stuffed Zucchini Blossoms.jpg",
      featured: false
    },
    {
      id: 4,
      name: "Roasted Root Vegetable Soup",
      price: 9.50,
      category: "Starters",
      description: "A rich blend of roasted carrots, sweet potatoes, and parsnips, seasoned with fresh herbs and finished with a swirl of farm-fresh cream.",
      notes: "Warming and hearty, perfect for a cozy start to your meal.",
      image: "../assets/images/Starters/Roasted Root Vegetable Soup.jpg",
      featured: false
    },
    // Main Courses
    {
      id: 5,
      name: "Grilled Free-Range Chicken",
      price: 23.50,
      category: "Main Courses",
      description: "Juicy, herb-marinated chicken breast grilled to perfection, served with roasted garlic mashed potatoes, sautéed greens, and rosemary jus.",
      notes: "Tender and savory, this dish is packed with flavors of the farm.",
      image: "../assets/images/MianCourse/Grilled Free-Range Chicken.jpg",
      featured: true
    },
    {
      id: 6,
      name: "Grass-Fed Beef Burger",
      price: 18.99,
      category: "Main Courses",
      description: "A mouthwatering grass-fed beef patty topped with caramelized onions, aged cheddar, house-made pickles, and served with hand-cut fries and garlic aioli.",
      notes: "A true classic elevated with high-quality local ingredients.",
      image: "../assets/images/MianCourse/Grass-Fed Beef Burger.jpg",
      featured: false
    },
    {
      id: 7,
      name: "Pan-Seared Wild-Caught Salmon",
      price: 26.75,
      category: "Main Courses",
      description: "Fresh wild-caught salmon seared with a crispy skin, served over a quinoa and vegetable medley with roasted heirloom carrots and a citrus-dill sauce.",
      notes: "Light yet satisfying, showcasing the best local fish and seasonal produce.",
      image: "../assets/images/MianCourse/Pan-Seared Wild-Caught Salmon.jpg",
      featured: false
    },
    {
      id: 8,
      name: "Mushroom & Barley Risotto",
      price: 20.00,
      category: "Main Courses",
      description: "Creamy barley risotto with wild mushrooms, sautéed baby spinach, and a drizzle of truffle oil.",
      notes: "Rich and earthy, this dish is perfect for mushroom lovers and those seeking a hearty plant-based option.",
      image: "../assets/images/MianCourse/Barley Risotto.jpg",
      featured: false
    },
    {
      id: 9,
      name: "Slow-Cooked Lamb Shank",
      price: 29.50,
      category: "Main Courses",
      description: "Tender lamb shank slow-braised in red wine with local herbs, served over creamy polenta with roasted root vegetables.",
      notes: "A melt-in-your-mouth lamb dish that will satisfy even the most discerning palates.",
      image: "../assets/images/MianCourse/Slow-Cooked Lamb Shank.jpg",
      featured: false
    },
    // Sides
    {
      id: 10,
      name: "Roasted Fingerling Potatoes with Thyme",
      price: 7.00,
      category: "Sides",
      description: "Crispy on the outside, fluffy on the inside, tossed with fresh thyme and olive oil.",
      notes: "Simple yet flavorful, perfect for soaking up sauces.",
      image: "../assets/images/Sides/Roasted Fingerling Potatoes with Thyme.jpg",
      featured: false
    },
    {
      id: 11,
      name: "Charred Broccoli with Garlic and Chili Flakes",
      price: 7.00,
      category: "Sides",
      description: "Smoky charred broccoli with a hint of heat from chili flakes and a garlic kick.",
      notes: "A bold and nutritious side that adds a pop of flavor.",
      image: "../assets/images/Sides/Charred Broccoli with Garlic and Chili Flakes.jpg",
      featured: false
    },
    {
      id: 12,
      name: "Heirloom Tomato and Cucumber Salad",
      price: 7.00,
      category: "Sides",
      description: "Juicy heirloom tomatoes and crisp cucumbers, lightly dressed with olive oil and balsamic vinegar.",
      notes: "Refreshing and vibrant, a great palate cleanser.",
      image: "../assets/images/Sides/Heirloom Tomato and Cucumber Salad.jpg",
      featured: false
    },
    {
      id: 13,
      name: "Grilled Asparagus with Lemons Zest",
      price: 7.00,
      category: "Sides",
      description: "Simply seasoned and char-grilled, finished with a bright touch of lemon zest.",
      notes: "A light and zesty complement to any meal.",
      image: "../assets/images/Sides/Grilled Asparagus with Lemon Zest.jpg",
      featured: false
    },
    // Desserts
    {
      id: 14,
      name: "Seasonal Fruit Crisp",
      price: 10.50,
      category: "Desserts",
      description: "Local fruits baked with a brown sugar and oat crumble, served warm with a scoop of vanilla bean ice cream.",
      notes: "A comforting and sweet finish to your meal with the freshest seasonal fruits.",
      image: "../assets/images/Desserts/Seasonal Fruit Crisp.jpg",
      featured: false
    },
    {
      id: 15,
      name: "Lavender Honey Panna Cotta",
      price: 9.75,
      category: "Desserts",
      description: "Silky panna cotta infused with local lavender and honey, served with a mixed berry compote.",
      notes: "Light and fragrant, a dessert that captures the essence of the fields.",
      image: "../assets/images/Desserts/Lavender Honey Panna Cotta.jpg",
      featured: false
    },
    {
      id: 16,
      name: "Dark Chocolate Tart",
      price: 11.00,
      category: "Desserts",
      description: "Rich dark chocolate tart with a crunchy hazelnut crust, topped with fresh whipped cream.",
      notes: "Decadent and smooth, a must for chocolate lovers.",
      image: "../assets/images/Desserts/Dark Chocolate Tart.jpg",
      featured: true
    },
    // Beverages
    {
      id: 17,
      name: "Fresh-Pressed Juice of the Day",
      price: 6.50,
      category: "Beverages",
      description: "Cold-pressed juice featuring a daily selection of seasonal fruits and vegetables.",
      notes: "A refreshing burst of vitamins and nutrients in every sip.",
      image: "../assets/images/Beverages/Fresh-Pressed Juice of the Day.jpg",
      featured: false
    },
    {
      id: 18,
      name: "Farm-Fresh Iced Tea",
      price: 4.50,
      category: "Beverages",
      description: "Freshly brewed iced tea infused with mint and seasonal fruits.",
      notes: "Cool and revitalizing, perfect for any time of day.",
      image: "../assets/images/Beverages/Farm-Fresh Iced Tea.jpg",
      featured: false
    }
  ];

  getMenu() {
    return this.Menu;
  }
  getFeaturedItems() {
    return this.Menu.filter(item => item.featured); 
  }

  constructor() { }
}
