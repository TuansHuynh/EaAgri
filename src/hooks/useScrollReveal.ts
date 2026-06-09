import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function useScrollReveal() {
  useEffect(() => {
    const options = {
      distance: "50px",
      origin: "bottom" as const,
      duration: 1000,
    };

    ScrollReveal().reveal(".header__img img", {
      ...options,
      origin: "left",
    });

    ScrollReveal().reveal(".header__content h1", {
      ...options,
      delay: 500,
    });

    ScrollReveal().reveal(".header__content .section__description", {
      ...options,
      delay: 1000,
    });

    ScrollReveal().reveal(".header__links", {
      ...options,
      delay: 1500,
    });

    ScrollReveal().reveal(".story__image img", {
      ...options,
      origin: "left",
    });

    ScrollReveal().reveal(".story__content .section__header", {
      ...options,
      delay: 500,
    });

    ScrollReveal().reveal(".story__content .section__description", {
      ...options,
      delay: 1000,
      interval: 500,
    });

    ScrollReveal().reveal(".feature__grid li", {
      ...options,
      interval: 500,
    });

    ScrollReveal().reveal(".download__image img", options);

    ScrollReveal().reveal(".membership__btn", {
      ...options,
      delay: 1000,
    });
  }, []);
}