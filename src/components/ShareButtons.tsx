
import React from 'react';
import { Share2, Twitter, Facebook, MessageCircle, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareButtonsProps {
  title?: string;
  description?: string;
  url?: string;
  hashtags?: string[];
  className?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({
  title = "3. BitcoinForum - VR-Bank Bayern Mitte",
  description = "Die spannende Welt von Bitcoin und der Blockchain-Technologie. 09.-11. Oktober 2025, Saturn Arena Ingolstadt",
  url = "https://bitcoinforum.bayern",
  hashtags = ["BitcoinForum", "Bitcoin", "Ingolstadt", "VRBankBayernMitte"],
  className = ""
}) => {
  const shareData = {
    title,
    text: description,
    url
  };

  const handleNativeShare = async () => {
    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
        // Fallback to copying to clipboard
        handleCopyLink();
      }
    } else {
      handleCopyLink();
    }
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://bitcoinforum.bayern');
      console.log('Link copied to clipboard');
    } catch (error) {
      console.log('Failed to copy link:', error);
    }
  };

  const handleTwitterShare = () => {
    const text = `${title}

${description}

${hashtags.map(tag => `#${tag}`).join(' ')}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent('https://bitcoinforum.bayern')}`;
    window.open(twitterUrl, '_blank', 'width=600,height=400');
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://bitcoinforum.bayern')}&quote=${encodeURIComponent(`${title}

${description}`)}`;
    window.open(facebookUrl, '_blank', 'width=600,height=400');
  };

  const handleWhatsAppShare = () => {
    const text = `*${title}*

${description}

🔗 https://bitcoinforum.bayern

${hashtags.map(tag => `#${tag}`).join(' ')}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://bitcoinforum.bayern')}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
    window.open(linkedinUrl, '_blank', 'width=600,height=400');
  };

  const handleInstagramShare = () => {
    // Copy formatted text for Instagram
    const instagramText = `${title}

${description}

🔗 https://bitcoinforum.bayern

${hashtags.map(tag => `#${tag}`).join(' ')}`;
    navigator.clipboard.writeText(instagramText).then(() => {
      console.log('Instagram text copied to clipboard');
    });
    window.open('https://www.instagram.com/', '_blank');
  };

  const handleTikTokShare = () => {
    // Copy formatted text for TikTok
    const tiktokText = `${title}

${description}

🔗 https://bitcoinforum.bayern

${hashtags.map(tag => `#${tag}`).join(' ')}`;
    navigator.clipboard.writeText(tiktokText).then(() => {
      console.log('TikTok text copied to clipboard');
    });
    window.open('https://www.tiktok.com/', '_blank');
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button
        onClick={handleNativeShare}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 border-[#F97316]/30 text-[#F97316] hover:bg-[#F97316]/10"
      >
        <Share2 className="h-4 w-4" />
        Teilen
      </Button>
      
      <Button
        onClick={handleTwitterShare}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 border-blue-400/30 text-blue-600 hover:bg-blue-50"
      >
        <Twitter className="h-4 w-4" />
        Twitter
      </Button>
      
      <Button
        onClick={handleFacebookShare}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 border-blue-600/30 text-blue-700 hover:bg-blue-50"
      >
        <Facebook className="h-4 w-4" />
        Facebook
      </Button>
      
      <Button
        onClick={handleWhatsAppShare}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 border-green-500/30 text-green-600 hover:bg-green-50"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </Button>
      
      <Button
        onClick={handleLinkedInShare}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 border-blue-700/30 text-blue-800 hover:bg-blue-50"
      >
        <Linkedin className="h-4 w-4" />
        LinkedIn
      </Button>

      <Button
        onClick={handleInstagramShare}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 border-pink-500/30 text-pink-600 hover:bg-pink-50"
      >
        <Instagram className="h-4 w-4" />
        Instagram
      </Button>

      <Button
        onClick={handleTikTokShare}
        variant="outline"
        size="sm"
        className="flex items-center gap-2 border-gray-800/30 text-gray-800 hover:bg-gray-50"
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
        TikTok
      </Button>
    </div>
  );
};

export default ShareButtons;
