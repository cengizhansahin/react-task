import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";
function Cart() {
  const { cart, RemoveFromCart, total } = useContext(AppContext);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <h1>Toplam Fİyat: {total} ₺ </h1>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div className="col-lg-3 col-md-4 col-sm-12 my-3">
                <div className="card m-auto rounded shadow">
                  <img
                    className="card-img-top"
                    src={item.thumbnail}
                    height={300}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <h5 className="card-title text-truncate">{item.title}</h5>
                    <p className="card-text">Fiyat: {item.price}</p>
                    <p className="card-text">Ürün Miktarı: {item.quantity}</p>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => RemoveFromCart(item.id)}
                    >
                      Sepetten Çıkar
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="alert alert-danger" role="alert">
              SEPETE ÜRÜN YOK
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
