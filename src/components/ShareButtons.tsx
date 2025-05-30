
import React from 'react';
import { Share2, Twitter, Facebook, MessageCircle, Linkedin } from 'lucide-react';
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
  url = "https://f2bb57ef-0f45-41db-b638-f6ff583341fb.lovableproject.com",
  hashtags = ["BitcoinForum", "Bitcoin", "Ingolstadt", "VRBankBayernMitte"],
  className = ""
}) => {
  const shareData = {
    title,
    text: description,
    url
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    }
  };

  const handleTwitterShare = () => {
    const text = `${title} - ${description}`;
    const hashtagsStr = hashtags.map(tag => `#${tag}`).join(' ');
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}&hashtags=${encodeURIComponent(hashtags.join(','))}`;
    window.open(twitterUrl, '_blank');
  };

  const handleFacebookShare = () => {
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title + ' - ' + description)}`;
    window.open(facebookUrl, '_blank');
  };

  const handleWhatsAppShare = () => {
    const text = `${title}\n${description}\n${url}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLinkedInShare = () => {
    const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
    window.open(linkedinUrl, '_blank');
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {navigator.share && (
        <Button
          onClick={handleNativeShare}
          variant="outline"
          size="sm"
          className="flex items-center gap-2 border-[#F97316]/30 text-[#F97316] hover:bg-[#F97316]/10"
        >
          <Share2 className="h-4 w-4" />
          Teilen
        </Button>
      )}
      
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
    </div>
  );
};

export default ShareButtons;
