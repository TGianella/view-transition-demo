export type CardProps = {
  color: string;
  onClick: () => void;
  withName?: boolean;
};

export const Card = ({ color, onClick, withName = false }: CardProps) => {
  const viewTransitionProperties = withName
    ? {
        viewTransitionName: `card-${color}`,
        viewTransitionClass: "card",
      }
    : {};

  return (
    <div
      onClick={onClick}
      className="card"
      style={{
        background: `lch(from#${color} l c h)`,
        ...viewTransitionProperties,
      }}
    ></div>
  );
};
