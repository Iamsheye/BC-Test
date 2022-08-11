import { useState } from "react";
import "./App.scss";
import Button from "./components/Button/Button";
import Pill from "./components/Pill/Pill";

function App() {
  const [count, setCount] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let desc =
    "Lightly toasted flakes drizzled in honey and barley malt Organic, Spelt & delightful, Drizzled in honey and barley malt, Wholegrain Spelt wheat* (93%), Honey* (5%), Barley Malt*, Sea Salt *=Certified organic ingredients";

  return (
    <section>
      <main>
        <div className="product">
          <div className="grocery">
            <img src="/assets/groceries.webp" alt="Groceries" width="50%" />
          </div>
          <h2>Amisa</h2>
          <h1>Organic Spelt Crispy Spelt Flakes</h1>
          <div className="product-info">
            <p className="weight">250g</p>
            <p className="price">£2.99</p>
          </div>
          <div className="cart">
            <div className="cart-info">
              <div>
                <img
                  src="/assets/minus.svg"
                  alt=""
                  onClick={() => count > 0 && setCount(count - 1)}
                />
                {count}
                <img
                  src="/assets/plus.svg"
                  alt=""
                  onClick={() => count < 10 && setCount(count + 1)}
                />
              </div>
            </div>
            <Button text="Update Cart" />
          </div>
          <div className="delivery">
            <div>
              <p className="title">Delivered in:</p>
              <Pill text="2 days" />
            </div>
            <div>
              <p className="title">Next day delivery:</p>
              <Pill text="order by 2:00 PM" />
            </div>
            <div>
              <p className="title">Delivery by:</p>
              <Pill text="Stove" />
            </div>
          </div>
          <div className="about">
            <h3>About the product</h3>
            <p>{showMore ? desc : `${desc.slice(0, 140)}...`}</p>

            {!showMore && (
              <span onClick={() => setShowMore(!showMore)}>
                Read more <img src="/assets/plus.svg" alt="" width="16px" />
              </span>
            )}
          </div>
        </div>
      </main>
    </section>
  );
}

export default App;
