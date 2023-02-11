import React from "react";
import defaultPicture from "../assets/profile_defult_image.png";
function ProfileImage(props) {
  const { url, className, alt, error, width, height } = props;
  let imageSource = defaultPicture;
  if (url !== undefined && error === undefined) {
    imageSource = url;
  }
  return (
    <img
      className={className}
      alt={alt}
      src={imageSource}
      style={{
        width: width !== undefined ? `${width}` : "",
        height: height !== undefined ? `${height}` : "",
      }}
    />
  );
}

export default ProfileImage;
