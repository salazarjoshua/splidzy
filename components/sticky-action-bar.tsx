export default function StickyActionBar({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="sticky bottom-0 -mt-4 flex w-full max-w-md gap-2 bg-gradient-to-t from-neutral-100 via-neutral-100 via-75% to-neutral-100/0 pb-4 pt-8 transition-all">
      {children}
    </div>
  );
}
