import React from "react";
import "./AboutStyle.css";

export default function About() {
  return (
    <>
      <div class="p-5 mb-4 bg-body-tertiary rounded-3">
        <div class="container-fluid py-5">
          <h1 class="display-5 fw-bold">Biz Kimiz?</h1>
          <p class="col-md-8 fs-4">
            Hoş geldiniz! Canınız sıkıldığında veya eğlence aradığınızda, sizler
            için doğru adres bizleriz. Bu web sitesi, Bursa'da o gün
            gerçekleşecek etkinlikler, konserler, tiyatrolar ve daha fazlası
            hakkında bilgi alabileceğiniz bir platformdur. Şehrin sunduğu her
            türlü etkinliği burada bulabilirsiniz.
          </p>
        </div>
      </div>

      <div class="row align-items-md-stretch">
        <div class="col-md-6">
          <div class="h-100 p-5 text-bg-dark rounded-3">
            <h2>Amacımız</h2>
            <p>
              Amacımız, şehrin sunduğu etkinlikleri bir araya getirerek
              ziyaretçilere kolayca erişilebilir hale getirmek ve onlara
              unutulmaz deneyimler yaşatmaktır. Profesyonel bir ekip olarak, her
              gün Bursa'da gerçekleşen etkinlikleri takip ediyor, en güncel
              bilgileri sizinle paylaşıyoruz. Gününüzü daha renkli ve dolu dolu
              geçirmek için buradayız! Siz de bize katılın ve Bursa'nın
              eğlencesine eşlik edin...
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="h-100 p-5 bg-body-tertiary border rounded-3">
            <h2>Eğlenmek İstiyorsan Takıl Bize</h2>
            <p>
              Eğlence arayanların adresi! Her gününüzü farklı bir etkinlikle
              geçirmek istiyorsanız, konserler, tiyatrolar, sergiler ve daha
              fazlası her gün burada sizi bekliyor. Hayatınıza renk katmak ve
              unutulmaz anlar yaşamak için bizi takip edin. Her gün yeni bir
              eğlence için hazır olun!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
