import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

function ItemList() {
  const navigate = useNavigate();

  const {
    items,
    AddToCart,
    quantities,
    handleQuantityChange,
    searchResults,
    inputGirdi,
  } = useContext(AppContext);
  const displayItems = inputGirdi ? searchResults : items;
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {displayItems.map((item) => (
            <div className="col-lg-3 col-md-4 col-sm-12 my-3" key={item.id}>
              <div className="card m-auto rounded shadow">
                <img
                  className="card-img-top"
                  src={item.thumbnail}
                  height={300}
                  alt="Card cap"
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate(`urundetay/${item.id}`)}
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{item.title}</h5>
                  <p className="card-text">Fiyat: {item.price} ₺</p>
                  <input
                    type="number"
                    min="1"
                    value={quantities[item.id] || 1}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                    className="p-2 border rounded"
                    style={{ fontSize: "12px" }}
                  />
                  <button
                    className="btn btn-success"
                    onClick={() => AddToCart(item)}
                  >
                    Sepete Ekle
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemList;
