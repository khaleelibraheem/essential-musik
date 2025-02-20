import React, { useState } from "react";
import { Disc, Music, PlayCircle, Award, ExternalLink, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

// Separate components for better organization
const ArtistCard = ({ artist, onSelect }) => (
  <motion.div {...fadeInUp}>
    <Card className="group relative overflow-hidden bg-zinc-950 border border-zinc-800 hover:border-white/20 transition-colors">
      <CardContent className="p-0">
        <div className="relative">
          <div className="aspect-square overflow-hidden">
            <Image
              src={artist.image}
              alt={artist.name}
              width={500}
              height={500}
              className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-500"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 sm:p-6 w-full">
              <Button
                variant="outline"
                className="w-full bg-white text-black hover:bg-white/90 transition-colors font-medium"
                onClick={() => onSelect(artist)}
              >
                View Profile
              </Button>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6 border-t border-zinc-800">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">
            {artist.name}
          </h2>
          <Badge variant="outline" className="mb-4 border-zinc-700 text-white">
            {artist.genre}
          </Badge>
          <div className="flex items-center gap-4 text-sm text-white">
            <div className="flex items-center">
              <PlayCircle size={16} className="mr-2" />
              {artist.stats.monthlyListeners} monthly listeners
            </div>
            <div className="flex items-center">
              <Award size={16} className="mr-2" />
              {artist.awards.length} awards
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const StatCard = ({ value, label, delay }) => (
  <motion.div
    {...fadeInUp}
    transition={{ duration: 0.6, delay }}
    className="text-center p-4 bg-zinc-900 rounded-lg border border-zinc-800"
  >
    <div className="text-xl sm:text-2xl font-bold text-white">{value}</div>
    <div className="text-sm text-white">{label}</div>
  </motion.div>
);

const SocialButton = ({ platform, icon }) => (
  <Button
    variant="outline"
    className="gap-2 border-zinc-800 hover:border-white/20 hover:bg-white hover:text-black transition-colors text-black"
    onClick={() => window.open(platform.url, "_blank")}
  >
    {icon}
    {platform.name}
  </Button>
);

const ArtistsPage = () => {
  const [selectedArtist, setSelectedArtist] = useState(null);

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

  const handleKeyPress = (e) => {
    if (e.key === "Escape" && selectedArtist) {
      setSelectedArtist(null);
    }
  };

  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [selectedArtist]);

  // Prevent body scroll when modal is open
  React.useEffect(() => {
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
          {/* Hero Section */}
          <motion.div {...fadeInUp}>
            <div className="text-center mb-12 sm:mb-16 pt-[80px] md:pt-[30px]">
              <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 text-white tracking-tight">
                Our Artists
              </h1>
              <p className="text-lg sm:text-xl text-white max-w-2xl mx-auto">
                Discover the exceptional talent shaping the future of music
              </p>
            </div>
          </motion.div>

          {/* Artists Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {artists.map((artist, index) => (
              <motion.div
                {...fadeInUp}
                key={artist.name}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
              >
                <ArtistCard artist={artist} onSelect={setSelectedArtist} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artist Detail Modal */}
      {selectedArtist && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedArtist(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="relative bg-black border border-zinc-800 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-50 text-white hover:bg-white/10 transition-colors"
              onClick={() => setSelectedArtist(null)}
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="relative aspect-video sm:aspect-[2/1]">
              <Image
                src={selectedArtist.image}
                alt={selectedArtist.name}
                width={500}
                height={500}
                className="w-full h-full object-cover brightness-75"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 sm:p-8">
                <h2
                  id="modal-title"
                  className="text-2xl sm:text-4xl font-bold mb-2 text-white"
                >
                  {selectedArtist.name}
                </h2>
                <p className="text-lg sm:text-xl text-white">
                  {selectedArtist.genre}
                </p>
              </div>
            </div>

            <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <StatCard
                  value={selectedArtist.stats.monthlyListeners}
                  label="Monthly Listeners"
                />
                <StatCard
                  value={selectedArtist.stats.topChartPosition}
                  label="Chart Position"
                />
                <StatCard
                  value={selectedArtist.stats.totalStreams}
                  label="Total Streams"
                />
              </div>

              <section aria-labelledby="about-heading">
                <h3
                  id="about-heading"
                  className="text-xl font-bold mb-4 text-white"
                >
                  About
                </h3>
                <p className="text-white leading-relaxed">
                  {selectedArtist.description}
                </p>
              </section>

              <section aria-labelledby="albums-heading">
                <h3
                  id="albums-heading"
                  className="text-xl font-bold mb-4 text-white"
                >
                  Latest Albums
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {selectedArtist.albums.map((album) => (
                    <div
                      key={album}
                      className="p-4 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-white/20 transition-colors"
                    >
                      <Disc className="mb-2 text-white" />
                      <div className="font-medium text-white">{album}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section aria-labelledby="awards-heading">
                <h3
                  id="awards-heading"
                  className="text-xl font-bold mb-4 text-white"
                >
                  Awards & Recognition
                </h3>
                <div className="space-y-2">
                  {selectedArtist.awards.map((award) => (
                    <div
                      key={award}
                      className="flex items-center gap-2 text-white"
                    >
                      <Award size={16} />
                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </section>

              <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                {selectedArtist.socialLinks.map((platform) => (
                  <SocialButton
                    key={platform.name}
                    platform={platform}
                    icon={platform.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ArtistsPage;
