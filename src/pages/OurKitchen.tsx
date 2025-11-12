import { Bell } from 'lucide-react';

export default function OurKitchen() {
  return (
    <section className="bg-[#00b262] py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Text */}
        <div className="space-y-2 sm:space-y-4 text-white order-2 lg:order-1">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-[#00502c]">
            Bizning Oshxona
          </h2>
          <p className="text-sm sm:text-base lg:text-lg font-medium leading-relaxed text-white">
            Novda School oshxonasi o‘quvchilarimiz uchun muvozanatli, to‘yimli va mazali ovqatlar bilan ta’minlaydi. Haftalik menyu dietologlar tomonidan ishlab chiqilib, har bir taom foydali vitamin va minerallar bilan boyitilgan. O‘quvchilarimizni energiya bilan to‘ldirish va sog‘lom turmush tarzini qo‘llab-quvvatlash uchun oshxonamizda kunlik yangi mahsulotlardan foydalaniladi. Shu bilan birga, o‘quvchilarning ta’biga mos milliy va xalqaro taomlar ham tayyorlanadi.
          </p>
        </div>

        {/* Right Column - Image with Overlays */}
        <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
          {/* Main Image Container */}
          <div className="relative rounded-3xl w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden shadow-2xl">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=800&fit=crop"
                alt="School cafeteria with fresh meals"
                className="w-full h-[300px] lg:h-[500px] object-cover"
              />
            </div>
            
            {/* Top Right Badge */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white rounded-full px-3 sm:px-4 py-2 flex items-center gap-2 shadow-lg">
              <span className="text-xs sm:text-sm font-medium text-gray-800">Taomlar</span>
              <div className="flex items-center gap-1">
                <span className="text-xs sm:text-sm text-gray-800 font-semibold">2–3 mahal</span>
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500 fill-orange-500" />
              </div>
            </div>

            {/* Bottom Badge */}
            <div className="absolute bottom-4 sm:bottom-6 left-1/4 -translate-x-1/2 bg-white rounded-xl px-4 sm:px-5 py-2.5 sm:py-4 flex items-center gap-2 shadow-lg max-w-[90%]">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-800">
                Oshxona to'lovi mavjud emas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}