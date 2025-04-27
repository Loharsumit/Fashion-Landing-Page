document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  document
    .querySelectorAll(".hero, .category-card, .product-card")
    .forEach((el) => {
      observer.observe(el);
    });
});

document
  .querySelector(".newsletter-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector("input[type='email']");
    if (emailInput.value) {
      alert(`Thanks for joining, ${emailInput.value}!`);
      emailInput.value = "";
    } else {
      alert("Please enter a valid email.");
    }
  });

document.querySelectorAll(".product-card .btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Item added to cart (not really, this is just a demo!)");
  });
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const heartIcons = document.querySelectorAll(".fa-heart");
  const eyeIcons = document.querySelectorAll(".fa-eye");

  heartIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      icon.parentElement.classList.toggle("active");
    });
  });

  eyeIcons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {
      icon.parentElement.style.color = "#555";
    });
    icon.addEventListener("mouseout", () => {
      icon.parentElement.style.color = "#333";
    });
  });
});

const stars = document.querySelectorAll(".stars");
stars.forEach((star) => {
  star.addEventListener("mouseover", () => {
    star.style.color = "#ffc107";
  });
  star.addEventListener("mouseout", () => {
    star.style.color = "#ffc107";
  });
});
