import { Achievements } from '@/components/MainPage/Achievements';
import { Footer } from '@/components/MainPage/Footer';
import { Forms } from '@/components/MainPage/Forms';
import { Header } from '@/components/MainPage/Header';
import { HeroSlider } from '@/components/MainPage/HeroSlider';
import { Partners } from '@/components/MainPage/Partners';
import { Projects } from '@/components/MainPage/Projects';
import { Reviews } from '@/components/MainPage/Reviews';
import Statistics from '@/components/MainPage/Statistics';
import { getDictionary } from './dictionaries';

export default async function Home({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang);

  const navLinks = [
    { title: dict.navbar.projects, href: '#projects' },
    { title: dict.navbar.partners, href: '#partners' },
    { title: dict.navbar.participate, href: '#forms' },
    { title: dict.navbar.contacts, href: '#footer' },
  ];

  return (
    <>
      <Header navLinks={navLinks} />
      <HeroSlider dictionary={dict} />
      <Projects dictionary={dict} />
      <Statistics dictionary={dict} />
      <Forms dictionary={dict} />
      <Partners dictionary={dict} />
      <Achievements dictionary={dict} />
      <Reviews dictionary={dict} />
      <Footer />
    </>
  );
}
