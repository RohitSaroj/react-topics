import { useEffect } from "react";

const RequestAnimationFrameDemo = () => {
  useEffect(() => {
    animation();
    timer(10);
  }, []);

  const animation = () => {
    let startTime = 0;
    const animationObj =
      document.querySelector<HTMLDivElement>(".animation-object");

    const animate = (timeStamp: number) => {
      if (!startTime) {
        startTime = timeStamp;
      }
      const elapsedTime = timeStamp - startTime;

      if (animationObj) {
        animationObj.style.left = elapsedTime / 10 + "px";
      }

      if (animationObj && elapsedTime < 2000) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const timer = (duration: number) => {
    let startTime = 0;
    const timerDiv = document.querySelector<HTMLDivElement>(".timer");

    const tick = (timeStamp: number) => {
      if (!startTime) {
        startTime = timeStamp;
      }
      const progress = Math.floor((timeStamp - startTime) / 1000);
      const remaining = duration - progress;
      timerDiv.textContent = remaining + " s";

      if (remaining > 0) {
        requestAnimationFrame(tick);
      } else {
        timerDiv.textContent = "Time up!";
      }
    };

    requestAnimationFrame(tick);
  };

  return (
    <div>
      <style>
        {`
        .animation-object {
          width: 100px;
          height: 100px;
          background-color: aqua;
          position: absolute;
          top: 200px;
          left: 10px;
        }
      `}
      </style>
      <div className="animation-object"></div>
      <div className="timer"></div>
    </div>
  );
};

export default RequestAnimationFrameDemo;
