import { useState } from 'react';
import { motion } from 'motion/react';
import { Hammer, Upload, CheckCircle } from 'lucide-react';
import { RunicDivider } from '../components/RunicDivider';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export const Workshop = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    authorName: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const craftingSteps = [
    { step: 1, title: 'Design', description: 'Create 3D models and artwork' },
    { step: 2, title: 'Carve', description: 'CNC carving for wooden components' },
    { step: 3, title: 'Print', description: '3D print miniatures and tokens' },
    { step: 4, title: 'Finish', description: 'Paint and assemble final pieces' },
  ];

  const galleryItems = [
    { image: 'https://images.unsplash.com/photo-1497223830540-5c1202d4f260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmFmdGVkJTIwd29vZCUyMGNhcnZpbmd8ZW58MXx8fHwxNzYxMDI5MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Carved Game Board' },
    { image: 'https://images.unsplash.com/photo-1597764894730-daae2cc2288d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWJsZXRvcCUyMGdhbWluZyUyMGRpY2V8ZW58MXx8fHwxNzYxMDI5MjA5fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Custom Dice Set' },
    { image: 'https://images.unsplash.com/photo-1716817276116-7c11b842f8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2FyZCUyMGdhbWUlMjBjb21wb25lbnRzfGVufDF8fHx8MTc2MDk0NTY0NHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'Game Components' },
    { image: 'https://images.unsplash.com/photo-1759695463472-d044c7241b2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwYXJ0JTIwY3JlYXR1cmV8ZW58MXx8fHwxNzYwOTgwMTU4fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'Character Miniatures' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/community-submit`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify({
            type: 'hero',
            ...formData,
          }),
        }
      );

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ title: '', content: '', authorName: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        const error = await response.json();
        console.error('Submission failed:', error);
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting hero design:', error);
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
              <Hammer className="w-12 h-12" />
              The Carver's Forge
            </h1>
            <p className="text-xl text-[#a89274] max-w-3xl mx-auto">
              Where creativity meets craftsmanship. Explore handcrafted components and submit your own hero designs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Workshop Intro */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture"
          >
            <p className="text-[#a89274] mb-4">
              Welcome to the workshop, where ancient Norse artistry meets modern crafting techniques. 
              Every component in Shadows of the Nine Realms is designed with care and precision, 
              bringing the mythology to life through wood, resin, and metal.
            </p>
            <p className="text-[#a89274]">
              From CNC-carved game boards that echo the textures of Yggdrasil to 3D-printed miniatures 
              that capture the essence of legendary creatures, each piece is a work of art.
            </p>
          </motion.div>
        </div>
      </section>

      <RunicDivider />

      {/* Gallery */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl text-[#d4a259] text-center mb-12">
            Crafted Components
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg border-2 border-[#d4a259]/30 group-hover:border-[#d4a259] transition-all">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <p className="p-4 text-[#d4a259]">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Process Timeline */}
      <section className="py-20 px-4 bg-[#2a2218]/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl text-[#d4a259] text-center mb-12">
            Crafting Process
          </h2>

          <div className="space-y-8">
            {craftingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#d4a259] text-[#1a1410] flex items-center justify-center torch-glow">
                  {step.step}
                </div>
                <div className="flex-1 bg-[#2a2218] rounded-lg border border-[#d4a259]/30 p-6 stone-texture">
                  <h3 className="text-xl text-[#d4a259] mb-2">{step.title}</h3>
                  <p className="text-[#a89274]">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <RunicDivider />

      {/* Hero Design Submission */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl text-[#d4a259] mb-4">
              Design Your Hero
            </h2>
            <p className="text-[#a89274]">
              Share your hero concept with the community. Your design might inspire future characters!
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture space-y-6"
          >
            <div>
              <label htmlFor="authorName" className="block mb-2 text-[#d4a259]">
                Your Name
              </label>
              <input
                type="text"
                id="authorName"
                required
                value={formData.authorName}
                onChange={(e) => setFormData({ ...formData, authorName: e.target.value })}
                className="w-full px-4 py-3 bg-[#1a1410] border border-[#d4a259]/30 rounded-lg focus:outline-none focus:border-[#d4a259] transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="title" className="block mb-2 text-[#d4a259]">
                Hero Name
              </label>
              <input
                type="text"
                id="title"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 bg-[#1a1410] border border-[#d4a259]/30 rounded-lg focus:outline-none focus:border-[#d4a259] transition-colors"
                placeholder="Give your hero a name"
              />
            </div>

            <div>
              <label htmlFor="content" className="block mb-2 text-[#d4a259]">
                Hero Description
              </label>
              <textarea
                id="content"
                required
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-[#1a1410] border border-[#d4a259]/30 rounded-lg focus:outline-none focus:border-[#d4a259] transition-colors resize-none"
                placeholder="Describe your hero's background, abilities, and role in the Nine Realms..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>Processing...</>
              ) : (
                <>
                  <Upload className="w-5 h-5" />
                  Submit Hero Design
                </>
              )}
            </button>

            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-[#d4a259]/20 border border-[#d4a259] rounded-lg text-[#d4a259]"
              >
                <CheckCircle className="w-5 h-5" />
                Your hero design has been submitted successfully!
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>
    </div>
  );
};
