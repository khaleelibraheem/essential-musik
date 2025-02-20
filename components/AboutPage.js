// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const AboutPage = () => {
//   const stats = [
//     { label: "Years Active", value: "25+" },
//     { label: "Artists Signed", value: "100+" },
//     { label: "Albums Released", value: "500+" },
//     { label: "Grammy Awards", value: "15" }
//   ];

//   const team = [
//     {
//       name: "Michael Stone",
//       role: "CEO & Founder",
//       image: "/images/ceo.jpg",
//     },
//     {
//       name: "Sarah Chen",
//       role: "Head of A&R",
//       image: "/images/head-of-ar.jpg",
//     },
//     {
//       name: "David Williams",
//       role: "Creative Director",
//       image: "/images/director.jpg",
//     },
//   ];

//   return (
//     <main className="pt-24">
//       {/* Hero Section */}
//       <motion.section 
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="relative py-32 px-6"
//       >
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-24">
//             <motion.h1 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.2 }}
//               className="text-6xl font-bold mb-8 tracking-tight"
//             >
//               About Essential Music
//             </motion.h1>
//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
//             >
//               More than a record label - we&apos;re a community of visionaries,
//               innovators, and artists pushing the boundaries of what&apos;s possible
//               in music.
//             </motion.p>
//           </div>
//         </div>
//       </motion.section>

//       {/* Stats Section */}
//       <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-900">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
//             {stats.map((stat, index) => (
//               <motion.div 
//                 key={index} 
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <motion.div 
//                   initial={{ scale: 0.5 }}
//                   whileInView={{ scale: 1 }}
//                   viewport={{ once: true }}
//                   transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
//                   className="text-5xl font-bold mb-4"
//                 >
//                   {stat.value}
//                 </motion.div>
//                 <div className="text-gray-400 text-lg">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* History Section */}
//       <section className="py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid md:grid-cols-2 gap-16 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-4xl font-bold mb-8 tracking-tight">Our Story</h2>
//               <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
//                 <p>
//                   Founded in 2000, Essential Music has been at the forefront of
//                   musical innovation for over two decades. What started as a small
//                   independent label has grown into a global powerhouse of artistic
//                   expression and musical excellence.
//                 </p>
//                 <p>
//                   We&apos;ve consistently pushed boundaries, discovered groundbreaking
//                   talent, and helped shape the future of music across all genres.
//                   Our commitment to artistic integrity and innovation has earned
//                   us numerous industry accolades and the trust of both established
//                   and emerging artists.
//                 </p>
//                 <p>
//                   Today, we continue to evolve, embrace new technologies, and
//                   support our artists in reaching new heights while maintaining
//                   the personal touch and dedication that has always set us apart.
//                 </p>
//               </div>
//             </motion.div>
//             <motion.div 
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="grid grid-cols-2 gap-6"
//             >
//               <motion.div
//                 whileHover={{ y: -10 }}
//                 transition={{ duration: 0.4 }}
//               >
//                 <Image
//                   src="/images/studio.jpg"
//                   alt="Studio"
//                   width={500}
//                   height={500}
//                   className="rounded-2xl w-full h-full object-cover shadow-2xl"
//                 />
//               </motion.div>
//               <motion.div
//                 whileHover={{ y: -10 }}
//                 transition={{ duration: 0.4 }}
//                 className="mt-12"
//               >
//                 <Image
//                   src="/images/concert.jpg"
//                   alt="Performance"
//                   width={500}
//                   height={500}
//                   className="rounded-2xl w-full h-full object-cover shadow-2xl"
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-32 px-6 bg-gradient-to-b from-gray-900 to-black">
//         <div className="max-w-7xl mx-auto">
//           <motion.h2 
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6 }}
//             className="text-4xl font-bold mb-24 text-center tracking-tight"
//           >
//             Leadership Team
//           </motion.h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
//             {team.map((member, index) => (
//               <motion.div 
//                 key={index} 
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                 className="text-center group"
//               >
//                 <motion.div 
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.4 }}
//                   className="relative mb-8 mx-auto w-64 h-64 overflow-hidden rounded-2xl"
//                 >
//                   <Image
//                     src={member.image}
//                     alt={member.name}
//                     width={500}
//                     height={500}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </motion.div>
//                 <h3 className="text-2xl font-bold mb-3">{member.name}</h3>
//                 <p className="text-gray-400 text-lg">{member.role}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default AboutPage;


import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Award, Users, Music, Trophy } from 'lucide-react';
import Image from 'next/image';

const AboutPage = () => {
  const stats = [
    { label: "Years Active", value: "25+", icon: Award },
    { label: "Artists Signed", value: "100+", icon: Users },
    { label: "Albums Released", value: "500+", icon: Music },
    { label: "Industry Awards", value: "15", icon: Trophy }
  ];

  const team = [
    {
      name: "Michael Stone",
      role: "CEO & Founder",
      image: "/images/ceo.jpg",
      quote: "Music has the power to change lives. We're here to amplify that power."
    },
    {
      name: "Sarah Chen",
      role: "Head of A&R",
      image: "/images/head-of-ar.jpg",
      quote: "Finding and nurturing talent is not just our job, it's our passion."
    },
    {
      name: "David Williams",
      role: "Creative Director",
      image: "/images/director.jpg",
      quote: "We don't follow trends, we create them."
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-radial from-purple-500/10 via-black to-black" />
        </div>
        
        <div className="relative max-w-7xl mx-auto text-center pt-[80px] md:pt-[0px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
              Shaping the Future <br className="hidden sm:block" />
              of Music Since 2000
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              More than a record label - we&apos;re a community of visionaries,
              innovators, and artists pushing the boundaries of what&apos;s possible
              in music.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm"
              >
                <stat.icon className="w-12 h-12 mb-6 text-purple-500" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-24 px-6 lg:px-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight">Our Story</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  Founded in 2000, Essential Musik has been at the forefront of
                  musical innovation for over two decades. What started as a small
                  independent label has grown into a global powerhouse of artistic
                  expression and musical excellence.
                </p>
                <p className="text-lg leading-relaxed">
                  We&apos;ve consistently pushed boundaries, discovered groundbreaking
                  talent, and helped shape the future of music across all genres.
                  Our commitment to artistic integrity and innovation has earned
                  us numerous industry accolades and the trust of both established
                  and emerging artists.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              {...fadeInUp}
              className="grid grid-cols-2 gap-4 sm:gap-6"
            >
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="aspect-[4/5] rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/images/studio.jpg"
                    alt="Studio"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="aspect-[4/5] rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/images/concert.jpg"
                    width={500}
                    height={500}
                    alt="Concert"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              <div className="mt-12 space-y-4 sm:space-y-6">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="aspect-[4/5] rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/images/performance1.jpg"
                    width={500}
                    height={500}
                    alt="Studio"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="aspect-[4/5] rounded-2xl overflow-hidden"
                >
                  <Image
                    src="/images/performance2.jpg"
                    width={500}
                    height={500}
                    alt="Concert"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-20 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-400 text-lg">Meet the visionaries behind Essential Musik</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                {...fadeInUp}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/3] mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-lg italic">&quot;{member.quote}&quot;</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                <p className="text-purple-500">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;