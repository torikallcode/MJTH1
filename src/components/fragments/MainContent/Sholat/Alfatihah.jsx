import React from "react";

// Hati hari pada huruf lam , mim dana apabila tasydid tidak dibaca maka bacaan Al-fatihah (14 tasydid dalam Al-fatihah)


export const Alfatihah = () => {
  return (
    <div className='flex flex-col w-full pb-3 lg:pt-5 lg:items-start lg:flex-row lg:gap-x-3 gap-y-7 font-poppins'>
      <div className='w-full'>
        <div className="overflow-x-auto">
          <div className="w-full mx-auto xl:max-w-6xl">
            <div className='mb-3'>
              <h1 className='text-3xl font-semibold font-poppins'>Al-Fatihah</h1>
              <p className='max-w-4xl text-base font-poppins'>Melafadzkan niat itu sunnah ,yang tujuannya untuk menguatkan niat. Sedangkan yang wajib itu melintaskan niat ke dalam hati, pada Mazhab Syafii Niat berada di dalam takbiratul ihram.
                Niat yang di hadirkan Ketika takbiratul Ihram bukan semuanya, tetapi hanya tiga yang di sebutkan yaitu bermaksud melakukan sholat fardu , menyebut meyakini kefarduannya dan di tentukan sholat apa Misal "Usalli fardu zuhri" , Sedangkan sholat sunnah rawatib yang di sebutkan hanya dua yaitu bermaksud melakukan sholat dan ditentukan sholat apa , Misal "Usalli qobliyah". Jika terjadi was was saat ingin melakukan Niat dalam Takbiratul ihram, boleh menggunakan mazhab Maliki yaitu melakukan Niat sebelum takbiratul ihram (ngk masalah jaraknya agak lama dengan takbiratul ihram asalkan belum berpaling dari Niatnya).Adapun seperti Mazhab abu Hanifah dan Mazhab Ahmad bin Hambal boleh sebelum takbiratul ihram tapi jarak Niat dan takbiratul ihram tersebut tidak terlalu jauh, Dan juga adapun dari Mazhab Zhahiri yaitu Niat dan takbiratul ihram harus nyambung (tidak ada jarak antara keduanya).
              </p>
            </div>
            <div className="flex flex-col w-full">
              <h1 className="mb-3">Cara Membaca Al-fatihah: </h1>
              <div className="bg-[#efeffd] mb-10 w-fit max-w-xl rounded-lg px-2 py-1 text-[#6366f1]">
                <h1>Catatan : </h1>
                <ul className="flex flex-col pl-5 list-disc list-outside">
                  <li>Merubah tempat keluar huruf sama degan merusak bunyi huruf, setiap huruf punya hak dan mustahak</li>
                  <li>Hak yaitu Makhraj , sedangkan MUstahak yaitu Suara huruf yang muncul pada huruf tertentu</li>
                  <li>Hati hati pada huruf lam , mim dan apabila tasydid tidak dibaca maka bacaan Al-fatihah tidak sah (14 tasydid dalam Al-fatihah)</li>
                  <li>4 huruf yang menggunakan gerakan bibir , yaitu <span className="text-2xl"> ب , وَ  , م , ف</span></li>
                </ul>
              </div>
              <ul className="flex flex-col w-full gap-y-10">
                <li>
                  <div className="flex flex-col">
                    <h1 className="bg-[#efeffd] w-fit mb-3 rounded-lg px-2 py-1 text-[#6366f1]">Taawuz : </h1>
                    <h2 className="text-4xl text-hitam">أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</h2>
                    <p>• Pada huruf lam di lafadz, Hujung lidah keatas(lelangit) kedepan , tidak ketengah tetapi tidak menyentuh gigi atas</p>
                    <p>• Pada huruf Ya di lafadz <span className="text-2xl">"الشَّيْطَانِ"</span>, Diberikan hak huruf yak tetapi tidak ada gerakkan bibir</p>
                    <p>• Pada huruf Tho di lafadz <span className="text-2xl">"الشَّيْطَانِ"</span>, Diberikan hak huruf Tho tetapi tidak ada gerakkan bibir</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col">
                    <h1 className="bg-[#efeffd] w-fit mb-3 rounded-lg px-2 py-1 text-[#6366f1]">Ayat 1 : </h1>
                    <h2 className="text-4xl text-hitam">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</h2>
                    <p>• Pada huruf RA, tempat keluar huruf RA tiada kaitannya dengan muncung bibir(tidak ada gerakan)</p>
                    <p>• Perhatikan Mad, Mad thabi'i tidak boleh lebih dari 2 harakat</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col">
                    <h1 className="bg-[#efeffd] w-fit mb-3 rounded-lg px-2 py-1 text-[#6366f1]">Ayat 2 : </h1>
                    <h2 className="text-4xl text-hitam">اَلْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَۙ</h2>
                    <p>• Pada huruf lam , Hujung lidah keatas(lelangit) kedepan , tidak ketengah tetapi tidak menyentuh gigi atas</p>
                    <p>• Pada lafadz <span className="text-2xl">"اَلْحَمْدُ"</span> Hati hati pada huruf lam (huruf berharakat sukun) , selain huruf qalqalah jangan di pantulkan</p>
                    <p>• Pada huruf Ba di lafadz <span className="text-2xl">"رَبِّ الْعٰلَمِيْنَۙ"</span>, Tekan huruf BA sambil memamasukkan bunyi lam</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col">
                    <h1 className="bg-[#efeffd] w-fit mb-3 rounded-lg px-2 py-1 text-[#6366f1]">Ayat 3 : </h1>
                    <h2 className="text-4xl text-hitam">الرَّحْمٰنِ الرَّحِيْمِۙ</h2>
                    <p>• Pada huruf RA, tempat keluar huruf RA tiada kaitannya dengan muncung bibir(tidak ada gerakan)</p>
                    <p>• Perhatikan Mad, Mad thabi'i tidak boleh lebih dari 2 harakat</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col">
                    <h1 className="bg-[#efeffd] w-fit mb-3 rounded-lg px-2 py-1 text-[#6366f1]">Ayat 4 : </h1>
                    <h2 className="text-4xl text-hitam">مٰلِكِ يَوْمِ الدِّيْنِۗ</h2>
                    <p>Perhatikan kasrah pada huruf "Kaf", harus kasrah yang sempurna</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col">
                    <h1 className="bg-[#efeffd] w-fit mb-3 rounded-lg px-2 py-1 text-[#6366f1]">Ayat 5 : </h1>
                    <h2 className="text-4xl text-hitam">اِيَّاكَ نَعْبُدُ وَاِيَّاكَ نَسْتَعِيْنُۗ</h2>
                    <p>• Kasrah "i" baru masuk ke "ya" pada lafadz <span className="text-2xl">"اِيَّا"</span>(tasydid dihuruf Ya) dan tekan "ya" tapi jangan terlalu lama</p>
                    <p>• pada huruf "KA" yaitu tipis <span className="text-2xl">"كَ"</span></p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col">
                    <h1 className="bg-[#efeffd] w-fit mb-3 rounded-lg px-2 py-1 text-[#6366f1]">Ayat 6 : </h1>
                    <h2 className="text-4xl text-hitam">اِهْدِنَا الصِّرَاطَ الْمُسْتَقِيْمَ</h2>
                    <p>• pada huruf "SOD" tidak boleh gerakkan bibir(muncung)</p>
                    <p>• Makhraj huruf "HA" dari tenggorokan bukan dari dada jadi keluarnya tipis, huruf Ha adalah huruf hijaiyah yang paling lemah</p>
                  </div>
                </li>
                <li>
                  <div className="flex flex-col">
                    <h1 className="bg-[#efeffd] w-fit mb-3 rounded-lg px-2 py-1 text-[#6366f1]">Ayat 7 : </h1>
                    <h2 className="text-4xl text-hitam">صِرَاطَ الَّذِيْنَ اَنْعَمْتَ عَلَيْهِمْ ەۙ غَيْرِ الْمَغْضُوْبِ عَلَيْهِمْ وَلَا الضَّاۤلِّيْنَ ࣖ</h2>
                    <p>• Pada huruf "Ghoin" Perhatikan Makhraj yaitu dari tenggorokan, dibaca "Ghoin" buka "Ghain"</p>
                    <p>• Pada lafadz <span className="text-2xl">"عَلَيْهِمْ وَ"</span> bibir dirapatkan dulu pada bagian <span className="text-2xl">"عَلَيْهِمْ"</span> baru masuk ke <span className="text-2xl">"وَ"</span></p>
                    <p>• pada huruf "DHO" tidak boleh gerakkan bibir(muncung) yang ada pada lafadz <span className="text-2xl">"لضَّاۤ"</span></p>
                    <p>• Pada lafadz <span className="text-2xl">"وَلَا الضَّاۤلِّيْنَ ࣖ"</span> "DHO" dibaca 6 harakat karena Mad lazim kalimi mutsaqal</p>
                    <p>• Perhatikan tasydid pada huruf lam</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* <ul className='flex flex-col list-disc list-inside font-poppins gap-y-3'>
              <div>
                <h1>Buya Yahya :</h1>
                <li className='text-blue-500 underline'>
                  <a href="https://youtu.be/AELTAEOT1Vo?si=-pq-MsEbxssRvHI9">https://youtu.be/AELTAEOT1Vo?si=-pq-MsEbxssRvHI9</a>
                </li>
                <li className='text-blue-500 underline'>
                  <a href="https://youtu.be/AELTAEOT1Vo?si=-pq-MsEbxssRvHI9">https://youtu.be/AELTAEOT1Vo?si=-pq-MsEbxssRvHI9</a>
                </li>
              </div>
              <div>
                <h1>Ustadz Adi Hidayat :</h1>
                <li className='text-blue-500 underline'>
                  <a href="https://youtu.be/QW3ZQy99VEY?si=5Sv42qZpvVvLrnt8">https://youtu.be/QW3ZQy99VEY?si=5Sv42qZpvVvLrnt8</a>
                </li>
              </div>
              <div>
                <h1>Ustadz Abdul Somad :</h1>
                <li className='text-blue-500 underline'>
                  <a href="https://youtu.be/S3xSkLkLUUo?si=5vZQ-eNUS1va9XXc">https://youtu.be/S3xSkLkLUUo?si=5vZQ-eNUS1va9XXc</a>
                </li>
              </div>
              <div>
                <h1>Ustadz Khalid Basalamah :</h1>
                <li className='text-blue-500 underline'>
                  <a href="https://youtu.be/PV7qDy37RaA?si=kbOC2vhO2sZp1WxQ">https://youtu.be/PV7qDy37RaA?si=kbOC2vhO2sZp1WxQ</a>
                </li>
              </div>
            </ul> */}
          </div>
        </div>
      </div>
    </div >
  )
}