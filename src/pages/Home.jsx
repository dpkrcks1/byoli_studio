import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mouseOverCard, setMouseOverCard] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const categories = [
    {
      title: "Lehenga Collection",
      content: "Explore the exquisite world of handcrafted lehengas.",
      image:
        "https://pratapsons.com/cdn/shop/files/1_a8ba5c2f-6997-455c-919d-31cbe69860bb.jpg?v=1695727535&width=1000",
    },
    {
      title: "Menswear",
      content: "Discover timeless and elegant styles for men.",
      image:
        "https://static.standard.co.uk/2022/06/16/18/Menswear%20brands%20comp.jpg?crop=8:5,smart&quality=75&auto=webp&width=1000",
    },
    {
      title: "Accessories",
      content: "Complete your look with stunning accessories.",
      image:
        "https://cdn0.weddingwire.in/article/6783/3_2/960/jpg/113876-aashish-photography-295963379-553419449900058-1222055816937707744-n.jpeg",
    },
    {
      title: "Wedding Wear",
      content: "Shop exclusive wedding collections.",
      image:
        "https://cdn0.weddingwire.in/article/4472/3_2/1280/jpg/122744-wedding-dresses-for-bride-and-grooms-sister.jpeg",
    },
  ];

  const menuItems = [
    "WHAT'S NEW",
    "LEHENGA",
    "PICHORA",
    "STALLS",
    "ACCESSORIES",
    "WEDDINGS",
    "WORLD OF STUDIO",
  ];

  const cardContent = {
    "WHAT'S NEW": {
      options: ["Suits", "Explore"],
      images: [
        "https://5.imimg.com/data5/LE/VT/JJ/SELLER-49024477/women-clothes-500x500.jpg",
        "https://5.imimg.com/data5/XA/PQ/MY-26152501/party-wear-fancy-women-bridal-gown.jpg",
      ],
    },
    LEHENGA: {
      options: ["Designer Lehengas", "Bridal Wear"],
      images: [
        "https://5.imimg.com/data5/LE/VT/JJ/SELLER-49024477/women-clothes-500x500.jpg",
        "https://5.imimg.com/data5/XA/PQ/MY-26152501/party-wear-fancy-women-bridal-gown.jpg",
      ],
    },
    PICHORA: {
      options: ["Designer Lehengas", "Bridal Wear"],
      images: [
        "https://5.imimg.com/data5/LE/VT/JJ/SELLER-49024477/women-clothes-500x500.jpg",
        "https://5.imimg.com/data5/XA/PQ/MY-26152501/party-wear-fancy-women-bridal-gown.jpg",
      ],
    },
    STALLS: {
      options: ["Designer Lehengas", "Bridal Wear"],
      images: [
        "https://5.imimg.com/data5/LE/VT/JJ/SELLER-49024477/women-clothes-500x500.jpg",
        "https://5.imimg.com/data5/XA/PQ/MY-26152501/party-wear-fancy-women-bridal-gown.jpg",
      ],
    },
    ACCESSORIES: {
      options: ["Designer Lehengas", "Bridal Wear"],
      images: [
        "https://5.imimg.com/data5/LE/VT/JJ/SELLER-49024477/women-clothes-500x500.jpg",
        "https://5.imimg.com/data5/XA/PQ/MY-26152501/party-wear-fancy-women-bridal-gown.jpg",
      ],
    },
    WEDDINGS: {
      options: ["Designer Lehengas", "Bridal Wear"],
      images: [
        "https://5.imimg.com/data5/LE/VT/JJ/SELLER-49024477/women-clothes-500x500.jpg",
        "https://5.imimg.com/data5/XA/PQ/MY-26152501/party-wear-fancy-women-bridal-gown.jpg",
      ],
    },
    "WORLD OF STUDIO": {
      options: ["Designer Lehengas", "Bridal Wear"],
      images: [
        "https://5.imimg.com/data5/LE/VT/JJ/SELLER-49024477/women-clothes-500x500.jpg",
        "https://5.imimg.com/data5/XA/PQ/MY-26152501/party-wear-fancy-women-bridal-gown.jpg",
      ],
    },
  };

  return (
    <div className="relative">
      {/* Navbar */}
      <nav
        className={`w-full flex flex-col justify-between items-center px-10 py-5 ${
          scrolled
            ? "fixed top-0 left-0 w-full bg-gray-100 shadow-md z-20"
            : "absolute top-0 left-0 bg-transparent"
        } text-black`}
      >
        <div className="mt-5">
          <h1
            className={`text-5xl ${
              scrolled ? "text-black" : "text-white"
            } font-bold`}
          >
            BYOLI STUDIO
          </h1>
        </div>
        <div className="mt-5">
          <ul className="flex space-x-6 text-xl font-medium cursor-pointer relative z-10">
            {menuItems.map((item) => (
              <li
                key={item}
                onMouseEnter={() => {
                  setHoveredItem(item);
                }}
                onMouseLeave={() => {
                  if (!mouseOverCard) setHoveredItem(null);
                }}
                className={`relative group ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* Hover Card */}
          {(hoveredItem || mouseOverCard) &&
            hoveredItem &&
            cardContent[hoveredItem] && (
              <div
                className={`fixed left-0  w-screen h-[200px] bg-gray-100 shadow-lg py-6 px-10 flex transition-all duration-300 ease-in-out opacity-100 transform z-10`}
                onMouseEnter={() => setMouseOverCard(true)} // Track mouse over card
                onMouseLeave={() => setMouseOverCard(false)}
              >
                {/* Left Side: Options */}
                <div className="w-1/4 flex items-center justify-center">
                  <ul className="space-y-4">
                    {cardContent[hoveredItem].options.map((option, index) => (
                      <li
                        key={index}
                        className="text-black font-medium hover:text-gray-300 cursor-pointer"
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side: Images */}
                <div className="w-3/4 flex space-x-4 overflow-hidden items-center justify-center">
                  {cardContent[hoveredItem].images.map((image, index) => (
                    <div key={index} className="w-1/3">
                      <img
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-full h-32 object-cover rounded shadow-sm"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
        </div>
      </nav>

      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center flex items-end justify-center text-center"
        style={{
          backgroundImage: `url('https://cdn0.weddingwire.in/article/5003/original/1280/jpg/53005-latest-sabyasachi-collection-sabyasachi-charbagh.webp')`, // Replace with your image URL
        }}
      >
        <div className="text-white flex flex-col items-center justify-center mb-10">
          <h2 className="text-3xl font-bold">SABYASACHI X BERGDORF GOODMAN</h2>
          <button className="mt-4 px-6 py-2 border border-white text-white text-sm uppercase">
            Explore
          </button>
        </div>
      </div>

      {/** Banner section */}
      <div className="mt-10">
        {categories.map((category, index) => (
          <Banner
            key={index}
            title={category.title}
            content={category.content}
            image={category.image}
          />
        ))}
      </div>
    </div>
  );
}
