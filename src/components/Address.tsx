"use client";

import {usePathname} from "next/navigation";

export const Address = () => {
  const location = usePathname();

  return (
    <>
      <div className="address">
        <div>
          <span className="material-icons">arrow_back</span>
          <span className="material-icons">arrow_forward</span>
          <span className="material-icons">refresh</span>
          <div className="address-bar">
            {"https://blablabla.io" +
              location}
          </div>
          <span className="material-icons">account_circle</span>
          <span className="material-icons">more_vert</span>
        </div>
      </div>
    </>
  );
};
