export const Feature = ({
  color,
  withName = false,
}: {
  color: string;
  withName?: boolean;
}) => {
  const viewTransitionProperties = withName
    ? {
        viewTransitionName: `card-${color}`,
      }
    : {};

  return (
    <div
      className="card feature"
      style={{
        background: `lch(from#${color} l c h)`,
        ...viewTransitionProperties,
      }}
    ></div>
  );
};
