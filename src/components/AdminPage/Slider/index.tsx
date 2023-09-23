'use client';
import LanguageSelector from '@/components/MainPage/Header/LanguageSelector';
import { AdminTitle } from '@/components/atomic';
import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { useGlobalContext } from '@/store/globalContext';
import { TAdminSlide } from '@/types';
import { AddSlideButton } from './AddSlideBtn';
import { AdminSingleSlide } from './AdminSingleSlide.tsx/AdminSingleSlide';

export const AdminHeroSlider = () => {
  const { data: sliderData } = useHeroSliderSWR();
  const curLang = useGlobalContext().landingLanguage;

  return (
    <div className="max-h-screen w-full overflow-y-auto bg-base-light px-10">
      <header className="slider-header mb-4 flex h-[10.4rem] w-full basis-1 items-center justify-between">
        <AdminTitle>Слайдер</AdminTitle>
        <div className="h-[5.6rem] rounded-md bg-yellow-500 py-5">
          <LanguageSelector />
        </div>
      </header>
      <ul className="slider-main flex h-auto flex-col gap-y-28">
        <li className="slide-container flex h-[23.6rem] w-full items-center justify-center bg-base-dark shadow">
          <AddSlideButton dataLength={sliderData?.data.length} />
        </li>
        {sliderData &&
          sliderData.data.map((item: TAdminSlide) => (
            <AdminSingleSlide key={item._id} slideData={item} lang={curLang} />
          ))}
      </ul>
    </div>
  );
};
