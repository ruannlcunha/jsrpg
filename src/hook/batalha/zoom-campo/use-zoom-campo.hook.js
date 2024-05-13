import { useState } from "react";

export function useZoomCampo() {
  const [zoom, setZoom] = useState(100);

  function aumentarZoom() {
    zoom !== 100 ? setZoom(zoom + 25) : null;
  }

  function diminuirZoom() {
    zoom !== 50 ? setZoom(zoom - 25) : null;
  }

  return { zoom, aumentarZoom, diminuirZoom };
}
