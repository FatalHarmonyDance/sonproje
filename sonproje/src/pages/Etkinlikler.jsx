import React, { useState, useEffect } from "react";
import "./Etkinlik.css";

function Etkinlikler() {
  return (
    <>
      <h1>Etkinlikler</h1>
      <div className="input-container">
        <input
          type="date"
          className="custom-date-input"
          placeholder="Tarihi seçin"
        ></input>
      </div>
      <hr />
      <div
        class="btn-group d-flex justify-content-center"
        role="group"
        aria-label="Basic mixed styles example"
      >
        <button type="button" class="btn btn-danger">
          Hepsi
        </button>
        <button type="button" class="btn btn-warning">
          Müzik
        </button>
        <button type="button" class="btn btn-success">
          Sahne
        </button>
        <button type="button" class="btn btn-danger">
          Sinema
        </button>
        <button type="button" class="btn btn-warning">
          Müze
        </button>
        <button type="button" class="btn btn-success">
          Spor
        </button>
        <button type="button" class="btn btn-danger">
          Etkinlikler
        </button>
      </div>
      <hr />
      <div className="row row-cols-sm-5">
        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/dracula-muzikali-16048.png"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Dracula Müzikali</h5>
            <p className="card-text">Tayyare Kültür Merkezi</p>
            <div class="time-frame">
              <div id="tarih-bolumu">26.02.2024</div>
              <div id="saat-bolumu">20.30</div>
            </div>
            <hr />
            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/dracula-muzikali"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biletler İçin
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/son--feci-bisiklet-konseri-97595.png"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title" id="shortText">
              Son Feci Bisiklet
            </h5>
            <p className="card-text" id="shortContent">
              Merinos AKM Bursa
            </p>
            <div class="time-frame">
              <div id="tarih-bolumu">28.02.2024</div>
              <div id="saat-bolumu">20:30</div>
            </div>
            <hr />
            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/son--feci-bisiklet-konseri"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biletler İçin
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/badem-konseri-29965.jpg"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Badem</h5>
            <p className="card-text">Hayal Kahvesi Bursa</p>
            <div class="time-frame">
              <div id="tarih-bolumu">06.03.2024</div>
              <div id="saat-bolumu">21:30</div>
            </div>
            <hr />

            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/badem-konseri"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biletler İçin
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/feel-the-fest-bursa-92925.jpg"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Feel The Fest</h5>
            <p className="card-text">Bursa Suare</p>
            <div class="time-frame">
              <div id="tarih-bolumu">08.03.2024 09.03.2024 </div>
            </div>
            <hr />
            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/feel-the-fest-bursa"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biletler İçin
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/evgeny-grinko-konseri-70075.png"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Evgeny Grinko</h5>
            <p className="card-text">Merinos AKM Bursa.</p>
            <div class="time-frame">
              <div id="tarih-bolumu">12.03.2024</div>
              <div id="saat-bolumu">21:00</div>
            </div>
            <hr />
            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/evgeny-grinko-konseri"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biletler İçin
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/sasirt-beni-oyunu-75707.jpeg"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Şaşırt Beni</h5>
            <p className="card-text">BAOB Sahne</p>
            <div class="time-frame">
              <div id="tarih-bolumu">18.03.2024</div>
              <div id="saat-bolumu">20:30</div>
            </div>
            <hr />
            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/sasirt-beni-oyunu"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biletler İçin
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/sergen-deveci-74746.png"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Sergen Deveci</h5>
            <p className="card-text">BAOB Sahne Bursa</p>
            <div class="time-frame">
              <div id="tarih-bolumu">21.03.2024</div>
              <div id="saat-bolumu">20:30</div>
            </div>
            <hr />
            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/sergen-deveci"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biletler İçin
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/cem-adrian-konseri-97025.JPG"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Cem Adrian</h5>
            <p className="card-text"> Merinos AKM Bursa</p>
            <div class="time-frame">
              <div id="tarih-bolumu">22.03.2024</div>
              <div id="saat-bolumu">21:00</div>
            </div>
            <hr />
            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/cem-adrian-konseri"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biletler İçin
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/okan-cabalar-75994.jpg"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Okan Cabalar </h5>
            <p className="card-text">BAOB Sahne</p>
            <div class="time-frame">
              <div id="tarih-bolumu">17.04.2024</div>
              <div id="saat-bolumu">20:30</div>
            </div>
            <hr />
            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/okan-cabalar"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biletler İçin
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/can-gox-26720.png"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Can Gox </h5>
            <p className="card-text">Hayal Kahvesi Bursa</p>
            <div class="time-frame">
              <div id="tarih-bolumu">20.04.2024</div>
              <div id="saat-bolumu">22:00</div>
            </div>
            <hr />
            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/can-gox-konseri"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Biletler İçin
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/jekyll-hyde-23113.jpg"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Jekyll&Hyde</h5>
            <p className="card-text"> Merinos AKM Bursa</p>
            <div class="time-frame">
              <div id="tarih-bolumu">21.04.2024</div>
              <div id="saat-bolumu">21:00</div>
            </div>
            <hr />
            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/jekyll-hyde"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biletler İçin
            </a>
          </div>
        </div>

        <div className="card">
          <img
            src="https://cdn.bubilet.com.tr/files/Etkinlik/husnu-arkan-konseri-16934.jpg"
            className="card-img-top"
            alt="..."
          />

          <div className="card-body">
            <h5 className="card-title">Hüsnü Arkan </h5>
            <p className="card-text">Hayal Kahvesi Bursa</p>
            <div class="time-frame">
              <div id="tarih-bolumu">27.04.2024</div>
              <div id="saat-bolumu">21:30</div>
            </div>
            <hr />
            <a
              href="https://www.bubilet.com.tr/bursa/etkinlik/husnu-arkan-konseri"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Biletler İçin
            </a>
          </div>
        </div>
      </div>

      <footer>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Etkinlikler;
