import React, { useState, useEffect } from 'react';
import { 
  Rocket, 
  ShieldCheck, 
  TrendingUp, 
  Twitter, 
  Send, 
  MessageCircle,
  Zap,
  BarChart2
} from 'lucide-react';

function GoodShitTokenApp() {
  const [tokenStats, setTokenStats] = useState({
    price: '0.000069',
    marketCap: '$420,690',
    holders: '1,337'
  });

  // Countdown state
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  // Email state
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Countdown logic
  useEffect(() => {
    const launchDate = new Date('December 31, 2024 23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeLeft = launchDate - now;

      if (timeLeft <= 0) {
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      setCountdown({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    };

    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Token stats simulation
  useEffect(() => {
    const updateTokenStats = () => {
      const volatility = (Math.random() * 0.2 - 0.1).toFixed(4);
      setTokenStats(prev => ({
        price: (parseFloat(prev.price) * (1 + parseFloat(volatility))).toFixed(6),
        marketCap: `$${(Math.random() * 500000).toFixed(0)}`,
        holders: `${(parseInt(prev.holders.replace(/,/g, '')) + Math.floor(Math.random() * 10)).toLocaleString()}`
      }));
    };

    const interval = setInterval(updateTokenStats, 5000);
    return () => clearInterval(interval);
  }, []);

  // Email submission handler
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    console.log('Waitlist email:', email);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 py-4 px-8 flex justify-between items-center">
        <div className="text-2xl font-bold text-yellow-500">GST</div>
        <nav>
          <ul className="flex space-x-6">
            {['Home', 'About', 'Roadmap', 'Pump', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white hover:text-yellow-500 transition-colors flex items-center gap-2"
                >
                  {item === 'Pump' && <Zap size={16} />}
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        id="home" 
        className="min-h-screen flex flex-col justify-center items-center text-center 
        bg-gradient-to-br from-black to-yellow-600 pt-20 px-4"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Good Shit Token
        </h1>
        <p className="text-xl md:text-2xl mb-8">Revolutionizing Crypto. Coming Soon.</p>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {Object.entries(countdown).map(([key, value]) => (
            <div 
              key={key} 
              className="bg-white/10 p-4 rounded-lg text-center min-w-[80px]"
            >
              <span className="text-3xl md:text-4xl block">{value}</span>
              <span className="text-xs uppercase">{key}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex space-x-4">
          <a 
            href="#whitepaper" 
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition"
          >
            Whitepaper
          </a>
          <a 
            href="#contact" 
            className="border-2 border-yellow-500 text-white px-6 py-3 rounded-lg 
            hover:bg-yellow-500 hover:text-black transition"
          >
            Join Waitlist
          </a>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="py-20 bg-black text-center px-4"
      >
        <h2 className="text-4xl mb-8">What is Good Shit Token?</h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-300">
          Good Shit Token is an innovative cryptocurrency project aimed at bringing 
          transparency, security, and unprecedented value to the blockchain ecosystem. 
          We're not just creating another token - we're building a revolutionary financial platform.
        </p>

        <div className="grid md:grid-cols-3 gap-8 px-8">
          {[
            { 
              icon: <Rocket className="mx-auto text-yellow-500" size={48} />, 
              title: 'Innovative Concept', 
              description: 'Cutting-edge blockchain technology with a unique approach to decentralized finance.'
            },
            { 
              icon: <ShieldCheck className="mx-auto text-yellow-500" size={48} />, 
              title: 'Enhanced Security', 
              description: 'State-of-the-art security protocols to protect investor interests.'
            },
            { 
              icon: <TrendingUp className="mx-auto text-yellow-500" size={48} />, 
              title: 'Future-Proof Strategy', 
              description: 'Long-term vision with sustainable growth and community-driven development.'
            }
          ].map((feature) => (
            <div 
              key={feature.title} 
              className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition group"
            >
              {feature.icon}
              <h3 className="text-xl mt-4 mb-2 group-hover:text-yellow-500 transition">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Roadmap Section */}
      <section 
        id="roadmap" 
        className="py-20 bg-black/50 text-center px-4"
      >
        <h2 className="text-4xl mb-12">Project Roadmap</h2>
        <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { quarter: 'Q1 2024', description: 'Concept Development & Initial Research' },
            { quarter: 'Q2 2024', description: 'Whitepaper Completion & Initial Community Building' },
            { quarter: 'Q3 2024', description: 'Token Development & Smart Contract Audit' },
            { quarter: 'Q4 2024', description: 'Initial Token Launch & Exchange Listings' }
          ].map((item) => (
            <div 
              key={item.quarter} 
              className="bg-black/50 p-6 rounded-lg hover:bg-black/70 transition"
            >
              <h3 className="text-xl text-yellow-500 mb-2">{item.quarter}</h3>
              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pump Section */}
      <section 
        id="pump" 
        className="py-20 bg-black text-center px-4"
      >
        <h2 className="text-4xl mb-8 text-green-500 flex items-center justify-center gap-4">
          <BarChart2 size={48} />
          Pump Mode
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-300">
          Real-time token performance and live pump mechanics. 
          Track our explosive potential on Pump.fun!
        </p>

        {/* Token Stats */}
        <div className="bg-black/50 p-6 rounded-lg mb-8 text-center max-w-2xl mx-auto">
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(tokenStats).map(([key, value]) => (
              <div key={key} className="p-4 bg-black/30 rounded-lg">
                <div className="text-2xl font-bold text-green-500">{value}</div>
                <div className="text-sm uppercase text-gray-400">{key}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-4">
          <a 
            href="https://pump.fun/token/YOUR_TOKEN_ADDRESS" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition flex items-center gap-2"
          >
            <Zap size={20} />
            Buy Now
          </a>
          <a 
            href="https://twitter.com/YOURTOKEN" 
            target="_blank" 
            rel="noopener noreferrer"
            className="border-2 border-green-500 text-white px-6 py-3 rounded-lg 
            hover:bg-green-500 hover:text-black transition flex items-center gap-2"
          >
            <Twitter size={20} />
            Follow
          </a>
        </div>
      </section>

      {/* Contact/Waitlist Section */}
      <section 
        id="contact" 
        className="py-20 bg-black text-center px-4"
      >
        <h2 className="text-4xl mb-4">Join Our Community</h2>
        <p className="mb-8 text-gray-300">Be the first to know about our token launch and exclusive updates!</p>

        <form 
          onSubmit={handleEmailSubmit} 
          className="max-w-md mx-auto flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2"
        >
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email" 
            required 
            className="flex-grow bg-white/10 p-3 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />
          <button 
            type="submit" 
            className="bg-yellow-500 text-black px-6 py-3 rounded-lg hover:bg-yellow-400 transition flex items-center justify-center gap-2"
          >
            {isSubmitted ? 'Submitted!' : 'Join Waitlist'}
          </button>
        </form>

        <div className="flex justify-center space-x-6 mt-12">
          {[
            { icon: <Twitter size={24} />, link: '#twitter', label: 'Twitter' },
            { icon: <Send size={24} />, link: '#telegram', label: 'Telegram' },
            { icon: <MessageCircle size={24} />, link: '#discord', label: 'Discord' }
          ].map((social) => (
            <a 
              key={social.label} 
              href={social.link} 
              aria-label={social.label}
              className="text-white hover:text-yellow-500 transition"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-center py-4">
        <p>&copy; 2024 Good Shit Token. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default GoodShitTokenApp;