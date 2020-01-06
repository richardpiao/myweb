export class EventHandler {
  constructor(ballArray, boxShadow, backgroundColor) {
    ///////is cube click////////////
    const x = document.querySelectorAll(".side");
    var isClick = 0;
    var index = document.querySelector(".canvas-3d").classList[1].split("-")[1];
    var lastIndex = 0;
    x.forEach(object =>
      object.addEventListener("click", () => {
        index++;
        isClick = 1;
        if (index > boxShadow.length - 1) {
          index = 0;
        }
        document
          .querySelector(".canvas-3d")
          .classList.replace(`color-${lastIndex}`, `color-${index}`);
        ///////cube color change/////////
        x.forEach(object => {
          object.style.boxShadow = boxShadow[index];
          object.style.backgroundColor = backgroundColor[index];
        });
        ////////flicker///////
        ballArray.forEach(element => {
          var distance = Math.sqrt(
            Math.pow(
              document.querySelector(".cube-container").offsetLeft -
                element.position.x,
              2
            ) +
              Math.pow(
                document.querySelector(".cube-container").offsetTop -
                  element.position.y,
                2
              )
          );
          var delay = distance / 1.8;
          setTimeout(() => {
            element.r = 3;
            element.color = backgroundColor[index];
            element.shadowBlur = 18;
          }, delay);
          setTimeout(() => {
            element.r = 0.5;
            element.color = "rgba(255,255,255, 1)";
            element.shadowBlur = 3;
          }, delay + 50);
        });
        setTimeout(() => {
          isClick = 0;
        }, 1000);
        ////////////////  button color////////////////
        document.querySelector(".gameplay").classList.add(`flicker-${index}`);
        setTimeout(() => {
          document
            .querySelector(".gameplay")
            .classList.remove(`flicker-${index}`);
        }, 100);

        //////game play button hover effect//////
        document
          .querySelector(".gameplay")
          .classList.replace(`gameplay-${lastIndex}`, `gameplay-${index}`);
        lastIndex = index;
      })
    );

    /////////is ball hover////////////////////////

    document.addEventListener("mousemove", event => {
      if (isClick === 0) {
        ballArray.forEach(object => {
          if (
            event.clientX >= object.position.x - 35 &&
            event.clientX <= object.position.x + 35 &&
            event.clientY >= object.position.y - 35 &&
            event.clientY <= object.position.y + 35
          ) {
            object.color = backgroundColor[index];
            object.r = 3;
            object.shadowBlur = 18;
          } else {
            object.color = "rgba(255,255,255,1)";
            object.r = 0.5;
            object.shadowBlur = 3;
          }
        });
      }
    });

    ///////////////is ball click/////////////

    document.addEventListener("click", event => {
      ballArray.forEach(object => {
        if (
          event.clientX >= object.position.x - 35 &&
          event.clientX <= object.position.x + 35 &&
          event.clientY >= object.position.y - 35 &&
          event.clientY <= object.position.y + 35
        ) {
          object.speed.x = object.speed.x * 50;
          object.speed.y = object.speed.y * 50;
          object.backgroundColor = backgroundColor[index];
        }
      });
    });

    ///about page///////////
    document.querySelector(".canvas-3d").addEventListener("click", () => {
      index++;
      isClick = 1;
      if (index > boxShadow.length - 1) {
        index = 0;
      }
      document
        .querySelector(".canvas-3d")
        .classList.replace(`color-${lastIndex}`, `color-${index}`);
      ////////flicker///////
      ballArray.forEach(element => {
        var distance = Math.sqrt(
          Math.pow(
            document.querySelector(".canvas-3d").offsetLeft -
              element.position.x,
            2
          ) +
            Math.pow(
              document.querySelector(".canvas-3d").offsetTop -
                element.position.y,
              2
            )
        );
        var delay = distance / 1.8;
        setTimeout(() => {
          element.r = 3;
          element.color = backgroundColor[index];
          element.shadowBlur = 18;
        }, delay);
        setTimeout(() => {
          element.r = 0.5;
          element.color = "rgba(255,255,255, 1)";
          element.shadowBlur = 3;
        }, delay + 50);
      });
      setTimeout(() => {
        isClick = 0;
      }, 1000);
      lastIndex = index;
    });
  }
}
