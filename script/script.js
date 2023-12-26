const sec1 = document.querySelector("#section1");
const sec2 = document.querySelector("#section2");
const logo = document.querySelector(".logo");
const wrapEl = document.querySelector("#wrap");
const wrap2El = document.querySelector("#wrap2");
const screenEl = document.querySelector(".screen_area");
const liEl = document.querySelectorAll(".swiper-slide");
const liEla = document.querySelectorAll(".screen_area ul li a");
const obox = document.querySelectorAll(".obox");
const duLi = document.querySelectorAll(".swiper-slide-duplicate");
// const boxEl = document.querySelectorAll(".box");
const header = document.querySelector("header");
const openIcon = document.querySelector(".fa-solid.fa-bars");
const closeIcon = document.querySelector("i.fa-solid.fa-x");
const menuUl = document.querySelectorAll("#header_nav > ul > li > a");
const mouseIcon = document.querySelector(".mouseicon");
const fFcae = document.querySelector("#front_face");
const stageImg = document.querySelectorAll(".land > img");
const text1 = document.querySelector(".text1");
const text2 = document.querySelector(".text2");

const swapBtn = document.querySelectorAll(".swap_btn");
const moveself = document.querySelector(".moveself");
const movepofol = document.querySelector(".movepofol");
const movetop = document.querySelector(".movetop");

// 브라우저 리사이징 setTimeout
var timer = null;
window.addEventListener("resize", function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    if (wrapEl.className == "active") {
      if (window.innerWidth >= 1200) {
        sec2.style.height = "100vh";
        wrapEl.style.height = "100%";
      } else if (window.innerWidth >= 431 && window.innerWidth <= 1999) {
        sec2.style.height = "100vh";
        wrapEl.style.height = "100%";
      } else if (window.innerWidth <= 430) {
        sec2.style.height = "100vh";
        wrapEl.style.height = "100%";
      }
    } else if ((wrap2El.className = "active")) {
      if (window.innerWidth >= 1200) {
        sec2.style.height = "100vh";
        wrap2El.style.height = "100%";
      } else if (window.innerWidth >= 431 && window.innerWidth <= 1999) {
        sec2.style.height = "1350px";
        wrap2El.style.height = "1350px";
      } else if (window.innerWidth <= 430) {
        sec2.style.height = "2000px";
        wrap2El.style.height = "2000px";
      }
      moveself.addEventListener("click", function () {
        if (window.innerWidth >= 1200) {
          sec2.style.height = "100vh";
          wrap2El.style.height = "100%";
        } else if (window.innerWidth >= 431 && window.innerWidth <= 1999) {
          sec2.style.height = "1350px";
          wrap2El.style.height = "1350px";
        } else if (window.innerWidth <= 430) {
          sec2.style.height = "2000px";
          wrap2El.style.height = "2000px";
        }
      });
    }
    swapBtn.forEach((v, i) => {
      if (window.innerWidth >= 431) {
        v.style.right = "-210px";
      } else if (window.innerWidth <= 430) {
        v.style.right = "-5px";
      }
      v.addEventListener("mouseenter", function (e) {
        v.style.animation = "none";
        gsap.to(e.target, 0.5, {
          right: "0",
          duration: 0.6,
        });
      });

      v.addEventListener("mouseleave", function (e) {
        if (window.innerWidth >= 431) {
          e.target.style.animation = "move 1s infinite";
          gsap.to(e.target, 1, {
            right: "-210px",
            duration: 0.6,
          });
        } else if (window.innerWidth <= 430) {
          e.target.style.animation = "move 1s infinite";
          gsap.to(e.target, 1, {
            right: "-5px",
            duration: 0.6,
          });
        }
      });
    });
  }, 300);
});

//마우스아이콘 클릭
const mouseEvent = mouseIcon.addEventListener("click", function () {
  wrapEl.classList.remove("active");
  wrap2El.classList.add("active");
  gsap.to(logo, 0, {
    top: "-200%",
    duration: 0.5,
  });
  gsap.to(sec1, 2, {
    height: 0,
    display: "none",
    scrollBehavior: "smooth",
  });
  gsap.to(swapBtn, 0.3, {
    opacity: 1,
    display: "block",
  });
  gsap.to(openIcon, 1, {
    color: "#555",
  });
  if (window.innerWidth >= 1201) {
    gsap.to(sec2, 2, {
      height: "100vh",
      display: "block",
      duration: 0.5,
    });
  } else if (window.innerWidth <= 1200 && window.innerWidth >= 431) {
    gsap.to(sec2, 2, {
      // ///////////////////////////////////////////////////////////////////////
      height: "1350px",
      display: "block",
      duration: 0.5,
    });
  } else if (window.innerWidth <= 430) {
    gsap.to(sec2, 2, {
      height: 2000,
      display: "block",
      duration: 0.5,
    });
  }

  setTimeout(function () {
    // 요소마다 동작
    // percent(타겟, 완료율, 색상)
    percent(htmlBar, "80%", "coral");
    percent(cssBar, "90%", "royalblue");
    percent(javascriptBar, "80%", "yellow");
    percent(jqueryBar, "80%", "skyblue");
    percent(reactBar, "60%", "rgb(17, 171, 256)");
    percent(photoshopBar, "90%", "royalblue");
    percent(illustBar, "80%", "rgb(230, 134, 45)");
  }, 1000);
});

// 메뉴버튼 누르면 메뉴 활성화/비활성화
openIcon.addEventListener("click", function () {
  header.classList.add("active");
});

// 메뉴버튼 누르면 메뉴 비활성화
closeIcon.addEventListener("click", function () {
  header.classList.remove("active");
});

// 메뉴 누르면 섹션 이동
menuUl.forEach(function (e, key) {
  e.addEventListener("click", function (e) {
    if (key == 0) {
      gsap.to(sec1, 2, {
        height: "4000px",
        display: "block",
        duration: 0.5,
      });
      gsap.to(sec2, 2, {
        height: 0,
        display: "none",
        duration: 0.5,
      });
      gsap.to(swapBtn, 0.3, {
        opacity: 0,
        display: "none",
      });
      gsap.to(openIcon, 1, {
        color: "#fff",
      });
      if (window.innerWidth >= 431) {
        gsap.to(logo, 1, {
          top: 400,
          opacity: 1,
          display: "block",
        });
      } else if (window.innerWidth <= 430) {
        gsap.to(logo, 1, {
          top: 200,
          opacity: 1,
          display: "block",
        });
      }
    } else if (key == 1) {
      wrapEl.classList.remove("active");
      wrap2El.classList.add("active");
      gsap.to(logo, 0, {
        opacity: 0,
        display: "none",
        duration: 0.5,
      });
      gsap.to(swapBtn, 0.5, {
        delay: 1.5,
        opacity: 1,
        display: "block",
      });
      gsap.to(openIcon, 1, {
        color: "#555",
      });
      gsap.to(sec1, 2, {
        height: 0,
        display: "none",
        duration: 0.5,
      });
      if (window.innerWidth >= 1201) {
        gsap.to(sec2, 2, {
          height: "100vh",
          display: "block",
          duration: 0.5,
        });
      } else if (window.innerWidth >= 431 && window.innerWidth <= 1200) {
        gsap.to(sec2, 2, {
          // height: 1350,
          height: "1350px",
          display: "block",
          duration: 0.5,
        });
        gsap.to(wrap2El, 1, {
          height: "1350px",
          display: "block",
          duration: 0.5,
        });
        gsap.to(logo, 0, {
          opacity: 0,
          top: 200,
          display: "none",
          duration: 0.5,
        });
      } else if (window.innerWidth <= 430) {
        gsap.to(sec2, 2, {
          height: 2000,
          display: "block",
          duration: 0.5,
        });
        gsap.to(logo, 0, {
          opacity: 0,
          top: 200,
          display: "none",
          duration: 0.5,
        });
      }
      setTimeout(function () {
        // 요소마다 동작
        // percent(타겟, 완료율, 색상)
        percent(htmlBar, "80%", "coral");
        percent(cssBar, "90%", "royalblue");
        percent(javascriptBar, "80%", "yellow");
        percent(jqueryBar, "80%", "skyblue");
        percent(reactBar, "60%", "rgb(17, 171, 256)");
        percent(photoshopBar, "90%", "royalblue");
        percent(illustBar, "80%", "rgb(230, 134, 45)");
      }, 2000);
    }
    header.classList.remove("active");
  });
});

// 스크롤 이벤트
window.addEventListener("scroll", function (e) {
  console.log(scrollY);
  // 로고 이동
  if (scrollY <= 1700) {
    gsap.to(logo, 0.5, {
      opacity: 1,
      display: "block",
    });
  } else if (scrollY >= 1900) {
    gsap.to(logo, 0.5, {
      opacity: 0,
      display: "none",
      duration: 0.5,
    });
  }
  //.text1,2 show
  if (this.window.innerWidth >= 801) {
    if (scrollY >= 600 || scrollY <= 1200) {
      gsap.to(text1, 0.5, {
        // left: "35%"+,
        left: scrollY / 50 + "%",
        opacity: 1,
      });
      gsap.to(text2, 0.5, {
        // delay: 0.5,
        right: scrollY / 20 + "%",
        opacity: 1,
      });
    } else {
      gsap.to(text1, 1, {
        left: "-2000px",
        opacity: 0,
      });
      gsap.to(text2, 1, {
        right: "-2000px",
        opacity: 0,
      });
    }
  } else if (this.window.innerWidth >= 431 && this.window.innerWidth <= 800) {
    if (scrollY >= 600 || scrollY <= 1200) {
      gsap.to(text1, 0.5, {
        left: scrollY / 50 + "%",
        opacity: 1,
      });
      gsap.to(text2, 0.5, {
        right: scrollY / 50 + "%",
        opacity: 1,
      });
    } else {
      gsap.to(text1, 1, {
        left: "-2000px",
        opacity: 0,
      });
      gsap.to(text2, 1, {
        right: "-2000px",
        opacity: 0,
      });
    }
  } else if (this.window.innerWidth <= 430) {
    if (scrollY >= 300 && scrollY <= 1200) {
      gsap.to(text1, 0.5, {
        left: "0%",
        opacity: 1,
      });
      gsap.to(text2, 0.5, {
        right: "0%",
        opacity: 1,
      });
    }
  }
});

// 무대이미지 애니메이션
stageImg.forEach((v, i) => {
  window.addEventListener("scroll", function () {
    if (scrollY >= 2500) {
      gsap.to(v, 0.8, {
        height: "auto",
        duration: 1,
      });
    } else if (scrollY <= 1400) {
      gsap.to(v, 0.5, {
        height: 0,
        duration: 0.5,
      });
    } else if (
      this.window.innerWidth < 1200 &&
      this.window.innerHeight > 1200
    ) {
      if (scrollY >= 1400) {
        gsap.to(v, 0.8, {
          height: "auto",
          duration: 1,
        });
      }
    }
  });
});

// section2 화면 전환
movepofol.addEventListener("click", function (e) {
  wrap2El.classList.remove("active");
  wrapEl.classList.add("active");
  // sec2.style.height = "100vh";
  if (window.innerWidth >= 1200) {
    sec2.style.height = "100vh";
    wrapEl.style.height = "100%";
    wrap2El.style.height = "100%";
  } else if (window.innerWidth >= 431 && window.innerWidth <= 1199) {
    sec2.style.height = "100vh";
    wrapEl.style.height = "100%";
    wrap2El.style.height = "100%";
  } else if (window.innerWidth <= 430) {
    sec2.style.height = "100vh";
    wrapEl.style.height = "100%";
    wrap2El.style.height = "100%";
  }
  setTimeout(function () {
    // 요소마다 동작
    // percent(타겟, 완료율, 색상)
    percent(htmlBar, "00%", "coral");
    percent(cssBar, "00%", "royalblue");
    percent(javascriptBar, "00%", "yellow");
    percent(jqueryBar, "00%", "skyblue");
    percent(reactBar, "00%", "rgb(17, 171, 256)");
    percent(photoshopBar, "00%", "royalblue");
    percent(illustBar, "00%", "rgb(230, 134, 45)");
  }, 1000);
});

moveself.addEventListener("click", function (e) {
  wrap2El.classList.add("active");
  wrapEl.classList.remove("active");
  if (window.innerWidth > 1200) {
    sec2.style.height = "100vh";
    wrapEl.style.height = "100%";
    wrap2El.style.height = "100%";
  } else if (window.innerWidth >= 431 && window.innerWidth <= 1199) {
    sec2.style.height = "1350px";
    wrapEl.style.height = "1350px";
    wrap2El.style.height = "1350px";
  } else if (window.innerWidth <= 430) {
    sec2.style.height = "2000px";
    wrapEl.style.height = "2000px";
    wrap2El.style.height = "2000px";
  }
  setTimeout(function () {
    // 요소마다 동작
    // percent(타겟, 완료율, 색상)
    percent(htmlBar, "80%", "coral");
    percent(cssBar, "90%", "royalblue");
    percent(javascriptBar, "80%", "yellow");
    percent(jqueryBar, "80%", "skyblue");
    percent(reactBar, "60%", "rgb(17, 171, 256)");
    percent(photoshopBar, "90%", "royalblue");
    percent(illustBar, "80%", "rgb(230, 134, 45)");
  }, 1000);
});

// movetop 버튼 누르면 이동 및 스텍 리셋
movetop.addEventListener("click", function (e) {
  wrapEl.classList.add("active");
  wrap2El.classList.remove("active");
  gsap.to(sec1, 2, {
    height: "4000px",
    display: "block",
    duration: 0.5,
  });
  gsap.to(sec2, 2, {
    height: 0,
    display: "none",
    duration: 0.5,
  });
  if (window.innerWidth >= 431) {
    gsap.to(logo, 1, {
      top: "400px",
      display: "block",
      opacity: 1,
      duration: 0.5,
    });
  } else if (window.innerWidth <= 430) {
    gsap.to(logo, 1, {
      top: "200px",
      display: "block",
      opacity: 1,
      duration: 0.5,
    });
  }

  gsap.to(swapBtn, 0.3, {
    opacity: 0,
    display: "none",
  });
  gsap.to(openIcon, 1, {
    color: "#fff",
  });
  //스텍 리셋
  setTimeout(function () {
    // 요소마다 동작
    // percent(타겟, 완료율, 색상)
    percent(htmlBar, "00%", "coral");
    percent(cssBar, "00%", "royalblue");
    percent(javascriptBar, "00%", "yellow");
    percent(jqueryBar, "00%", "skyblue");
    percent(reactBar, "00%", "rgb(17, 171, 256)");
    percent(photoshopBar, "00%", "royalblue");
    percent(illustBar, "00%", "rgb(230, 134, 45)");
  }, 1000);
});

// 스왑버튼 애니메이션
swapBtn.forEach((v, i) => {
  v.addEventListener("mouseenter", function (e) {
    v.style.animation = "none";
    if (window.innerWidth >= 431) {
      gsap.to(e.target, 0.5, {
        right: "0",
        duration: 0.6,
      });
    } else if (window.innerWidth <= 430) {
      gsap.to(e.target, 0.5, {
        right: "0",
        duration: 0.6,
      });
    }
  });

  v.addEventListener("mouseleave", function (e) {
    if (window.innerWidth >= 431) {
      e.target.style.animation = "move 1s infinite";
      gsap.to(e.target, 1, {
        right: "-210px",
        duration: 0.6,
      });
    } else if (window.innerWidth <= 430) {
      // e.target.style.animation = "none";
      e.target.style.animation = "move 1s infinite";

      gsap.to(e.target, 1, {
        right: "0",
        duration: 0.6,
      });
    }
  });
});

const swiper = new Swiper(".swiper", {
  loop: true,
  // spaceBetween: 30,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  autoHeight: false,
  loopAdditionalSlides: 1,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 660,
    modifier: 0.5,
  },

  breakpoints: {
    // 반응형 설정이 가능 width값으로 조정
    768: {
      slidesPerView: "auto",
    },
  },
  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

// 포트폴리오에 마우스 올리면 box on / off
// swiper 일반 영역 선택
liEl.forEach(function (value, key) {
  value.addEventListener("mouseenter", function (e) {
    console.log(e);
    obox.forEach(function (ov, oi) {
      if (key == oi && window.innerWidth >= 431) {
        gsap.to(obox[oi], 0.5, {
          display: "block",
          opacity: 1,
          duration: 1,
        });
      }
    });
  });
  value.addEventListener("mouseleave", function () {
    obox.forEach(function (ov, oi) {
      gsap.to(obox, 0.5, {
        opacity: 0,
        display: "none",
        duration: 1,
      });
    });
  });
});

obox.forEach(function (v, i) {
  v.addEventListener("mouseenter", function () {
    gsap.to(v, 0.5, {
      opacity: 1,
      display: "block",
      duration: 1,
    });
  });
  v.addEventListener("mouseleave", function () {
    gsap.to(v, 0.5, {
      opacity: 0,
      display: "none",
      duration: 1,
    });
  });
});

// swiper duplication 영역 선택
const du = document.querySelectorAll(".swiper-slide-duplicate");
du.forEach(function (value, key) {
  const obox = document.querySelectorAll(".obox");
  value.addEventListener("mouseenter", function (e) {
    // console.log(e.target.dataset.swiperSlideIndex);
    obox.forEach(function (ov, oi) {
      // console.log("key", key, "oi", oi);
      if (e.target.dataset.swiperSlideIndex == oi && window.innerWidth >= 431) {
        gsap.to(obox[oi], 0.5, {
          display: "block",
          opacity: 1,
          duration: 1,
        });
      }
    });
  });

  value.addEventListener("mouseleave", function (e) {
    // console.log(e.target.dataset.swiperSlideIndex);
    obox.forEach(function (ov, oi) {
      gsap.to(obox, 0.5, {
        opacity: 0,
        display: "none",
        duration: 1,
      });
    });
  });
});

// ----------------------------
// section 2-2
// ------------------------------

var htmlBar = document.querySelector(
  ".html > .progressbar >.progressbar_inner"
);
var cssBar = document.querySelector(".css > .progressbar >.progressbar_inner");
var javascriptBar = document.querySelector(
  ".javascript > .progressbar >.progressbar_inner"
);
var jqueryBar = document.querySelector(
  ".jquery > .progressbar >.progressbar_inner"
);
var reactBar = document.querySelector(
  ".react > .progressbar >.progressbar_inner"
);
var photoshopBar = document.querySelector(
  ".photoshop > .progressbar >.progressbar_inner"
);
var illustBar = document.querySelector(
  ".illust > .progressbar >.progressbar_inner"
);

// 타겟 프로그래스바 함수
function percent(target, width, color) {
  gsap.to(target, 0, {
    backgroundColor: color,
  });
  gsap.to(target, 1, {
    width: width,
    duration: 2.5,
    ease: "power3.out",
    backgroundColor: color,
  });

  // progressbar_inner의 퍼센트가 10의자리수 일때 %를 제외하고 숫자만 반환
  let targetcount = Number(width.substr(0, 2));
  let count = 0; /* progressbar_inner의 너비와 비교할 값  */
  let htmlCount = 0; /* progressbar_inner와 함께 증가할 내 점수 값 */

  /* count가 progressbar_inner의 넓이값이 같거나 작을 동안 setInverval이 0.01초마다 반복 */
  setInterval(() => {
    // 이벤트 카운트될 타겟 찾기
    let a = target.parentNode; /* percent함수의 target의 부모 */
    let b = a.parentNode; /* target의 부모 */
    let c = b.querySelector(".percent"); /* b의 자식요소 .percent */
    if (count >= targetcount) {
      clearInterval();
      htmlCount = 0;
      return;
    } else {
      count++;
      htmlCount++;
    }
    c.innerText = htmlCount + "/100%";
  }, 10);
}

//popup
const topmailEl = document.querySelector(".topmail");
const mailpopEl = document.querySelector("#mailpop");
const mailclose = document.querySelector(".mailtitle > i");

topmailEl.addEventListener("click", function () {
  mailpopEl.style.display = "block";
});

mailclose.addEventListener("click", function () {
  mailpopEl.style.display = "none";
});

//popup 글씨 클릭시 복사 코드
const mail = document.querySelector(".mail");
const mailAd = document.querySelector(".mailadress");
const copyEl = document.querySelector(".copy");
mail.addEventListener("click", function () {
  window.navigator.clipboard.writeText(mailAd.innerText);
  copyEl.animate(
    {
      opacity: 1,
    },
    1000
  );

  copyEl.animate(
    {
      opacity: 0,
    },
    1000
  );
});

// -----------------------------------------------------
// 백업용 코드들----------------------------------------
// -----------------------------------------------------
// section2
// section2에서 영역 탐색
// var range = 30; // 화면밖 범위
// function positionChange(e) {
//   var centerX = e.pageX - wrapEl.offsetWidth / 2;
//   var centerY = e.screenY - wrapEl.offsetHeight / 2;

//   var percentX = (centerX / wrapEl.offsetWidth) * 40;
//   var percentY = (centerY / wrapEl.offsetHeight) * 20;
//   gsap.to(screenEl, 0, {
//     left: -percentX * 1.2 + "%",
//     top: -percentY + "%",
//     duration: 3,
//   });
// }
// section2 마우스 움직임 이벤트
// wrapEl.addEventListener("mousemove", (e) => {
//   positionChange(e);
// });

// // section1이 일정 스크롤 위치에 도달하면 높이값이 사라짐
// window.addEventListener("scroll", function () {
//   // 스크롤 위치값 console 출력
//   console.log(window.scrollY);
//   if (scrollY >= 7070) {
//     gsap.to(sec1, 1, {
//       height: 0,
//       display: 'block'
//     })
//     gsap.to(sec2, 0, {
//       height: 0,
//     });
//   }
// });

// //메뉴누르면 섹션 이동
// menuUl.forEach(function (e) {
//   e.addEventListener("click", function (e) {
//     if (e.target._gsap.id == 1) {
//       console.log('id1', e)
//       gsap.to(sec1, 1, {
//         height: '8000px',
//         display: 'block',
//         duration: 0.5
//       })
//       gsap.to(sec2, 1, {
//         height: 0,
//         display: 'none',
//         duration: 0.5
//       })
//     }

//     if (e.target._gsap.id == 2) {
//       console.log('id2', e)
//       gsap.to(sec1, 1, {
//         height: 0,
//         display: 'none',
//         duration: 0.5

//       })
//       gsap.to(sec2, 1, {
//         height: '100%',
//         display: 'block',
//         duration: 0.5
//       })
//     }
//   });
// });

// 마우스모양 아이콘 누르면 섹션 변화
// mouseIcon.addEventListener("click", function () {
//   gsap.to(sec1, 2, {
//     height: 0,
//     display: "none",
//   });
//   gsap.to(sec2, 2, {
//     height: "100%",
//     display: "block",
//   });
// });

// 포트폴리오에 마우스 올리면 박스 on
// liEl.forEach(function (value, key) {
//   value.addEventListener("mouseenter", function (e) {
//     const tg = value.children[1]; /* .box */
//     console.log(tg);
//     gsap.to(tg, 0.3, {
//       opacity: 1,
//       display: "block",
//     });
//   });
// });

// liEl.forEach(function (value, key) {
//   value.addEventListener("mouseleave", function (e) {
//     const tg = value.children[1]; /* .box */
//     gsap.to(tg, 0.3, {
//       opacity: 0,
//       display: "none",
//     });
//   });
// });

function non_popup() {
  window.open(
    "http://localhost:3000/",
    "_blank",
    "width=430,height=900,top=50,left=150"
  );
}
