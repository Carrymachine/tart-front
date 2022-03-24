import Video from "../../../styles/contents/headSection/bgVideo.style";

const bannerVideo = () => {
  return (
    <Video autoPlay loop muted playsInline>
      <source type="video/mp4" src="https://prap-assets.s3.ap-northeast-2.amazonaws.com/baner+01.mp4" />
    </Video>
  );
};

export default bannerVideo;
