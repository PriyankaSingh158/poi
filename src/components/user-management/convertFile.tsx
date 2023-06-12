export const convertFileToBase64 = (userInpFile: File) =>
  new Promise((resolve) => {
    const reader = new FileReader();

    reader.readAsDataURL(userInpFile);

    reader.onload = () => {
      resolve({
        base64: reader.result,
      });
    };
  });
