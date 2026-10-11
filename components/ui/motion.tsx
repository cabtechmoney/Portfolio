import type { HTMLAttributes } from "react";

type MotionProps = HTMLAttributes<HTMLElement> & {
  initial?: unknown;
  whileInView?: unknown;
  viewport?: unknown;
  transition?: unknown;
  animate?: unknown;
};

function withoutMotionProps({ initial, whileInView, viewport, transition, animate, ...props }: MotionProps) {
  void initial;
  void whileInView;
  void viewport;
  void transition;
  void animate;
  return props;
}

export const motion = {
  div: (props: MotionProps) => <div {...withoutMotionProps(props)} />,
  h3: (props: MotionProps) => <h3 {...withoutMotionProps(props)} />,
  p: (props: MotionProps) => <p {...withoutMotionProps(props)} />,
};
