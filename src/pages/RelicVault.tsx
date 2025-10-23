import { useState } from 'react';
import { motion } from 'motion/react';
import { Package, CheckCircle, Clock } from 'lucide-react';
import { RunicDivider } from '../components/RunicDivider';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export const RelicVault = () => {
  const [waitlistForm, setWaitlistForm] = useState({
    email: '',
    productInterest: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const products = [
    {
      name: 'Core Game - Standard Edition',
      description: 'The complete base game with all components needed for 1-4 players to begin their journey through the Nine Realms.',
      price: '$79.99',
      status: 'Coming Soon',
      estimatedRelease: 'Q2 2026',
      features: [
        'Game board and tiles',
        '4 hero miniatures',
        'Enemy miniatures and tokens',
        'Dice set and cards',
        'Rulebook and quick reference',
      ],
    },
    {
      name: 'Core Game - Deluxe Edition',
      description: 'Premium edition featuring hand-carved wooden components, upgraded miniatures, and exclusive content.',
      price: '$149.99',
      status: 'Coming Soon',
      estimatedRelease: 'Q2 2026',
      features: [
        'CNC-carved wooden game board',
        'Premium painted miniatures',
        'Metal coins and tokens',
        'Deluxe storage solution',
        'Exclusive character and lore book',
      ],
    },
    {
      name: 'Realm Expansion: Muspelheim',
      description: 'Expand your adventure into the fiery realm of Muspelheim with new enemies, heroes, and mechanics.',
      price: '$39.99',
      status: 'Coming Soon',
      estimatedRelease: 'Q4 2026',
      features: [
        'New realm board and tiles',
        'Fire giant miniatures',
        'New hero: Flame Warden',
        '30+ new cards',
        'Expansion rulebook',
      ],
    },
    {
      name: 'Mystery Relic Box',
      description: 'A curated collection of exclusive items, promo cards, and collectibles. Contents change seasonally.',
      price: '$29.99',
      status: 'Coming Soon',
      estimatedRelease: 'TBA',
      features: [
        '??? Surprise items',
        '??? Exclusive content',
        '??? Limited edition pieces',
        '??? Collector\'s value',
      ],
    },
  ];

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/waitlist`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(waitlistForm),
        }
      );

      if (response.ok) {
        setSubmitSuccess(true);
        setWaitlistForm({ email: '', productInterest: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        const error = await response.json();
        alert(error.error || 'Failed to join waitlist. Please try again.');
      }
    } catch (error) {
      console.error('Error joining waitlist:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl text-[#d4a259] mb-6 flex items-center justify-center gap-4">
              <Package className="w-12 h-12" />
              Relic Vault
            </h1>
            <p className="text-xl text-[#a89274] max-w-3xl mx-auto">
              Discover the treasures of the Nine Realms. Join the waitlist to be notified when products become available.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture hover:border-[#d4a259] transition-all"
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-2xl text-[#d4a259] pr-4">
                      {product.name}
                    </h3>
                    <span className="text-2xl whitespace-nowrap">
                      {product.price}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#d4a259]/20 border border-[#d4a259] rounded-full text-sm text-[#d4a259] flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {product.status}
                    </span>
                    <span className="text-sm text-[#a89274]">
                      Est. {product.estimatedRelease}
                    </span>
                  </div>

                  <p className="text-[#a89274]">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-[#d4a259] mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-[#a89274] text-sm">
                        <span className="text-[#d4a259] mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() =>
                    setWaitlistForm({ ...waitlistForm, productInterest: product.name })
                  }
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg hover:shadow-lg transition-all"
                >
                  Join Waitlist
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RunicDivider />

      {/* Waitlist Form */}
      {waitlistForm.productInterest && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-20 px-4"
        >
          <div className="container mx-auto max-w-2xl">
            <div className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture">
              <h2 className="text-3xl text-[#d4a259] mb-4 text-center">
                Join the Waitlist
              </h2>
              <p className="text-[#a89274] text-center mb-8">
                Be the first to know when <span className="text-[#d4a259]">{waitlistForm.productInterest}</span> becomes available
              </p>

              <form onSubmit={handleWaitlistSubmit} className="space-y-6">
                <div>
                  <label htmlFor="waitlistEmail" className="block mb-2 text-[#d4a259]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="waitlistEmail"
                    required
                    value={waitlistForm.email}
                    onChange={(e) =>
                      setWaitlistForm({ ...waitlistForm, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#1a1410] border border-[#d4a259]/30 rounded-lg focus:outline-none focus:border-[#d4a259] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-8 py-4 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setWaitlistForm({ email: '', productInterest: '' })
                    }
                    className="px-6 py-4 bg-[#3a2f1f] hover:bg-[#4a3f2f] rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-[#d4a259]/20 border border-[#d4a259] rounded-lg text-[#d4a259]"
                  >
                    <CheckCircle className="w-5 h-5" />
                    Successfully joined the waitlist! We'll notify you when it's available.
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </motion.section>
      )}

      {/* Mystery Box Teaser */}
      <section className="py-20 px-4 bg-[#2a2218]/30">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 torch-glow rounded-lg blur-2xl opacity-30"></div>
            <div className="relative bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-12 stone-texture">
              <div className="text-6xl mb-6 runic-pulse">📦</div>
              <h2 className="text-4xl text-[#d4a259] mb-4">
                The Mystery Awaits
              </h2>
              <p className="text-[#a89274] mb-6 max-w-2xl mx-auto">
                What treasures lie within the Mystery Relic Box? Ancient artifacts? 
                Exclusive miniatures? Promo cards never seen before? The contents change 
                with the seasons, but the value remains constant...
              </p>
              <p className="text-[#d4a259] text-xl">
                Only the brave shall discover what lies within.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture"
          >
            <h3 className="text-2xl text-[#d4a259] mb-6 text-center">
              Production Timeline
            </h3>
            <div className="space-y-4 text-[#a89274]">
              <p>
                <strong className="text-[#d4a259]">Current Status:</strong> In development. 
                We're finalizing game mechanics, artwork, and manufacturing processes.
              </p>
              <p>
                <strong className="text-[#d4a259]">Estimated Launch:</strong> Core game 
                scheduled for Q2 2026, with expansions following throughout the year.
              </p>
              <p>
                <strong className="text-[#d4a259]">Quality Commitment:</strong> Every component 
                is crafted with care. We won't rush to market—we'll launch when the game 
                meets our high standards.
              </p>
              <p className="text-center pt-4">
                Join the waitlist to receive updates on our progress and be first in line 
                when pre-orders open.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
