import React from 'react';
import { FaLinkedin, FaTwitter, FaGlobe, FaStar } from 'react-icons/fa'; // Removed FaStarHalfAlt
import Image from 'next/image';

const Team = () => {
  return (
    <>
      <div className="bg-[#F7F7F7] mt-32 px-4 md:px-8 pt-10" id="team">
        <h1 className="text-[32px] md:text-[48px] text-center font-bold">Our team</h1>
        <p className="mt-4 text-[16px] md:text-[18px] text-center mb-8 md:mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {[ 
            { img: "/per1.jpeg", name: "James Nduku", role: "Marketing Coordinator" },
            { img: "/per2.jpeg", name: "Joseph Munyambu", role: "Nursing Assistant" },
            { img: "/per3.jpeg", name: "Joseph Ngumbau", role: "Medical Assistant" },
            { img: "/per4.jpeg", name: "Mary Wanjiru", role: "Project Manager" },
            { img: "/per5.jpeg", name: "Simon Kamau", role: "Software Engineer" },
            { img: "/per6.jpeg", name: "Catherine Nyambura", role: "Graphic Designer" },
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center space-y-4">
              <Image src={member.img} alt={`person${index + 1}`} height={100} width={100} className="rounded-full" />
              <h1 className="text-[18px] md:text-[20px] font-bold">{member.name}</h1>
              <h3 className="text-[16px] md:text-[18px]">{member.role}</h3>
              <div className="flex space-x-4 justify-center mt-4">
                <FaLinkedin size={24} className="cursor-pointer" />
                <FaTwitter size={24} className="cursor-pointer" />
                <FaGlobe size={24} className="cursor-pointer" />
              </div>
            </div>
          ))}
        </div>

        <h1 className="font-bold text-[32px] md:text-[48px] mt-20 md:mt-44 text-center md:text-left ml-4" id="testimonial">
          Customer testimonials
        </h1>
        <p className="text-[16px] md:text-[18px] text-center md:text-left ml-4 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 justify-items-center">
          {[ 
            { 
              rating: 5, 
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", 
              img: "/per3.jpeg",  // Image name changed to: per3.jpeg
              name: "James Nduku", 
              role: "Software Developer" 
            },
            { 
              rating: 5, 
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", 
              img: "/per1.jpeg",  // Image name changed to: per1.jpeg
              name: "Erick Kipkemboi", 
              role: "Scrum Master" 
            },
            { 
              rating: 5, 
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.", 
              img: "/per6.jpeg",  // Image name changed to: per6.jpeg
              name: "Stephen Kerubo", 
              role: "UI/UX Designer" 
            },
          ].map((testimonial, index) => (
            <div key={index} className="border border-black p-4 w-[95%] md:w-[416px] h-auto rounded-lg">
              <div className="flex space-x-1 mb-4">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <FaStar key={i} size={20} color="black" />
                ))}
              </div>
              <p className="text-[16px] md:text-[18px]">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center mt-6">
                <Image 
                  src={testimonial.img} 
                  alt="testimonial-img" 
                  width={56} 
                  height={56} 
                  className="rounded-full" 
                />
                <div className="ml-4">
                  <h1 className="font-bold text-[16px]">{testimonial.name}</h1>
                  <h3 className="text-[16px]">{testimonial.role}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Image src="/images/dot.png" alt="dot-images" width={72} height={8} className="pb-32" />
        </div>
      </div>
    </>
  );
};

export default Team;
