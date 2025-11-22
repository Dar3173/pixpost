import { useState, useEffect } from "react";

export default function useImageTools(canvasRef, id) {
  const [image, setImage] = useState(null);

  const [imageScale, setImageScale] = useState(1);
  const [imgSize, setImgSize] = useState({ width: 200, height: 200 });
  const [imgPosition, setImgPosition] = useState({ x: 50, y: 50 });

  // Imagen inicial según plantilla
  useEffect(() => {
    if (id === "01") {
      setImage("/templates/uñas.png");
    } else if (id === "02") {
      setImage("/templates/hambur.png");
    }
    else if (id === "03") {
      setImage("/templates/black.png");
    }
    
  }, [id]);

  // Tamaño + posición inicial según plantilla
  useEffect(() => {
    if (!canvasRef.current || !image) return;

    const canvas = canvasRef.current;
    const cw = canvas.offsetWidth;
    const ch = canvas.offsetHeight;

    let initialW, initialH;
    let posX, posY;

    if (id === "01") {
      // ⭐ Plantilla 01
      initialW = cw * 1.4;
      initialH = initialW;     

      posX = cw - initialW - -120; 
      posY = ch - initialH - -1;

    } else if (id === "02") {
      // ⭐ Plantilla 02 
      initialW = cw * 0.9;    
      initialH = initialW;

      posX = cw / 2 - initialW / 2; 
      posY = ch / 2 - initialH / 2.4;
    }
    else if (id === "03") {
      // ⭐ Plantilla 03 
      initialW = cw * 0.6;    
      initialH = initialW;

      posX = cw / 2 - initialW / 2; 
      posY = ch / 2 - initialH / 2.7;
    }
    


    setImgSize({ width: initialW, height: initialH });
    setImgPosition({ x: posX, y: posY });
    setImageScale(1);
  }, [canvasRef, image, id]);

  // Subir imagen manual
  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImage(url);

    const img = new Image();
    img.onload = () => {
      const maxW = 260;
      const ratio = img.width / img.height;

      setImgSize({
        width: maxW,
        height: maxW / ratio,
      });

      setImgPosition({ x: 40, y: 40 });
      setImageScale(1);
    };
    img.src = url;
  };

  const removeImage = () => setImage(null);

  return {
    image,
    imgSize,
    imgPosition,
    imageScale,
    setImageScale,
    setImgPosition,

    handleImageUpload,
    removeImage,
  };
}
