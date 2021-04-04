import React from "react";
import "./css/style.css";
import images_biodata from "./images/46.jpg";

const Biodata = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="main_container">
          <div className="item">
            <table border="1">
              <thead>
                <tr>
                  <th style={{ width: 400, textAlign: "center" }}>
                    Images Biodata
                  </th>
                  <th colSpan="2" style={{ textAlign: "center" }}>
                    Detail Biodata
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td rowSpan="10">
                    <img src={images_biodata} className="image_biodata"></img>
                  </td>
                </tr>
                <p>
                  <p>
                    Channel YouTube :{" "}
                    <a href="https://youtube.com/playlist?list=PLU2YBQrZlGpKPC_BCxOrLJll5pAFVJPJa">
                      Klik disini
                    </a>
                  </p>
                  <p>
                    LinkedIn :{" "}
                    <a href="https://www.linkedin.com/in/bagus-satria-217aaa1b5/">
                      Klik disini
                    </a>
                  </p>
                  <p>
                    GitHub :{" "}
                    <a href="https://github.com/BagusSatria123">Klik disini</a>
                  </p>
                  <p>
                    Portfolio :{" "}
                    <a href="https://bagussatria123.github.io/">Klik disini</a>
                  </p>
                </p>
                <tr>
                  <td>Nama : Bagus Satria Putra</td>
                </tr>
                <tr>
                  <td>Tempat, Tanggal Lahir : Malang, 17 - November - 2000</td>
                </tr>
                <tr>
                  <td>Jenis Kelamin : Laki - laki</td>
                </tr>
                <tr>
                  <td>
                    Alamat : Simp Tondano Barat 4 Blok A3 F22 Sawojajar, Malang
                  </td>
                </tr>
                <tr>
                  <td>Agama : Islam</td>
                </tr>
                <tr>
                  <td>Status : Mahasiswa</td>
                </tr>
                <tr>
                  <td>Perguruan Tinggi : Politeknik Negeri Malang</td>
                </tr>
                <tr>
                  <td>Hobi : Renang, Catur, Marathon, Karate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
