import React, { useContext } from "react";
import { AppContext } from "../context/GlobalContext";

function KitapListesi() {
  const { books, AddToCart } = useContext(AppContext);
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {books.map((book) => (
            <div className="col-lg-3 col-md-4 col-sm-12 my-3">
              <div className="card m-auto rounded shadow-lg">
                <img
                  className="card-img-top"
                  src={book.image_url}
                  height={400}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h5 className="card-title text-truncate">{book.title}</h5>
                  <p className="card-text">{book.authors}</p>
                  <p className="card-text">Sayfa Sayısı: {book.num_pages}</p>
                  <button
                    className="btn btn-outline-success"
                    onClick={() => AddToCart(book)}
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

export default KitapListesi;
