import { Unity, useUnityContext } from "react-unity-webgl";
import "./Resume2D.scss";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

const Resume2D = () => {
  const { unityProvider, isLoaded, loadingProgression, requestFullscreen } =
    useUnityContext({
      loaderUrl: "resume2D/resume.loader.js",
      dataUrl: "resume2D/resume.data",
      frameworkUrl: "resume2D/resume.framework.js",
      codeUrl: "resume2D/resume.wasm",
    });

  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  const loadingPercentage = Math.round(loadingProgression * 100);

  useEffect(
    function () {
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );

      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );

  function handleClickEnterFullscreen() {
    requestFullscreen(true);
  }

  return (
    <div className="resume2d">
      {!isLoaded && (
        <div className="loading-overlay">
          <p>Loading Interactive Resume... ({loadingPercentage}%)</p>
          <div className="progress-bar">
            <div style={{ width: `${loadingPercentage}%` }}></div>
          </div>
        </div>
      )}
      <Unity
        unityProvider={unityProvider}
        className="resume2d__unity"
        devicePixelRatio={devicePixelRatio}
      />
      {isLoaded && (
        <Button onClick={handleClickEnterFullscreen}>Enter Fullscreen</Button>
      )}
    </div>
  );
};

export default Resume2D;
