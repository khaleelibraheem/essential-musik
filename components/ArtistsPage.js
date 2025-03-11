import React, { useState, useEffect } from "react";
import { Disc, Music, PlayCircle, Award, ExternalLink, X, ChevronRight, Heart, Share2, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
  },
  exit: { 
    scale: 0.9, 
    opacity: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
  }
};

// Artist Card Component with hover effects and animations
const ArtistCard = ({ artist, onSelect, index }) => (
  <motion.div 
    variants={fadeInUp}
    transition={{ 
      duration: 0.6, 
      delay: index * 0.1,
      ease: [0.16, 1, 0.3, 1]
    }}
  >
    <Card className="group relative overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-white/20 transition-all duration-300 h-full">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative">
          <div className="aspect-square overflow-hidden">
            <Image
              src={artist.image}
              alt={artist.name}
              width={500}
              height={500}
              className="w-full h-full object-cover brightness-75 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
          <Badge 
            variant="outline" 
            className="absolute top-4 left-4 border-zinc-700 bg-black/50 backdrop-blur-sm text-white"
          >
            {artist.genre}
          </Badge>
        </div>
        
        <div className="p-5 sm:p-6 flex-grow flex flex-col justify-between border-t border-zinc-800">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-white/90">
              {artist.name}
            </h2>
            <p className="text-white/70 text-sm mb-4 line-clamp-2">{artist.description}</p>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between text-sm text-white/70">
              <div className="flex items-center">
                <PlayCircle size={16} className="mr-2 text-white/60" />
                {artist.stats.monthlyListeners}
              </div>
              <div className="flex items-center">
                <Award size={16} className="mr-2 text-white/60" />
                {artist.awards.length} awards
              </div>
            </div>
            
            <Button
              variant="outline"
              className="w-full bg-zinc-900 text-white border-zinc-700 hover:bg-white hover:text-black transition-colors duration-300 font-medium group-hover:border-white/40"
              onClick={() => onSelect(artist)}
            >
              View Profile <ChevronRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

// Statistics Card with animations
const StatCard = ({ value, label, icon, delay = 0 }) => (
  <motion.div
    variants={fadeInUp}
    transition={{ duration: 0.6, delay }}
    className="text-center p-5 bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:translate-y-[-2px]"
  >
    <div className="flex flex-col items-center">
      {icon}
      <div className="text-2xl sm:text-3xl font-bold text-white mt-2">{value}</div>
      <div className="text-sm text-white/70 mt-1">{label}</div>
    </div>
  </motion.div>
);

// Social Button with hover effects
const SocialButton = ({ platform, icon }) => (
  <Button
    variant="outline"
    className="gap-2 border-zinc-800 bg-zinc-900/80 backdrop-blur-sm hover:border-white/40 hover:bg-white hover:text-black transition-all duration-300 text-white"
    onClick={() => window.open(platform.url, "_blank")}
  >
    {icon}
    {platform.name}
  </Button>
);

// Album Card Component
const AlbumCard = ({ album, index }) => (
  <motion.div
    variants={fadeInUp}
    transition={{ delay: 0.1 + (index * 0.1) }}
    className="p-4 bg-zinc-900/80 backdrop-blur-sm rounded-xl border border-zinc-800 hover:border-white/30 transition-all duration-300 hover:translate-y-[-2px] group"
  >
    <div className="flex items-center gap-3">
      <div className="p-2 bg-zinc-800 rounded-lg group-hover:bg-white/10 transition-colors duration-300">
        <Disc className="text-white" size={20} />
      </div>
      <div>
        <div className="font-medium text-white group-hover:text-white/90">{album}</div>
        <div className="text-xs text-white/60 flex items-center mt-1">
          <Calendar size={12} className="mr-1" /> 2024
        </div>
      </div>
    </div>
  </motion.div>
);

const ArtistsPage = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Move data to a separate file in a real application
  const artists = [
    {
      name: "Sarah Blake",
      genre: "Electronic Soul",
      image: "/images/artist2.jpg",
      description:
        "Award-winning artist known for pushing boundaries in electronic soul music",
      albums: ["Ethereal Dreams", "Digital Soul", "Midnight Waves"],
      awards: ["Best New Artist 2024", "Electronic Album of the Year"],
      stats: {
        monthlyListeners: "2.5M",
        topChartPosition: "#3",
        totalStreams: "50M+",
      },
      socialLinks: [
        { name: "Spotify", url: "#", icon: <ExternalLink size={16} /> },
        { name: "Instagram", url: "#", icon: <ExternalLink size={16} /> },
        { name: "YouTube", url: "#", icon: <ExternalLink size={16} /> },
      ],
    },
    {
      name: "The Midnight Crew",
      genre: "Alternative Rock",
      image: "/images/artist1.jpg",
      description: "Four-piece band bringing fresh energy to alternative rock",
      albums: ["Night Drive", "Electric City", "Dawn Chorus"],
      awards: ["Rock Performance of the Year", "Best Live Act"],
      stats: {
        monthlyListeners: "1.8M",
        topChartPosition: "#5",
        totalStreams: "35M+",
      },
      socialLinks: [
        { name: "Spotify", url: "#", icon: <ExternalLink size={16} /> },
        { name: "Instagram", url: "#", icon: <ExternalLink size={16} /> },
        { name: "YouTube", url: "#", icon: <ExternalLink size={16} /> },
      ],
    },
    {
      name: "Luna Ray",
      genre: "Ambient Pop",
      image: "/images/artist3.jpg",
      description:
        "Innovative producer and vocalist creating atmospheric soundscapes",
      albums: ["Moonlight", "Stellar", "Aurora"],
      awards: ["Producer of the Year", "Best Ambient Album"],
      stats: {
        monthlyListeners: "3.2M",
        topChartPosition: "#2",
        totalStreams: "75M+",
      },
      socialLinks: [
        { name: "Spotify", url: "#", icon: <ExternalLink size={16} /> },
        { name: "Instagram", url: "#", icon: <ExternalLink size={16} /> },
        { name: "YouTube", url: "#", icon: <ExternalLink size={16} /> },
      ],
    },
    // ... other artists
  ];

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Handle keyboard events for modal
  const handleKeyPress = (e) => {
    if (e.key === "Escape" && selectedArtist) {
      setSelectedArtist(null);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedArtist]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedArtist) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedArtist]);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="py-12 sm:py-16 md:py-24 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section with animations */}
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="text-center mb-16 sm:mb-20 pt-20 md:pt-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge 
                  variant="outline" 
                  className="mb-6 px-4 py-1.5 border-zinc-700 text-white/90"
                >
                  <Music size={14} className="mr-2" /> Essential Musik
                </Badge>
              </motion.div>
              <motion.h1 
                className="text-4xl sm:text-6xl font-bold mb-6 sm:mb-8 text-white tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                Our Artists
              </motion.h1>
              <motion.p 
                className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Discover the exceptional talent shaping the future of music
              </motion.p>
            </div>
          </motion.div>

          {/* Artists Grid with staggered animations */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            variants={staggerContainer}
            initial="initial"
            animate={isLoading ? "initial" : "animate"}
          >
            {artists.map((artist, index) => (
              <ArtistCard 
                key={artist.name} 
                artist={artist} 
                onSelect={setSelectedArtist} 
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Artist Detail Modal with improved animations */}
      <AnimatePresence>
        {selectedArtist && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedArtist(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="relative bg-zinc-950 border border-zinc-800 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto scrollbar-hidden"
              onClick={(e) => e.stopPropagation()}
              variants={scaleIn}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/10 transition-colors rounded-full"
                onClick={() => setSelectedArtist(null)}
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </Button>

              <motion.div 
                className="relative h-64 sm:h-80"
                initial={{ opacity: 0.8, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover object-center brightness-75"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="mb-4 px-3 py-1 border-zinc-700 bg-black/50 backdrop-blur-sm text-white"
                    >
                      {selectedArtist.genre}
                    </Badge>
                    <h2
                      id="modal-title"
                      className="text-3xl sm:text-5xl font-bold mb-2 text-white"
                    >
                      {selectedArtist.name}
                    </h2>
                    <div className="flex items-center gap-4 mt-4">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-2 bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white hover:text-black transition-colors"
                      >
                        <Heart size={16} /> Follow
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="gap-2 hover:bg-white/10 text-white/80"
                      >
                        <Share2 size={16} /> Share
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              <div className="p-6 sm:p-8 space-y-8 sm:space-y-10">
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  variants={staggerContainer}
                  initial="initial"
                  animate="animate"
                >
                  <StatCard
                    value={selectedArtist.stats.monthlyListeners}
                    label="Monthly Listeners"
                    icon={<PlayCircle className="text-white/60" size={24} />}
                    delay={0.1}
                  />
                  <StatCard
                    value={selectedArtist.stats.topChartPosition}
                    label="Chart Position"
                    icon={<Award className="text-white/60" size={24} />}
                    delay={0.2}
                  />
                  <StatCard
                    value={selectedArtist.stats.totalStreams}
                    label="Total Streams"
                    icon={<Music className="text-white/60" size={24} />}
                    delay={0.3}
                  />
                </motion.div>

                <motion.section 
                  aria-labelledby="about-heading"
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.3 }}
                >
                  <h3
                    id="about-heading"
                    className="text-xl font-bold mb-4 text-white inline-flex items-center"
                  >
                    About
                    <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                  </h3>
                  <p className="text-white/80 leading-relaxed text-lg">
                    {selectedArtist.description}
                  </p>
                </motion.section>

                <motion.section 
                  aria-labelledby="albums-heading"
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.4 }}
                >
                  <h3
                    id="albums-heading"
                    className="text-xl font-bold mb-6 text-white inline-flex items-center"
                  >
                    Latest Albums
                    <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedArtist.albums.map((album, index) => (
                      <AlbumCard key={album} album={album} index={index} />
                    ))}
                  </div>
                </motion.section>

                <motion.section 
                  aria-labelledby="awards-heading"
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.5 }}
                >
                  <h3
                    id="awards-heading"
                    className="text-xl font-bold mb-6 text-white inline-flex items-center"
                  >
                    Awards & Recognition
                    <div className="h-px w-12 bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedArtist.awards.map((award, index) => (
                      <motion.div
                        key={award}
                        variants={fadeInUp}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                        className="flex items-center gap-3 p-3 bg-zinc-900/60 backdrop-blur-sm rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all duration-300"
                      >
                        <div className="p-2 bg-zinc-800 rounded-full">
                          <Award size={16} className="text-white" />
                        </div>
                        <span className="text-white/90">{award}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                <motion.div 
                  className="flex flex-col sm:flex-row justify-center gap-4 pt-6 border-t border-zinc-800/50"
                  variants={fadeInUp}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: 0.6 }}
                >
                  <h3 className="sr-only">Connect with {selectedArtist.name}</h3>
                  {selectedArtist.socialLinks.map((platform, index) => (
                    <motion.div 
                      key={platform.name}
                      variants={fadeInUp}
                      transition={{ delay: 0.6 + (index * 0.1) }}
                    >
                      <SocialButton
                        platform={platform}
                        icon={platform.icon}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ArtistsPage;
