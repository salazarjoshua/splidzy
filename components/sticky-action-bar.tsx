export default function StickyActionBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sticky bottom-0 -mt-4 flex w-full max-w-md gap-2 bg-gradient-to-t from-neutral-100 via-neutral-100 via-75% to-neutral-100/0 pb-2 pt-4 transition-all">
      <div className="flex w-full grid-cols-3 gap-2 rounded-3xl border border-neutral-200 bg-white p-2 shadow-md">
        {children}
      </div>
    </div>
  );
}
