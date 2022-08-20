const slide = (width, row) => {
    row.css("transition", "transform 0.6s ease-in-out");
    row.css("transform", `translateX(-${width}px, -50%)`);
};

const moveImgToEnd = (image, row) => {
    image.hide(() => {
        row.append(image.show());
    });
};

const moveImgToBeggining = (image, row) => {
    image.hide(() => {
        row.prepend(image.show());
    });
};

$(document).ready(() => {
    const topRowImages = $(".container__images__top img");
    const bottomRowImages = $(
        ".container__images__bottom__imagesContainer img"
    );

    const topRow = $(".container__images__top");
    const bottomRow = $(".container__images__bottom__imagesContainer");

    $(".container__images__bottom__buttonContainer__left").on("click", () => {
        const firstTop = $(".container__images__top img").first();
        const firstBottom = $(
            ".container__images__bottom__imagesContainer img"
        ).first();

        const firstTopWidth = firstTop.width();
        const firstBottomWidth = firstBottom.width();

        moveImgToEnd(firstTop, topRow);
        moveImgToEnd(firstBottom, bottomRow);

        slide(firstTopWidth, topRowImages);
        slide(firstBottomWidth, bottomRowImages);
    });

    $(".container__images__bottom__buttonContainer__right").on("click", () => {
        const lastTop = $(".container__images__top img").last();
        const lastBottom = $(
            ".container__images__bottom__imagesContainer img"
        ).last();

        const lastTopWidth = lastTop.width();
        const lastBottomWidth = lastBottom.width();

        moveImgToBeggining(lastTop, topRow);
        moveImgToBeggining(lastBottom, bottomRow);

        slide(lastTopWidth, topRowImages);
        slide(lastBottomWidth, bottomRowImages);
    });
});
