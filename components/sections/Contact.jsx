'use client';
import { useState } from 'react';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulated form submission
    setTimeout(() => {
      setSubmitStatus({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi! En kısa sürede dönüş yapacağım.'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email',
      value: 'alkanlardal@icloud.com',
      href: 'mailto:alkanlardal@icloud.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'LinkedIn',
      value: '/in/ardacaliskaan',
      href: 'https://www.linkedin.com/in/ardacaliskaan/',
      color: 'from-blue-600 to-blue-400'
    },
    {
      icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'GitHub',
      value: '@ardacaliskaan',
      href: 'https://github.com/ardacaliskaan',
      color: 'from-gray-700 to-gray-500'
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Konum',
      value: 'Ankara, Turkey',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 relative">
      {/* Container */}
      <div className="container">
        {/* Section Header */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                İletişim
              </span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
              Proje fikirleri, iş birlikleri veya sadece merhaba demek için benimle iletişime geçin
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <div className="space-y-6 sm:space-y-8">
            <ScrollReveal direction="left" delay={0.2}>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                İletişim Bilgileri
              </h3>
            </ScrollReveal>

            {contactInfo.map((item, index) => (
              <ScrollReveal key={index} direction="left" delay={0.3 + index * 0.1}>
                <Card className="group hover:scale-105 transition-transform">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className={`p-2 sm:p-3 rounded-xl bg-gradient-to-br ${item.color} group-hover:scale-110 transition-transform flex-shrink-0`}>
                      <div className="text-white">{item.icon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">{item.title}</h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base break-all"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm sm:text-base">{item.value}</p>
                      )}
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}

            {/* Availability Status */}
            <ScrollReveal direction="left" delay={0.7}>
              <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
                <div className="flex items-start gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">
                      Freelance Çalışmaya Açığım 🚀
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      Web development, iOS development ve backend projeleri için hemen iletişime geçelim!
                    </p>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Right - Contact Form */}
          <ScrollReveal direction="right" delay={0.2}>
            <Card>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Mesaj Gönder
                </h3>

                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Adınız Soyadınız"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="ornek@email.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all text-sm sm:text-base"
                    placeholder="Mesajınızın konusu"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none text-sm sm:text-base"
                    placeholder="Mesajınızı buraya yazın..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="gradient"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                  loading={isSubmitting}
                  icon={!isSubmitting && <Send className="w-5 h-5" />}
                  iconPosition="right"
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
                </Button>

                {/* Success Message */}
                {submitStatus && (
                  <div className={`p-4 rounded-xl flex items-start gap-3 ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20' 
                      : 'bg-red-500/10 border border-red-500/20'
                  }`}>
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                    }`} />
                    <p className={`text-sm ${
                      submitStatus.type === 'success' ? 'text-green-300' : 'text-red-300'
                    }`}>
                      {submitStatus.message}
                    </p>
                  </div>
                )}
              </form>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}