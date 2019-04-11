exports.init = (elm: any) => {
  let
    target: any = elm,
    mouse: { [key: string]: number; },
    center: { [key: string]: number; } = {
      x: (target.getBoundingClientRect().left + target.getBoundingClientRect().right) / 2,
      y: (target.getBoundingClientRect().top + target.getBoundingClientRect().bottom) / 2,
    },
    r2d: number = 180 / Math.PI,
    rad: number = 0,
    rotation: number = 0,
    angle: number = 0,
    flag: boolean = false;

  const start = (ev: any) => {
    mouse = {
      x: ev.clientX,
      y: ev.clientY
    };
    rad = r2d * Math.atan2(mouse.x - center.x, mouse.y - center.y);
    flag = true;
  };

  const rotate = (ev: any) => {
    mouse = {
      x: ev.clientX,
      y: ev.clientY
    };
    const _rad = r2d * Math.atan2(mouse.x - center.x, mouse.y - center.y);
    rotation = rad - _rad;
    if (flag) {
      target.style.transform = "rotate(" + (angle + rotation) + "deg)";
    }
  };

  const end = (ev: any) => {
    mouse = {
      x: ev.clientX,
      y: ev.clientY
    };
    angle += rotation;
    flag = false;
  };

  target.addEventListener("mousedown", (ev: any) => {
    start(ev);
  });
  target.addEventListener("mousemove", (ev: any) => {
    rotate(ev);
  });
  target.addEventListener("mouseup", (ev: any) => {
    end(ev);
  });
};
