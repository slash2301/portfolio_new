export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Prasanna Shinde. Crafted with care.</p>
        <p className="font-display italic">— stay curious</p>
      </div>
    </footer>
  );
}
