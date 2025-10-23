export const FogEffect = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      <div 
        className="absolute top-0 left-0 w-full h-full opacity-20 fog-drift"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(200, 200, 200, 0.3) 0%, transparent 50%)',
          animation: 'fogDrift 25s infinite ease-in-out',
        }}
      />
      <div 
        className="absolute top-0 right-0 w-full h-full opacity-15 fog-drift"
        style={{
          background: 'radial-gradient(ellipse at 70% 30%, rgba(180, 180, 180, 0.2) 0%, transparent 40%)',
          animation: 'fogDrift 30s infinite ease-in-out reverse',
          animationDelay: '5s',
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-full h-full opacity-25 fog-drift"
        style={{
          background: 'radial-gradient(ellipse at 30% 80%, rgba(190, 190, 190, 0.25) 0%, transparent 45%)',
          animation: 'fogDrift 20s infinite ease-in-out',
          animationDelay: '10s',
        }}
      />
    </div>
  );
};
