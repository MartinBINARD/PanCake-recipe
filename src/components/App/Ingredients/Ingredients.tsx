interface Ingredient {
  id: number;
  quantity: number;
  unit: string;
  name: string;
}

interface IngredientsProps {
  ingredients: Ingredient[];
}

function Ingredients({ ingredients }: IngredientsProps) {
  const items = ingredients.map((ingredient) => (
    <li className="ingredients-item" key={ingredient.id}>
      <span className="ingredients-quantity">
        {ingredient.quantity} {ingredient.unit}{' '}
      </span>
      {ingredient.name}
    </li>
  ));

  return (
    <section className="ingredients">
      <ul className="ingredients-list">{items}</ul>
    </section>
  );
}

export default Ingredients;
