import React from "react";

const MusicCollection = (props) => {
  return (
    <>
      <h2>.: DISCOGRAPHY :.</h2>
      <p>Some of my music is here...</p>
      <iframe src="https://open.spotify.com/embed/artist/1wrQRpPYoTsuQSAqLVlK2H" width="60%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <p>... and some is here... </p>
      <iframe src="https://open.spotify.com/embed/album/251xQq4FvsvuDxALfkch3s?theme=0" width="60%" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      <p>... there's also a sample library I made here... </p>
      <iframe width="60%" height="315" src="https://www.youtube.com/embed/tHET1qZwnII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </>
  );
};

export default MusicCollection;
