const src =
  "https://www.pexels.com/video/planet-earth-in-close-up-view-4478322/";

const CarouselVideo = () => {
  return (
    <video controls width="100%">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default CarouselVideo;