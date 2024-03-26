import React from "react";
import "./HomeStyle.css";

function Home() {
  return (
    <>
      <div class="d-flex justify-content-center"></div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://c.pxhere.com/photos/ba/1e/crowd_dance_party_people_people_dancing_disco_music_fun-672544.jpg!d"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://c.pxhere.com/photos/07/84/person_concert_crowd_man_audience-41796.jpg!d"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://c.pxhere.com/photos/77/0d/munich_oktoberfest_ride_carousel_fun_joy_folk_festival_fairground-1049415.jpg!d"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-target="#carouselExampleControls"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </button>
      </div>

      <hr />

      <div class="row g-0 bg-body-secondary position-relative">
        <div class="col-md-6 mb-md-0 p-md-4">
          <img
            src="https://cdnuploads.aa.com.tr/uploads/Contents/2022/03/29/thumbs_b_c_179faebf967d169e4f9ac00dad08c994.jpg"
            class="w-100"
            alt="..."
          />
        </div>
        <div class="col-md-6 p-4 ps-md-0">
          <h5 class="mt-0">
            Bursa Büyükşehir Belediyesi Kültür ve Sanat Etkinlikleri
          </h5>
          <p>
            Bursa Büyükşehir Belediyesi'nin sizler için düzenlediği çeşitli
            etkinlikler, sanatın, kültürün ve eğlencenin buluşma noktasıdır. Her
            yaşa ve ilgi alanına hitap eden bu etkinlikler, şehrimizin renkli
            atmosferine katkıda bulunmaktadır. Bu platformda, görsel sanatlarla
            ilgilenenler için sanat galerilerinde düzenlenen sergilere, müzik
            tutkunları için konserlere ve daha fazlasına Bursa Büyükşehir
            Belediyesi'nin düzenlediği tüm etkinliklere bu linkten kolayca
            erişebilirsiniz.
          </p>
          <a
            href="https://www.bursa.bel.tr/hizmet-kat/kultur---sanat-17"
            target="_blank"
            class="stretched-link"
          >
            Tıkla Keşfet
          </a>
        </div>
      </div>

      <hr />
      <h2>Haftanın Filmleri</h2>
      <hr />

      <div class="row mb-2">
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">Duvara Karşı</h3>
              <p class="card-text mb-auto">
                Duvara Karşı", Fatih Akın'ın yönettiği ve Hamburg'da geçen bir
                dram filmidir. Cahit ve Sibel'in beklenmedik yakınlaşmasını ve
                karmaşık ilişkilerini konu alır. Göçmenlik deneyimi ve kültürel
                çatışmaları ele alırken, aşkın, kayıpların ve özgürlüğün
                derinliğini inceler.
              </p>
              <a
                href="https://www.imdb.com/title/tt0347048/"
                target="_blank"
                class="stretched-link"
              >
                Detay İçin
              </a>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">Pulp Fiction</h3>
              <p class="mb-auto">
                Pulp Fiction", yönetmen Quentin Tarantino'nun imzasını taşıyan
                kara komedi ve suç türündeki bir filmdir. Üç farklı hikayenin
                kesiştiği film, çarpıcı diyalogları, benzersiz karakterleri ve
                olağandışı anlatımıyla dikkat çeker.
              </p>
              <a
                href="https://www.imdb.com/title/tt0110912/?ref_=nv_sr_srsg_0_tt_6_nm_2_q_pulp"
                target="_blank"
                class="stretched-link"
              >
                Detay İçin
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row mb-2">
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">Ready or Not</h3>
              <p class="card-text mb-auto">
                Ready or Not", evlenen bir çiftin düğün sonrası gerçekleşen
                geleneksel bir oyun gecesini konu alır. Ancak oyunun bir av
                olduğunu öğrenen gelin, hayatta kalma mücadelesi verirken
                ailenin karanlık sırları da gün yüzüne çıkar.
              </p>
              <a
                href="https://www.imdb.com/title/tt7798634/?ref_=nv_sr_srsg_0_tt_8_nm_0_q_ready%2520or"
                target="_blank"
                class="stretched-link"
              >
                Detay İçin
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <h3 class="mb-0">Ahh Belinda (1986)</h3>
              <p class="mb-auto">
                "Ahh Belinda", Ünlü bir oyuncu olan Dilara, yakında piyasaya
                sürülecek olan "Belinda" şampuanı için çekilecek reklam filminde
                oynayacaktır. Reklam çekiminde kenini esrarengiz bir şekilde,
                reklam senaryosunun içinde bambaşka bir hayatın içinde bulur.
              </p>
              <a
                href="https://www.imdb.com/title/tt0278891/?ref_=nv_sr_srsg_3_tt_8_nm_0_q_Ahh%2520bel"
                target="_blank"
                class="stretched-link"
              >
                Detay İçin
              </a>
            </div>
          </div>
        </div>
      </div>

      <main role="main" class="container">
        <div class="row">
          <div class="col-md-8 blog-main">
            <div class="blog-post">
              <h2 class="blog-post-title">Haftanın Albümü</h2>
              <img
                src="https://data.opus3a.com/product_photo/e1/e149228dcdc08271a163d54e67a06a9f/MAX/4164a24efb91a6346d85b23b82733c82.jpg"
                alt=""
                width="350"
                height="320"
              />

              <h5 class="blog-post-meta">Kargo- Yalnızlık Mevsimi </h5>

              <p>
                1998 senesinde üretilmiş olmasına karşın aradan geçen zamanı
                asla hissettirmeyen, eskimeyen bir kargo albümüdür. neticede
                yalnızlık, periyodik bir mevsimdir. bazen uzun sürer, bazen
                kısa. ancak belli enlemlerin üstünde daimidir.
              </p>
              <blockquote></blockquote>
              <p>
                Kargo'nun ilk üç albümünden ve daha sonraki çalışmalarından
                oldukça farklı olan bu albüm, derin sözleri, karanlık atmosferi
                ve tematik yapısıyla Türk rock müziği tarihinde benzersiz bir
                konuma sahip. Erguvan rengi pelerinleri ve ayakkabılarıyla,
                albüm kendine özgü bir tarz ve estetik sunuyor. Her dinleyende
                değişik duyguların oluşmasını sağlayan bu albüm, 26 yıl
                geçmesine rağmen hala dinleyicilerini büyülemeyi başarıyor. Bu
                durum, albümün ne kadar etkileyici ve ölümsüz olduğunun bir
                göstergesidir.
              </p>
              <blockquote>
                <p>
                  <strong>Yalnızlık Mevsimi</strong> albümü içerisinde bulunan
                  şarkılar şunlardır.
                </p>
                <ul>
                  <li>Azizlerin Yalnızlığı</li>
                  <li>Tanrı'ya Dua Et</li>
                  <li>Kalamış Parkı </li>
                  <li>Geçmek Süresi </li>
                  <li>Yalnızlar Çağı</li>
                  <li>Söyle</li>
                  <li>Pastel Zarlar</li>
                  <li>Marilyn Monroe</li>
                  <li>Kaderin Dizaynı</li>
                  <li>Ruhlarda Hiçbir Sızı Yok</li>
                  <li>Bukalemun</li>
                  <li>Arabic Fahişe </li>
                  <li>Boğaziçi</li>
                  <li>Sürgün</li>
                  <li>Azizlerin Yalnızlığına Geri Dönüş</li>
                </ul>
              </blockquote>
            </div>
          </div>

          <aside class="col-md-4 blog-sidebar">
            <div className="p-4 mb-3 bg-light rounded">
              <h1>Bu Ayın Kitap Önerileri</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th>Kitap Adı</th>
                    <th>Yazar Adı</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alemdağ'da Var Bir Yılan</td>
                    <td>Sait Faik Abasıyanık</td>
                  </tr>
                  <tr>
                    <td>Bir Yaz Gecesi Rüyası</td>
                    <td>William Shakespeare</td>
                  </tr>
                  <tr>
                    <td>Gulyabani</td>
                    <td>Hüseyin Rahmi Gürpınar</td>
                  </tr>
                  <tr>
                    <td>Aylak Adam</td>
                    <td>Yusuf Atılgan</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="p-4 mb-3 bg-light rounded">
              <h4 class="">İletişim</h4>
              <ol class="list-unstyled">
                <li>
                  <a href="#">İnstagram</a>
                </li>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
              </ol>
            </div>
          </aside>
        </div>
      </main>

      <footer>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"></li>
            <li class="page-item">
              <a class="page-link" href="#">
                Başa Dön
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Home;
