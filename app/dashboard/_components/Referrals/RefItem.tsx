interface RefItemProps {
  title: string;
  value: string | number;
}

export function RefItem({ title, value }: RefItemProps) {
  return (
    <div className="grid grid-cols-2 divide-x divide-onyx/30 font-[500]">
      <div className="bg-snow py-2 px-4 rounded-l-lg">{title}</div>
      <div className="bg-snow py-2 px-4 rounded-r-lg">{value}</div>
    </div>
  );
}
