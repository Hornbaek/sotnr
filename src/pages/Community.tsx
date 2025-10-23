import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Send, CheckCircle, Image as ImageIcon } from 'lucide-react';
import { RunicDivider } from '../components/RunicDivider';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export const Community = () => {
  const [storyForm, setStoryForm] = useState({
    title: '',
    content: '',
    authorName: '',
  });
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b973ed60/community-submissions?type=story`,
        {
          headers: {
            Authorization: `Bearer ${publicAnonKey}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSubmissions(data.submissions || []);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

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
            type: 'story',
            ...storyForm,
          }),
        }
      );

      if (response.ok) {
        setSubmitSuccess(true);
        setStoryForm({ title: '', content: '', authorName: '' });
        setTimeout(() => {
          setSubmitSuccess(false);
          fetchSubmissions();
        }, 2000);
      } else {
        alert('Failed to submit. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting story:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const guidelines = [
    'Be respectful and constructive in all interactions',
    'Share your campaign experiences and creative works',
    'Help new players learn and grow',
    'No spam, harassment, or inappropriate content',
    'Give credit to original creators',
  ];

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
              <Users className="w-12 h-12" />
              Community Hall
            </h1>
            <p className="text-xl text-[#a89274] max-w-3xl mx-auto">
              Connect with fellow adventurers, share your stories, and showcase your creativity
            </p>
          </motion.div>
        </div>
      </section>

      {/* Community Links */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture text-center hover:border-[#d4a259] transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-[#d4a259]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💬</span>
              </div>
              <h3 className="text-2xl text-[#d4a259] mb-2">Join Our Discord</h3>
              <p className="text-[#a89274]">
                Connect with thousands of players, get support, and join campaigns
              </p>
            </motion.a>

            <motion.a
              href="https://forum.example.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture text-center hover:border-[#d4a259] transition-all"
            >
              <div className="w-16 h-16 rounded-full bg-[#d4a259]/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📜</span>
              </div>
              <h3 className="text-2xl text-[#d4a259] mb-2">Community Forums</h3>
              <p className="text-[#a89274]">
                Discuss strategies, share house rules, and find play groups
              </p>
            </motion.a>
          </div>
        </div>
      </section>

      <RunicDivider />

      {/* Story Submission */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-4xl text-[#d4a259] mb-4">
              Tales from the Fjord
            </h2>
            <p className="text-[#a89274]">
              Share your most memorable campaign moments and epic adventures
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
                value={storyForm.authorName}
                onChange={(e) => setStoryForm({ ...storyForm, authorName: e.target.value })}
                className="w-full px-4 py-3 bg-[#1a1410] border border-[#d4a259]/30 rounded-lg focus:outline-none focus:border-[#d4a259] transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="storyTitle" className="block mb-2 text-[#d4a259]">
                Story Title
              </label>
              <input
                type="text"
                id="storyTitle"
                required
                value={storyForm.title}
                onChange={(e) => setStoryForm({ ...storyForm, title: e.target.value })}
                className="w-full px-4 py-3 bg-[#1a1410] border border-[#d4a259]/30 rounded-lg focus:outline-none focus:border-[#d4a259] transition-colors"
                placeholder="Give your tale a title"
              />
            </div>

            <div>
              <label htmlFor="storyContent" className="block mb-2 text-[#d4a259]">
                Your Story
              </label>
              <textarea
                id="storyContent"
                required
                value={storyForm.content}
                onChange={(e) => setStoryForm({ ...storyForm, content: e.target.value })}
                rows={8}
                className="w-full px-4 py-3 bg-[#1a1410] border border-[#d4a259]/30 rounded-lg focus:outline-none focus:border-[#d4a259] transition-colors resize-none"
                placeholder="Share your epic adventure..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-gradient-to-r from-[#d4a259] to-[#8b6f47] text-[#1a1410] rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>Submitting...</>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Share Your Tale
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
                Your story has been shared with the community!
              </motion.div>
            )}
          </motion.form>
        </div>
      </section>

      {/* Story Showcase */}
      <section className="py-20 px-4 bg-[#2a2218]/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl text-[#d4a259] mb-12 text-center">
            Community Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {submissions.length > 0 ? (
              submissions.map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-[#2a2218] rounded-lg border border-[#d4a259]/30 p-6 stone-texture hover:border-[#d4a259] transition-colors"
                >
                  <h3 className="text-xl text-[#d4a259] mb-2">{submission.title}</h3>
                  <p className="text-sm text-[#a89274] mb-3">
                    by {submission.authorName} • {new Date(submission.date).toLocaleDateString()}
                  </p>
                  <p className="text-[#e8dcc4] line-clamp-4">{submission.content}</p>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-[#a89274] py-12">
                <p>Be the first to share your story!</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl text-[#d4a259] mb-8 text-center">
            Community Guidelines
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-[#2a2218] rounded-lg border-2 border-[#d4a259]/30 p-8 stone-texture"
          >
            <ul className="space-y-4">
              {guidelines.map((guideline, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3 text-[#a89274]"
                >
                  <span className="text-[#d4a259] mt-1">⚔️</span>
                  {guideline}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
