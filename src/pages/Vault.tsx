import runeIcon from "@/assets/icons/rune.png";

const Vault = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex items-center gap-4 mb-4">
        <img src={runeIcon} alt="Rune" className="w-12 h-12 object-contain" />
        <h1 className="text-4xl font-bold">Relic Vault</h1>
      </div>
      <p className="text-muted-foreground">Coming soon...</p>
    </div>
  );
};

export default Vault;
