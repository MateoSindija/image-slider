const SLIDE_DURATION = 200;

$(document).ready(() => {
  const topRow = $(".container__images__top"); //top row container
  const bottomRow = $(".container__images__bottom__imagesContainer"); //bottom row container

  const moveImgToEnd = (image, row) => {
    row.animate({ left: -image.width() }, SLIDE_DURATION, () => {
      image.appendTo(row).show();
      row.css("left", "");
    });
  };

  const moveImgToBeggining = (image, row) => {
    row.animate({ left: image.width() }, SLIDE_DURATION, () => {
      image.prependTo(row);
      row.css("left", "");
    });
  };

  $(".container__images__bottom__buttonContainer__left").on("click", () => {
    const firstTop = $(".container__images__top img").first();
    const firstBottom = $(
      ".container__images__bottom__imagesContainer img"
    ).first();

    //move image to end
    moveImgToEnd(firstTop, topRow);
    moveImgToEnd(firstBottom, bottomRow);
  });

  $(".container__images__bottom__buttonContainer__right").on("click", () => {
    const lastTop = $(".container__images__top img").last();
    const lastBottom = $(
      ".container__images__bottom__imagesContainer img"
    ).last();

    //move image to begging
    moveImgToBeggining(lastTop, topRow);
    moveImgToBeggining(lastBottom, bottomRow);
  });
});
