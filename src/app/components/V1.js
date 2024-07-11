const VideoOne = () => {
  return (
      <>
        <video width="600" height="300" loop muted autoPlay >
          <source src="/v1.mp4" type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </>
  );
};

export default VideoOne;