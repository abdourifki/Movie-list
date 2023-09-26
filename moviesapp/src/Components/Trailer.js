const Trailer = ({ movieId }) => {
    const youtubeLinks = {
      1: 'https://www.youtube.com/watch?v=l6kp780S-os',
      2: 'https://www.youtube.com/watch?v=mEsBa_ss-nA',
      3: 'https://www.youtube.com/watch?v=aSiDu3Ywi8E',
      4: 'https://www.youtube.com/watch?v=UWfgm20-LTM'
    };
  
    const youtubeLink = youtubeLinks[movieId];
  
    return (
      <div>
        <iframe 
          title="Trailer"
          width="560" 
          height="315" 
          src={youtubeLink.replace("watch?v=", "embed/")} 
          frameBorder="0" 
          allowFullScreen
        ></iframe>
      </div>
    );
  };
  export default Trailer;