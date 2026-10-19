export default function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <div className="mb-4">
      {eyebrow && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full" />
          <p className="text-sm text-indigo-600 font-medium">{eyebrow}</p>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        {title}
      </h2>
    </div>
  );
}