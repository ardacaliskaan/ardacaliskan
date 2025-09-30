'use client';
import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // Simulate API call
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      value: 'alkanlardal@icloud.com',
      href: 'mailto:alkanlardal@icloud.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: 'LinkedIn',
      value: '/in/ardacaliskaan',
      href: 'https://www.linkedin.com/in/ardacaliskaan/',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: 'GitHub',
      value: '@ardacaliskaan',
      href: 'https://github.com/ardacaliskaan',
      color: 'from-gray-700 to-gray-500'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Konum',
      value: 'Ankara, Turkey',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                İletişim
              </span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Proje fikirleri, iş birlikleri veya sadece merhaba demek için benimle iletişime geçin
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-8">
            <ScrollReveal direction="left" delay={0.2}>
              <h3 className="text-2xl font-bold text-white mb-6">
                İletişim Bilgileri
              </h3>
            </ScrollReveal>

            {contactInfo.map((item, index) => (
              <ScrollReveal key={index} direction="left" delay={0.3 + index * 0.1}>
                <Card className="group">
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform`}>
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-400">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}

            <ScrollReveal direction="left" delay={0.7}>
              <Card gradient className="p-8">
                <h4 className="text-xl font-bold text-white mb-3">
                  Freelance Çalışmaya Açığım 🚀
                </h4>
                <p className="text-gray-300 mb-4">
                  Web development, iOS development ve backend projeleri için 
                  freelance olarak çalışıyorum. Projeniz için hemen iletişime geçelim!
                </p>
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Müsait</span>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right - Contact Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <Card>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    placeholder="ornek@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                {status.message && (
                  <div className={`p-4 rounded-xl ${
                    status.type === 'success' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}>
                    {status.message}
                  </div>
                )}

                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  icon={<Send className="w-5 h-5" />}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </Button>
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}