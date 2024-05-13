import { parseGIF, decompressFrames } from "gifuct-js";

export async function getGifDuration(gifURL) {
  var frames = await fetch(gifURL)
    .then((resp) => resp.arrayBuffer())
    .then((buff) => {
      var gif = parseGIF(buff);
      var _frames = decompressFrames(gif, true);
      return _frames;
    });
  // get total time in ms
  var totalTime = frames.map((frame) => frame.delay).reduce((a, b) => a + b);

  return totalTime;
}
