import Webcam from "react-webcam";
import { useCallback, useRef, useState } from "react"; // import useState

const CustomWebcam = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null)
  
  const capture = useCallback(() => {
      const imageSrc = webcamRef.current.getScreenshot();
      const a = document.createElement('a')
      a.download = 'picture.jpg'
      a.href = imageSrc
      a.click()

      setImage(imageSrc);
      
  },[webcamRef]);

  return (

     <>
      <div className="container">
        <Webcam 
          height={720}
          width={1280} 
          audio={false}
          screenshotFormat="image/jpeg"
          ref={webcamRef}
        />
        
      </div>
      <div className="container">
        <button onClick={capture}>Tomar foto</button>
      </div>
    </>
   
  );
};

export default CustomWebcam;