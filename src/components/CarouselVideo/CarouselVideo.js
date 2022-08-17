const src =
  "https://assets.mixkit.co/videos/preview/mixkit-world-map-in-digital-environment-12742-large.mp4";

const CarouselVideo = () => {
  return (
    <video loop muted autoPlay controls = '' width="100%">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default CarouselVideo;