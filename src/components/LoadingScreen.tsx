import { motion } from 'motion/react';

export const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-[#1a1410] flex items-center justify-center z-50"
    >
      <div className="text-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 torch-glow rounded-full blur-2xl"></div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#d4a259] to-[#8b6f47] flex items-center justify-center relative mx-auto">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              className="text-4xl"
            >
              ⚔️
            </motion.span>
          </div>
        </div>
        
        <div className="flex gap-2 justify-center">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-[#d4a259] rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
        
        <p className="mt-6 text-[#a89274]">Lighting the torches...</p>
      </div>
    </motion.div>
  );
};
