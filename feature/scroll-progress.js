(function () {
  const bar = document.createElement("div");
  bar.style.position = "fixed";
  bar.style.top = "0";
  bar.style.left = "0";
  bar.style.height = "4px";
  bar.style.background = "#00ffcc";
  bar.style.width = "0%";
  bar.style.zIndex = "9999";

  document.body.appendChild(bar);

  window.addEventListener("scroll", function () {
    const scrollTop = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percent = (scrollTop / height) * 100;
    bar.style.width = percent + "%";
  });
})();
