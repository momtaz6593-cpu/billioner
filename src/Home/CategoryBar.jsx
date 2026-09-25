import React from 'react'
import BlackTShirt from '../assets/Black-T-shirt.png'
import whiteShirt from '../assets/white-shirt.png'
import BlackPant from '../assets/black-pant.png'
import jacket from '../assets/jacket.png'






const CategoryBar = () => {
    let categories=[
         {
      id: 1,
      title: 'T-SHIRTS',
      subtitle: 'Everyday comfort',
      image: BlackTShirt, 
    },
    {
      id: 2,
      title: 'SHIRTS',
      subtitle: 'Sharp & versatile',
      image: whiteShirt,
    },
    {
      id: 3,
      title: 'PANTS',
      subtitle: 'Move with confidence',
      image: BlackPant,
    },
    {
      id: 4,
      title: 'OUTERWEAR',
      subtitle: 'All season ready',
      image: jacket,
    },
    
        ];
return (
    <div className="w-full bg-[#0b0c10] border-t border-b border-gray-800 py-4 md:py-6 px-4 md:px-12">
      {/* মোবাইলে এক লাইনে থাকবে এবং ডেস্কটপে গ্রিড স্পেসিং সুন্দর পাবে */}
      <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto no-scrollbar gap-3 md:gap-6 text-white">
        {categories.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-3 min-w-[65px] md:min-w-0 cursor-pointer group hover:opacity-80 transition duration-300"
          >
            {/* ছবির বক্স: মোবাইলে একদম গোল (rounded-full) আর পিসিতে স্কয়ার (md:rounded-md) */}
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-900 border border-gray-800 rounded-full md:rounded-md overflow-hidden flex-shrink-0 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* টাইটেল এবং সাবটাইটেল */}
            <div className="text-center md:text-left">
              <h3 className="text-[10px] md:text-sm font-bold tracking-wider uppercase text-gray-200 whitespace-nowrap">
                {item.title}
              </h3>
              {/* সাবটাইটেল মোবাইলে লুকানো থাকবে, পিসিতে বড় স্ক্রিনে ভেসে উঠবে */}
              <p className="hidden md:block text-[10px] text-gray-400 font-light whitespace-nowrap">
                {item.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
