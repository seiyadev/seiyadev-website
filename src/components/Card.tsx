import React, {
  type CSSProperties,
  type MouseEventHandler,
  type ReactNode,
  type TouchEventHandler,
} from "react";

interface CardProps {
  style?: CSSProperties;
  className?: string;
  onMouseDown?: MouseEventHandler<HTMLDivElement>;
  onMouseUp?: MouseEventHandler<HTMLDivElement>;
  onTouchEnd?: TouchEventHandler<HTMLDivElement>;
  children?: ReactNode;
  [key: string]: any; // Para manejar otras propiedades adicionales
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      style,
      className,
      onMouseDown,
      onMouseUp,
      onTouchEnd,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        style={style}
        ref={ref}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onTouchEnd={onTouchEnd}
        className={`bg-[#FFFFFF] dark:bg-[#0D1117] p-6 rounded-3xl shadow-xl border-[#1F1F1F] border-1 ${className} h-full`}
      >
        {children}
      </div>
    );
  }
);

export default Card;
