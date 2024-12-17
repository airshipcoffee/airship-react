import { FC, useEffect, useRef, useState } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";

import Styles from "./Header.module.scss";
import useMousePosition from "../../hooks/useMousePosition";

const STATE_MACHINE_NAME = "Float";
const MOVE_LEFT = "Move Left";
const MOVE_RIGHT = "Move Right";

export const Header: FC = () => {
  const { rive, RiveComponent } = useRive({
    src: "airship_header.riv",
    stateMachines: STATE_MACHINE_NAME,
    autoplay: true,
  });

  const [movingRight, setMovingRight] = useState(false);

  const { x } = useMousePosition();

  const onMouseLeft = useStateMachineInput(rive, STATE_MACHINE_NAME, MOVE_LEFT);
  const onMouseRight = useStateMachineInput(
    rive,
    STATE_MACHINE_NAME,
    MOVE_RIGHT
  );

  const headerRef = useRef<HTMLDivElement>(null);
  const middle = useRef<number>(0);

  useEffect(() => {
    if (headerRef.current) {
      const { x, width } = headerRef.current.getBoundingClientRect();
      middle.current = width / 2 + x;
    }
  }, []);

  useEffect(() => {
    console.log({ x, movingRight, middle: middle.current });
    if (!movingRight && x && x > middle.current) {
      onMouseRight?.fire();
      setMovingRight(true);
    }
    if (movingRight && x && x < middle.current) {
      console.log("starting left");
      onMouseLeft?.fire();
      setMovingRight(false);
    }
  }, [x, onMouseLeft, onMouseRight, movingRight]);

  return (
    <div ref={headerRef}>
      <RiveComponent className={Styles.riveHeader} />
    </div>
  );
};
