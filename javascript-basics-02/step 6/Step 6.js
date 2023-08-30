let imgs = document.querySelectorAll('img');
let index = 0;
let imgArray = [];

imgs.forEach((image) => {
  imgArray.push(image.src);

  image.addEventListener("mouseover", () => {
    index = (index + 1) % imgs.length;
    image.src = `images/image${index + 1}.jpg`;
  });

  image.addEventListener("mouseout", () => {
    index = (index - 1 + imgs.length) % imgs.length;
    image.src = imgArray[index];
  });
});
