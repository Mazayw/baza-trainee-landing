export const Dot = (index: number, currentSlide: number) => (
  <div
    className={`absolute bottom-0 rounded-full ${
      index === currentSlide
        ? 'h-[1.4rem] w-[1.4rem] bg-yellow-500'
        : 'h-[1rem] w-[1rem] bg-neutral-700'
    }`}
  />
);
