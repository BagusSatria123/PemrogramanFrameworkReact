import React from "react";

const Post = (props) => {
  return (
    <div className="artikel">
      <div className="gambar-artikel">
        <img
          src="http://placeimg.com/80/80/tech"
          alt="Gambar Tumbnail Artikel"
        />
      </div>
      <div className="konten-artikel">
        <div className="judul-artikel">{props.nama}</div>
        <div className="judul-artikel">{props.hp}</div>
        <div className="judul-artikel">{props.angkatan}</div>
        <div className="judul-artikel">{props.status}</div>
        <p className="isi-artikel">{props.alamat}</p>
        <button
          className="btn btn-sm btn-warning"
          onClick={() => props.hapusArtikel(props.idArtikel)}
        >
          Hapus
        </button>
      </div>
    </div>
  );
};

export default Post;
