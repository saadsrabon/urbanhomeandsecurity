import { motion } from "framer-motion";
// import heroImg from "../assets/hero.jpg"; // or your background image

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-darkBlue to-deepNavy text-white min-h-screen flex items-center px-6 lg:px-20">
      {/* Aurora Gradient Blob */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -left-20 w-[500px] h-[500px] bg-[#5eead4] opacity-30 rounded-full mix-blend-lighten blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-10 right-0 w-[600px] h-[600px] bg-[#4f46e5] opacity-30 rounded-full mix-blend-lighten blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full">
        {/* Left Content */}
        <motion.div
          className="max-w-2xl text-center lg:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-widest text-orange-300 font-semibold mb-3">
            Best Urban Home Company
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Quality Remodeling & <br /> Restoration You Can Trust
          </h1>
          <p className="text-lg text-gray-200 mb-8">
            Delivering excellence, durability, and unmatched craftsmanship for every project.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition"
          >
            Get A Free Estimate
          </motion.button>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="mt-10 lg:mt-0"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <img
            // src={heroImg}
            alt="Remodeling Hero"
            className="w-full max-w-lg rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
