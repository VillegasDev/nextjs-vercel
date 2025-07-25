import { FC, PropsWithChildren } from 'react';

export const DarkLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,F,10)",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>DarkLayout</h3>
      <div>{children}</div>
    </div>
  );
};
