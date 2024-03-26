import React from "react";
import "./ContactStyle.css";

function Contact() {
  return (
    <>
      <div class="form-container">
        <form class="row g-3">
          <div class="col-md-6">
            <label for="inputName" class="form-label">
              Ad Soyad
            </label>
            <input type="name" class="form-control" id="inputName" />
          </div>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                E-posta
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Şifre
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              <label for="inputAddress" className="form-label">
                Adres
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder=""
              />
            </div>
            <div className="col-12">
              <label for="inputAddress2" className="form-label">
                Adres 2
              </label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder=""
              />
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">
                Şehir
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">
                Öğrenim Durumu
              </label>
              <select id="inputState" className="form-select">
                <option selected>...</option>
                <option>İlkokul</option>
                <option>Ortaokul</option>
                <option>Lise</option>
                <option>Ön Lisans</option>
                <option>Lisans</option>
                <option>Yüksek Lisans</option>
                <option>Doktora</option>
              </select>
            </div>
            <div className="col-12">
              <p>Cinsiyet</p>
              <div className="form-check">
                <input
                  className="form-check-input checked-checkbox"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Kadın
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-check">
                <input
                  className="form-check-input checked-checkbox"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Erkek
                </label>
              </div>
            </div>
            <div className="col-12">
              <button type="submit" class="btn btn-primary btn-lg">
                Giriş
              </button>
            </div>
          </form>
        </form>
      </div>
    </>
  );
}

export default Contact;
