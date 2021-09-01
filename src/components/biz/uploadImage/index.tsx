/*
 * @Author: busyzz
 * @Date: 2021-08-31 15:23:29
 * @Description:
 */
import React, { FC } from 'react';
import ImgCrop, { ImgCropProps } from 'antd-img-crop';
import { Upload } from 'antd';
import { UploadProps } from 'antd/lib/upload';

/**
 * @see https://www.npmjs.com/package/antd-img-crop
 */
interface IUploadImageProps extends ImgCropProps {
  value?: UploadProps['fileList'];
  onChange?: (value: UploadProps['fileList']) => void;
  useCrop?: boolean;
}
const UploadImage: FC<IUploadImageProps> = ({
  value = [],
  onChange,
  useCrop,
  ...restProps
}) => {
  const uploadOnChange = ({ fileList: newFileList }) => {
    onChange(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    if (imgWindow) {
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };
  const uploadCom = (
    <Upload
      action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
      listType='picture-card'
      fileList={value}
      onChange={uploadOnChange}
      onPreview={onPreview}
    >
      {value.length < 3 && '+ Upload'}
    </Upload>
  );
  return useCrop ? (
    <ImgCrop grid {...restProps}>
      {uploadCom}
    </ImgCrop>
  ) : (
    uploadCom
  );
};
UploadImage.defaultProps = {
  useCrop: true,
};
export default UploadImage;
