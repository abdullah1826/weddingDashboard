import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Modal, Box, Button, Slider } from "@mui/material";
import styled from "styled-components";

const CropperContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  background-color: #333;
`;

const Controls = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const ImageCropperModal = ({
  open,
  handleClose,
  imageSrc,
  onCropComplete,
  aspect,
  uploadImage,
  setStateImg,
}) => {
  const getCroppedImg = (imageSrc, crop) => {
    const createImage = (url) =>
      new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => resolve(image));
        image.addEventListener("error", (error) => reject(error));
        image.src = url;
      });

    const getCroppedImg = async (imageSrc, crop) => {
      const image = await createImage(imageSrc);
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const scaleX = image.naturalWidth / image.width;
      const scaleY = image.naturalHeight / image.height;

      canvas.width = crop.width;
      canvas.height = crop.height;

      ctx.drawImage(
        image,
        crop.x * scaleX,
        crop.y * scaleY,
        crop.width * scaleX,
        crop.height * scaleY,
        0,
        0,
        crop.width,
        crop.height
      );

      const base64Image = canvas.toDataURL("image/jpeg");
      return base64Image;
    };

    return getCroppedImg(imageSrc, crop);
  };

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropCompleteCallback = useCallback(
    (croppedArea, croppedAreaPixels) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  const handleCrop = async () => {
    const croppedImageUrl = await getCroppedImg(imageSrc, croppedAreaPixels);
    onCropComplete(croppedImageUrl);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: "80%", md: "70%", lg: "60%", xl: "50%" },
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
        }}
      >
        {imageSrc && (
          <>
            <CropperContainer>
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={aspect}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropCompleteCallback}
              />
            </CropperContainer>
            <Controls>
              <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                color=""
                aria-labelledby="zoom-slider"
                onChange={(e, zoom) => setZoom(zoom)}
                sx={{
                  color: "#4C6156",
                  "& .MuiSlider-thumb": {
                    borderRadius: "50%",
                    backgroundColor: "#4C6156",
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#4C6156",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "#d3d3d3",
                  },
                }}
              />
              <div className="w-[100%]  flex gap-5 justify-center">
                <Button
                  variant="contained"
                  onClick={handleClose}
                  sx={{
                    backgroundColor: "#4C6156",
                    "&:hover": {
                      backgroundColor: "#3a4a45", // Darken color for hover effect
                    },
                    color: "#ffffff", // Text color
                  }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCrop}
                  sx={{
                    backgroundColor: "#4C6156",
                    "&:hover": {
                      backgroundColor: "#3a4a45", // Darken color for hover effect
                    },
                    color: "#ffffff", // Text color
                  }}
                >
                  Crop
                </Button>
              </div>
            </Controls>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default ImageCropperModal;
