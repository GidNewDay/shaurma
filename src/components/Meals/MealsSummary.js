import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Шаурма с доставкой для Вас</h2>
      <p>Начиненный мясом или другими вкусностями хлеб или лепешки</p>
      <p>
        Шаурма представляет из себя лепёшку, в которую завёрнуто мясо на гриле с
        дополнением из овощей!
      </p>
    </section>
  );
};

export default MealsSummary;
