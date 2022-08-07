import React from "react";

function DownloadApp() {
  return (
    <div className="download">
      <span>Download the app</span>
      <div className="download-images">
        <img src={require("../img/App Store.png")} alt="appStore" />
        <img src={require("../img/Google Play.png")} alt="GooglePlay" />
      </div>
    </div>
  );
}

export default DownloadApp;
