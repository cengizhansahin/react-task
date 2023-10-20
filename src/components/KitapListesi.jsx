import axios from "axios";
import React, { useEffect, useState } from "react";

function KitapListesi() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://example-data.draftbit.com/books?_limit=20")
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          {books.map((book) => (
            <div className="col-md-3 my-3">
              <div className="card m-auto rounded shadow-lg">
                <img
                  className="card-img-top"
                  src={book.image_url}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <a href="#" className="btn btn-primary">
                    Sepete Ekle
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        ;
      </div>
    </div>
  );
}

export default KitapListesi;
