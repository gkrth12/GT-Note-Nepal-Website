 const colors = ["#1E90FF", "#FF5733", "#28A745", "#FFC107", "#9B59B6", "#E91E63", "#00BCD4"];

    function activateLink(element) {
      document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
        link.style.color = "var(--text)";
        link.style.background = "transparent";
      });

      const color = colors[Math.floor(Math.random() * colors.length)];
      element.classList.add("active");
      element.style.color = "#fff";
      element.style.background = color;

      element.style.transform = "scale(1.2)";
      setTimeout(() => {
        element.style.transform = "scale(1)";
      }, 300);
    }

    function toggleMenu(hamburger) {
      const menu = document.getElementById("menu");
      menu.classList.toggle("show");

      // Animate hamburger
      hamburger.classList.toggle("active");
    }