export default function (filesName) {
  const imglist = [
    'png',
    'jpg',
    'jpeg',
    'bmp',
    'gif',
    'webp',
    'psd',
    'svg',
    'tiff'
  ];

  return imglist.includes(filesName)

}
