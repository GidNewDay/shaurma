import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Шаурма",
    description: "мясо, специи, овощи и соус",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Дёнер-кебаб",
    description: "свежие и маринованные огурцы, помидоры, травы и лук.",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Лаваш с шашлыком",
    description: "лаваш, напичканный шашлыком по-карски",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Дюрюм",
    description: "Маринованное мясо с овощами и соусом",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              desc={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
