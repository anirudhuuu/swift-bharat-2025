import SectionTitle from "@/2026/components/section-title";

const Gallery = () => {
    return (
        <section
            id="gallery"
            className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24"
        >
            <div className="mx-auto w-full max-w-[1222px] rounded-4xl bg-lime px-4 py-8 sm:rounded-[3rem] sm:px-6 sm:py-10 md:rounded-[4rem] md:px-10 md:py-14 lg:rounded-[5rem] lg:px-12 lg:py-16 xl:rounded-[6.375rem]">
                <SectionTitle className="mx-auto block w-fit text-center text-foreground">
                    gallery
                </SectionTitle>
            </div>
        </section>
    );
};

export default Gallery;
