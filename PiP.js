Promise.resolve(document.pictureInPictureElement)
  .then((pipElement) =>
    pipElement
      ? document.exitPictureInPicture()
      : [].reduce.call(
          document.getElementsByTagName('video'),
          (a, b) => ((a ? a.offsetWidth : 0) * (a ? a.offsetHeight : 0) > b.offsetWidth * b.offsetHeight ? a : b),
          null
        )
  )
  .then((video) => (video === null ? alert('No video found') : video !== undefined && video.requestPictureInPicture()))
  .catch((error) => alert(error.message))
