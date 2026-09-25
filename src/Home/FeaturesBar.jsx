import React from 'react';
// react-icons থেকে Lucide আইকন ইম্পোর্ট করা হচ্ছে
import { LuShieldCheck, LuTruck, LuRotateCcw, LuLock } from 'react-icons/lu';

const features = [
  {
    id: 1,
    title: 'Premium Quality',
    subtitle: 'Crafted to last',
    icon: LuShieldCheck,
  },
  {
    id: 2,
    title: 'Fast & Reliable Shipping',
    subtitle: 'Worldwide delivery',
    icon: LuTruck,
  },
  {
    id: 3,
    title: 'Easy Returns',
    subtitle: 'Hassle-free process',
    icon: LuRotateCcw,
  },
  {
    id: 4,
    title: 'Secure Payments',
    subtitle: 'Your data is safe',
    icon: LuLock,
  },
];

const FeaturesBar = () => {
  return (
    <section className="w-full bg-[#0b0c10] text-white border-y border-gray-800/80 py-8 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* 
          - মোবাইলে: grid-cols-2 (উপরে ২টি, নিচে ২টি)
          - ল্যাপটপ/পিসিতে: md:grid-cols-4 (১ সারিতে ৪টি)
        */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 md:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex items-center gap-3 sm:gap-4 justify-start sm:justify-center"
              >
                {/* হলুদ গ্লোয়িং আইকন */}
                <div className="text-amber-400 text-2xl sm:text-3xl shrink-0">
                  <IconComponent />
                </div>

                {/* টাইটেল ও সাবটাইটেল */}
                <div className="flex flex-col">
                  <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide leading-snug">
                    {feature.title}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-400 font-light mt-0.5">
                    {feature.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesBar;