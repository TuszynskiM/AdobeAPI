class Pagination {
  constructor(categoryName) {
    this.category = categoryName;
    this.qtyImg = 40;
    this.adobeApi = new AdobeAPI();
    this.adobeApi.connection(this.category, this.qtyImg, 0);
    this.pages(1);
  }

  pages(index) {
    const div = document.querySelectorAll(".pagination ul");
    div.forEach(div => {
      div.innerHTML = "";
      if (index > 1) {
        const liPrevious = document.createElement("li");
        const aPrevious = document.createElement("a");

        aPrevious.addEventListener("click", this.changePage.bind(this));

        aPrevious.title = "Poprzednia";
        aPrevious.textContent = "Poprzednia";

        liPrevious.appendChild(aPrevious);
        div.appendChild(liPrevious);
      }

      const page = index > 10 ? index - 9 : 1;
      for (let i = page; i < parseInt(page) + 20; i++) {
        const liPageNumber = document.createElement("li");
        const aPageNumber = document.createElement("a");

        aPageNumber.textContent = i;
        aPageNumber.href = "#";
        aPageNumber.addEventListener("click", this.changePage.bind(this));

        if (i === parseInt(index)) aPageNumber.classList.add("active");

        liPageNumber.appendChild(aPageNumber);
        div.appendChild(liPageNumber);
      }

      const liNext = document.createElement("li");
      const aNext = document.createElement("a");

      aNext.addEventListener("click", this.changePage.bind(this));

      aNext.title = "Następna";
      aNext.textContent = "Następna";

      liNext.appendChild(aNext);
      div.appendChild(liNext);
    });
  }

  changePage(event) {
    const div = document.querySelector('.galeria');
    div.innerHTML = "";

    const index = event.target.textContent;
    if (index === "Poprzednia" || index === "Następna") {
      const activeIndex = document.querySelector('.active');
      console.log(activeIndex.textContent)
      if (index === "Poprzednia") {
        index = parseInt(activeIndex.textContent) - 1;
      } else {
        index = parseInt(activeIndex.textContent) + 1;
      }
    }
    this.pages(index);

    let offset = index * this.qtyImg;
    this.adobeApi.connection(this.category, this.qtyImg, offset);
  }
}