import React from "react";

const total = () => {
  return (
    <div className="absolute bottom-1 right-0 translate-x-1/4 translate-y-1/2 -rotate-6 rounded-full border border-neutral-200 bg-white px-2 py-0.5 text-right text-sm font-semibold text-neutral-900 group-disabled:hidden">
      <Image
        src={"/tossface/money.svg"}
        alt=""
        width={18}
        height={18}
        className="absolute left-1/2 top-1 -translate-x-1/2 -translate-y-full"
      />
      {formatCurrency(total)}
    </div>
  );
};

export default total;
