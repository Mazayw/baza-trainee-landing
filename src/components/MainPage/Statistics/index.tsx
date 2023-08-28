import Image from 'next/image';

import { dictionaries } from '@/app/[lang]/dictionaries';
import { ContainerMaxW1200 } from '@/components/atomic';
import { TLandingLanguage } from '@/store/globalContext';

export const Statistics = async ({ lang }: { lang: TLandingLanguage }) => {
  const dict = await dictionaries[lang]();
  return (
    <section className="relative">
      <Image
        src={'/img/statBg.webp'}
        alt={''}
        fill
        objectFit="cover"
        quality={90}
      />

      <ContainerMaxW1200 className="flex-center min-h-[14.4rem] text-center">
        <h2 className="mx-[5.95rem] my-12 text-[3.2rem] font-bold uppercase">
          {dict.invite.teamsWaitForYou}
        </h2>
      </ContainerMaxW1200>
    </section>
  );
};
