import React from 'react';
import Image from 'next/image';

const CoursesCategory = () => {
  const categories = [
    { icon: "/icon1.jpeg", title: "Design & Development", description: "50+ Courses Available" },
    { icon: "/icon2.jpeg", title: "Marketing", description: "50+ Courses Available" },
    { icon: "/icon3.jpeg", title: "Development", description: "50+ Courses Available" },
    { icon: "/icon4.jpeg", title: "Communication", description: "50+ Courses Available" },
    { icon: "/icon5.jpeg", title: "Digital Marketing", description: "50+ Courses Available" },
    { icon: "/icon6.jpeg", title: "Self Development", description: "50+ Courses Available" },
    { icon: "/business(1).jpeg", title: "Business", description: "50+ Courses Available" },
    { icon: "/business(2).jpeg", title: "Finance", description: "50+ Courses Available" },
    { icon: "/business(3).jpeg", title: "Consulting", description: "50+ Courses Available" },
  ];

  return (
    <>
      <h1 className="text-center font-bold text-[46px] mt-20" id='courses'>Explore Courses By Category</h1>
      <p className="text-[18px] text-center mt-4">
        Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-around h-[132px] w-full bg-[#F7F7F7]">
            <div className="h-[100px] w-[100px] bg-[#FFFFFF] flex items-center justify-center">
              {/* Image component to display icons */}
              <Image 
                src={category.icon} 
                alt={`${category.title}-icon`} 
                width={50}  // Adjust the size of the icon as needed
                height={50} // Adjust the size of the icon as needed
                className="object-contain" // Optional, ensures image scales well inside its container
              />
            </div>
            <div>
              <h1 className="text-[18px] font-bold">{category.title}</h1>
              <p>{category.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button className="border border-black px-4 py-3 rounded mt-16 hover:bg-black hover:text-white transition-all">
          View All Courses
        </button>
      </div>
    </>
  );
};

export default CoursesCategory;
