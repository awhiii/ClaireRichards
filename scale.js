function scaleDesktopPage() {
    const wrapper = document.querySelector("#desktop-scale");
    const page = document.querySelector("#page");
  
    if (!wrapper || !page) return;
  
    if (window.innerWidth < 1024) {
      page.style.transform = "";
      wrapper.style.height = "";
      return;
    }
  
    const designWidth = 1440;
  
    /*
      기존:
      const scale = Math.min(window.innerWidth / designWidth, 1);
  
      문제:
      1440px보다 넓어지면 더 이상 커지지 않아서
      화면만 넓어지고 오브젝트 간 거리가 이상하게 멀어 보임.
  
      수정:
      창 크기에 맞춰 1440 기준 캔버스 전체가 계속 같이 커지고 작아지게 함.
    */
    const scale = window.innerWidth / designWidth;
  
    page.style.transform = `scale(${scale})`;
    page.style.transformOrigin = "top center";
  
    const pageHeight = page.offsetHeight;
    wrapper.style.height = `${pageHeight * scale}px`;
  }
  
  window.addEventListener("load", scaleDesktopPage);
  window.addEventListener("resize", scaleDesktopPage);