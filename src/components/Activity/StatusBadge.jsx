export default function StatusBadge({ text }) {
  return (
    <div className="inline-flex px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-medium">
      {text}
    </div>
  );
}
