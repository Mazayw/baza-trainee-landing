import { sliderValidateOptions } from './sliderValidateOptions';
import { TFormInputs } from './types';

import { createImgUrl } from '@/utils/imageHandler';

import { LogoMain } from '@/components/common/icons';
import { Control, useWatch } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { useHeroSliderSWR } from '@/hooks/SWR/useHeroSlidersSWR';
import { TSlideResp } from '@/types';
import { SingleSlide } from '@/components/MainPage/HeroSlider/SingleSlide';
import { TLandingLanguage } from '@/store/globalContext';

type TProps = {
  lang: TLandingLanguage;
  control: Control<TFormInputs, any>;
  slideId?: string;
};

const EmptyPreview = () => (
  <div className="flex-center w-full rounded-md bg-neutral-75 py-[10.2rem]">
    <LogoMain className="h-72 w-72 text-neutral-200" />
  </div>
);

export default function PreviewSlide({ lang, control, slideId }: TProps) {
  const { getByIdSlide } = useHeroSliderSWR();
  const [slideImgUrl, setSlideImgUrl] = useState<string>();
  const currentValues = useWatch({ control });
  const { file } = currentValues;

  console.log(slideImgUrl, slideId);

  useEffect(() => {
    if (slideId) {
      const projectDataById = getByIdSlide(slideId);
      projectDataById && setSlideImgUrl(createImgUrl(projectDataById.imageUrl));
    }
  }, []);

  useEffect(() => {
    if (!file?.length) return;

    (async () => {
      const isValidImg = await sliderValidateOptions.img().validate(file);

      if (typeof isValidImg !== 'string') {
        setSlideImgUrl(URL.createObjectURL(file[0]));
      }
    })();
  }, [file]);

  if (!slideImgUrl) {
    return <EmptyPreview />;
  }

  const slidePreview: TSlideResp = {
    _id: '',
    title: {
      ua: currentValues.titleUa || '',
      en: currentValues.titleEn || '',
      pl: currentValues.titlePl || '',
    },
    subtitle: {
      ua: currentValues.subtitleUa || '',
      en: currentValues.subtitleEn || '',
      pl: currentValues.subtitlePl || '',
    },
    imageUrl: slideImgUrl,
  };

  return (
    <div className="flex-center h-[38.4rem] w-full overflow-hidden rounded-md">
      <SingleSlide slideData={slidePreview} lang={lang} index={0} />
    </div>
  );
}
