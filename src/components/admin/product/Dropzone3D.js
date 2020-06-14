import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from 'reactstrap';

export const Dropzone3D = props => {
  const onDrop = useCallback(
    acceptedFiles => {
      let productImage = acceptedFiles[0];
      props.setFieldValue("productImage", productImage);
    },
    [props]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div
      {...getRootProps({
        onClick: event => event.preventDefault()
      })}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <Button color='info'>Drop the image here ...</Button>
      ) : (
        <Button color='info' outline>
          Drag n drop or click to select an image
        </Button>
      )}
    </div>
  );
};
