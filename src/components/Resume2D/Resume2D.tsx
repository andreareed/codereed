import { Unity, useUnityContext } from "react-unity-webgl";
import "./Resume2D.scss";
import { useEffect, useState } from "react";

const Resume2D = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "resume2D/resume.loader.js",
    dataUrl: "resume2D/resume.data",
    frameworkUrl: "resume2D/resume.framework.js",
    codeUrl: "resume2D/resume.wasm",
  });

  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

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

  return (
    <div className="resume2d">
      <Unity
        unityProvider={unityProvider}
        style={{ width: "100vw", height: "auto" }}
        devicePixelRatio={devicePixelRatio}
      />
    </div>
  );
};

export default Resume2D;
