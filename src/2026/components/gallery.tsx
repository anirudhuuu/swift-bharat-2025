import SectionTitle from "@/2026/components/section-title";
import gallery1 from "@/assets/2026/gallery/1.webp";
import gallery10 from "@/assets/2026/gallery/10.webp";
import gallery11 from "@/assets/2026/gallery/11.webp";
import gallery12 from "@/assets/2026/gallery/12.webp";
import gallery13 from "@/assets/2026/gallery/13.webp";
import gallery2 from "@/assets/2026/gallery/2.webp";
import gallery3 from "@/assets/2026/gallery/3.webp";
import gallery4 from "@/assets/2026/gallery/4.webp";
import gallery5 from "@/assets/2026/gallery/5.webp";
import gallery6 from "@/assets/2026/gallery/6.webp";
import gallery7 from "@/assets/2026/gallery/7.webp";
import gallery8 from "@/assets/2026/gallery/8.webp";
import gallery9 from "@/assets/2026/gallery/9.webp";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

const EMBLA_OPTIONS = {
    loop: true,
    duration: 20,
    dragFree: false,
} as const;

const BENTO_GRID_HEIGHT_CLASS =
    "grid h-[min(62vw,32rem)] min-h-72 w-full grid-rows-2 gap-2 sm:h-[min(58vw,36rem)] sm:min-h-80 sm:gap-2.5 md:h-[min(54vw,40rem)] md:min-h-96 md:gap-3 lg:h-[min(50vw,42rem)] lg:min-h-[28rem]";

function getNeighborSlideIndices(
    selectedIndex: number,
    total: number,
): Set<number> {
    const indices = new Set<number>([selectedIndex]);
    indices.add((selectedIndex - 1 + total) % total);
    indices.add((selectedIndex + 1) % total);
    return indices;
}

type GalleryImage = {
    src: string;
    alt: string;
    width: number;
    height: number;
};

type GallerySlide = {
    images: [GalleryImage, GalleryImage, GalleryImage, GalleryImage];
};

/** Bento slots: top-left & bottom-right = wide landscape; top-right & bottom-left = narrow portrait */
const GALLERY_IMAGE_ENTRIES = {
    1: { src: gallery1, alt: "Swift Bharat gallery photo 1", width: 5712, height: 4284 },
    2: { src: gallery2, alt: "Swift Bharat gallery photo 2", width: 4284, height: 5712 },
    3: { src: gallery3, alt: "Swift Bharat gallery photo 3", width: 5712, height: 4284 },
    4: { src: gallery4, alt: "Swift Bharat gallery photo 4", width: 2048, height: 1537 },
    5: { src: gallery5, alt: "Swift Bharat gallery photo 5", width: 6000, height: 4000 },
    6: { src: gallery6, alt: "Swift Bharat gallery photo 6", width: 5712, height: 4284 },
    7: { src: gallery7, alt: "Swift Bharat gallery photo 7", width: 4032, height: 3024 },
    8: { src: gallery8, alt: "Swift Bharat gallery photo 8", width: 4032, height: 3024 },
    9: { src: gallery9, alt: "Swift Bharat gallery photo 9", width: 5712, height: 4284 },
    10: { src: gallery10, alt: "Swift Bharat gallery photo 10", width: 6000, height: 4000 },
    11: { src: gallery11, alt: "Swift Bharat gallery photo 11", width: 1537, height: 2048 },
    12: { src: gallery12, alt: "Swift Bharat gallery photo 12", width: 2048, height: 1537 },
    13: { src: gallery13, alt: "Swift Bharat gallery photo 13", width: 2048, height: 1537 },
} as const satisfies Record<number, GalleryImage>;

function aspectRatio(image: GalleryImage) {
    return image.width / image.height;
}

function isPortrait(image: GalleryImage) {
    return image.height > image.width;
}

/** Place landscapes in wide slots and portraits in narrow slots (Figma bento layout). */
function arrangeBentoImages(
    images: GalleryImage[],
): [GalleryImage, GalleryImage, GalleryImage, GalleryImage] {
    const remaining = [...images];

    const take = (
        preferPortrait: boolean | null,
        sort: (a: GalleryImage, b: GalleryImage) => number,
    ): GalleryImage => {
        const preferred =
            preferPortrait === null
                ? remaining
                : remaining.filter((img) =>
                    preferPortrait ? isPortrait(img) : !isPortrait(img),
                );
        const pool = preferred.length > 0 ? preferred : remaining;
        pool.sort(sort);
        const picked = pool[0];
        remaining.splice(remaining.indexOf(picked), 1);
        return picked;
    };

    const widestFirst = (a: GalleryImage, b: GalleryImage) =>
        aspectRatio(b) - aspectRatio(a);
    const tallestFirst = (a: GalleryImage, b: GalleryImage) =>
        aspectRatio(a) - aspectRatio(b);

    return [
        take(false, widestFirst),
        take(true, tallestFirst),
        take(true, tallestFirst),
        take(false, widestFirst),
    ];
}

function getBentoGridClass(images: GalleryImage[]) {
    if (images.every((img) => !isPortrait(img))) {
        return "grid-cols-2";
    }
    return "grid-cols-[minmax(0,1.65fr)_minmax(0,1fr)]";
}

function makeSlide(
    ...keys: (keyof typeof GALLERY_IMAGE_ENTRIES)[]
): GallerySlide {
    const images = keys.map((key) => GALLERY_IMAGE_ENTRIES[key]);
    return { images: arrangeBentoImages(images) };
}

const GALLERY_SLIDES: GallerySlide[] = [
    makeSlide(1, 2, 3, 4),
    makeSlide(5, 6, 7, 8),
    makeSlide(9, 10, 11, 12),
    makeSlide(13, 1, 2, 3),
];

const ALL_GALLERY_IMAGES: GalleryImage[] = (
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as const
).map((key) => GALLERY_IMAGE_ENTRIES[key]);

const SINGLE_IMAGE_GALLERY_SLIDES = ALL_GALLERY_IMAGES;

const DESKTOP_GALLERY_MEDIA_QUERY = "(min-width: 1024px)";

function useIsDesktopGallery() {
    const [isDesktop, setIsDesktop] = useState(
        () =>
            typeof window !== "undefined" &&
            window.matchMedia(DESKTOP_GALLERY_MEDIA_QUERY).matches,
    );

    useEffect(() => {
        const mediaQuery = window.matchMedia(DESKTOP_GALLERY_MEDIA_QUERY);
        const onChange = () => setIsDesktop(mediaQuery.matches);
        onChange();
        mediaQuery.addEventListener("change", onChange);
        return () => mediaQuery.removeEventListener("change", onChange);
    }, []);

    return isDesktop;
}

const GALLERY_IMAGE_CLASS =
    "absolute inset-0 h-full w-full object-cover";

const MOBILE_IMAGE_HEIGHT_CLASS =
    "relative h-[min(62vw,32rem)] min-h-72 w-full overflow-hidden rounded-2xl bg-ink sm:min-h-80";

function findGalleryImageIndex(image: GalleryImage) {
    return ALL_GALLERY_IMAGES.findIndex((entry) => entry.src === image.src);
}

type GalleryImageButtonProps = {
    image: GalleryImage;
    isActive: boolean;
    onOpen: (image: GalleryImage) => void;
    className?: string;
};

const GalleryImageButton = memo(function GalleryImageButton({
    image,
    isActive,
    onOpen,
    className,
}: GalleryImageButtonProps) {
    return (
        <button
            type="button"
            onClick={() => onOpen(image)}
            className={cn(
                "relative block w-full cursor-zoom-in overflow-hidden bg-ink transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                className,
            )}
            aria-label={`View ${image.alt} fullscreen`}
        >
            <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className={GALLERY_IMAGE_CLASS}
                loading={isActive ? "eager" : "lazy"}
                decoding={isActive ? "sync" : "async"}
                fetchPriority={isActive ? "high" : "low"}
                draggable={false}
            />
        </button>
    );
});

type GalleryLightboxProps = {
    imageIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
};

function GalleryLightbox({
    imageIndex,
    onClose,
    onPrev,
    onNext,
}: GalleryLightboxProps) {
    const image = ALL_GALLERY_IMAGES[imageIndex];
    const positionLabel = `${imageIndex + 1} of ${ALL_GALLERY_IMAGES.length}`;

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
            if (event.key === "ArrowLeft") onPrev();
            if (event.key === "ArrowRight") onNext();
        };

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [onClose, onPrev, onNext]);

    return createPortal(
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Gallery image preview"
            onClick={onClose}
        >
            <button
                type="button"
                onClick={onClose}
                aria-label="Close preview"
                className="absolute top-4 right-4 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:top-6 sm:right-6"
            >
                <X className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} aria-hidden />
            </button>

            <p className="absolute top-5 left-1/2 z-10 -translate-x-1/2 text-sm text-white/70 sm:top-7">
                {positionLabel}
            </p>

            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    onPrev();
                }}
                aria-label="Previous image"
                className="absolute top-1/2 left-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-4 sm:h-12 sm:w-12"
            >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} aria-hidden />
            </button>

            <button
                type="button"
                onClick={(event) => {
                    event.stopPropagation();
                    onNext();
                }}
                aria-label="Next image"
                className="absolute top-1/2 right-2 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-4 sm:h-12 sm:w-12"
            >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.5} aria-hidden />
            </button>

            <img
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="max-h-[calc(100vh-2rem)] max-w-full object-contain"
                onClick={(event) => event.stopPropagation()}
                draggable={false}
            />
        </div>,
        document.body,
    );
}

const GallerySingleImage = memo(function GallerySingleImage({
    image,
    isActive,
    onImageClick,
}: {
    image: GalleryImage;
    isActive: boolean;
    onImageClick: (image: GalleryImage) => void;
}) {
    return (
        <GalleryImageButton
            image={image}
            isActive={isActive}
            onOpen={onImageClick}
            className={MOBILE_IMAGE_HEIGHT_CLASS}
        />
    );
});

const GalleryBentoGrid = memo(function GalleryBentoGrid({
    images,
    isActive,
    onImageClick,
}: {
    images: GallerySlide["images"];
    isActive: boolean;
    onImageClick: (image: GalleryImage) => void;
}) {
    return (
        <div
            className={cn(BENTO_GRID_HEIGHT_CLASS, getBentoGridClass([...images]))}
        >
            {images.map((image, index) => (
                <GalleryImageButton
                    key={`${image.src}-${index}`}
                    image={image}
                    isActive={isActive}
                    onOpen={onImageClick}
                    className="min-h-0 rounded-2xl md:rounded-3xl"
                />
            ))}
        </div>
    );
});

function GallerySlidePlaceholder() {
    return (
        <div
            className={BENTO_GRID_HEIGHT_CLASS}
            aria-hidden
        />
    );
}

type CarouselNavButtonProps = {
    direction: "prev" | "next";
    onClick: () => void;
    disabled?: boolean;
};

function CarouselNavButton({
    direction,
    onClick,
    disabled,
}: CarouselNavButtonProps) {
    const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
    const label = direction === "prev" ? "Previous slide" : "Next slide";

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            aria-label={label}
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-ink text-white transition-opacity hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-40 sm:h-10 sm:w-10"
        >
            <Icon className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={2.5} aria-hidden />
        </button>
    );
}

const Gallery = () => {
    const isDesktop = useIsDesktopGallery();
    const slideCount = isDesktop
        ? GALLERY_SLIDES.length
        : SINGLE_IMAGE_GALLERY_SLIDES.length;

    const [emblaRef, emblaApi] = useEmblaCarousel(EMBLA_OPTIONS);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const openLightbox = useCallback((image: GalleryImage) => {
        const index = findGalleryImageIndex(image);
        if (index >= 0) setLightboxIndex(index);
    }, []);

    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    const showLightboxPrev = useCallback(() => {
        setLightboxIndex(
            (index) =>
                index === null
                    ? null
                    : (index - 1 + ALL_GALLERY_IMAGES.length) %
                    ALL_GALLERY_IMAGES.length,
        );
    }, []);

    const showLightboxNext = useCallback(() => {
        setLightboxIndex(
            (index) =>
                index === null
                    ? null
                    : (index + 1) % ALL_GALLERY_IMAGES.length,
        );
    }, []);

    const slidesInView = useMemo(
        () => getNeighborSlideIndices(selectedIndex, slideCount),
        [selectedIndex, slideCount],
    );

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.reInit();
        if (emblaApi.selectedScrollSnap() >= slideCount) {
            emblaApi.scrollTo(0);
        }
    }, [isDesktop, emblaApi, slideCount]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback(
        (index: number) => emblaApi?.scrollTo(index),
        [emblaApi],
    );

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        onSelect();
        emblaApi.on("select", onSelect);
        emblaApi.on("reInit", onSelect);

        return () => {
            emblaApi.off("select", onSelect);
            emblaApi.off("reInit", onSelect);
        };
    }, [emblaApi]);

    return (
        <section
            id="gallery"
            className="px-4 py-12 sm:px-6 sm:py-16 md:px-8 md:py-20 lg:px-10 lg:py-24"
        >
            <div className="mx-auto w-full max-w-[1222px] rounded-4xl bg-lime px-4 py-8 sm:rounded-[3rem] sm:px-6 sm:py-10 md:rounded-[4rem] md:px-10 md:py-14 lg:rounded-[5rem] lg:px-12 lg:py-16 xl:rounded-[6.375rem]">
                <SectionTitle className="mx-auto block w-fit text-center text-foreground">
                    gallery
                </SectionTitle>

                <div className="mt-8 sm:mt-10 md:mt-12">
                    <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
                        <CarouselNavButton direction="prev" onClick={scrollPrev} />

                        <div
                            className="min-w-0 flex-1 overflow-hidden transform-[translateZ(0)]"
                            ref={emblaRef}
                            aria-roledescription="carousel"
                        >
                            <div className="flex touch-pan-y backface-hidden will-change-transform">
                                {!isDesktop &&
                                    SINGLE_IMAGE_GALLERY_SLIDES.map((image, slideIndex) => {
                                        const isRendered =
                                            slidesInView.has(slideIndex);
                                        const isActive =
                                            slideIndex === selectedIndex;

                                        return (
                                            <div
                                                key={image.src}
                                                className="min-w-0 flex-[0_0_100%] contain-[layout_paint]"
                                                role="group"
                                                aria-roledescription="slide"
                                                aria-label={`${slideIndex + 1} of ${slideCount}`}
                                                aria-hidden={!isActive}
                                            >
                                                {isRendered ? (
                                                    <GallerySingleImage
                                                        image={image}
                                                        isActive={isActive}
                                                        onImageClick={openLightbox}
                                                    />
                                                ) : (
                                                    <div
                                                        className={MOBILE_IMAGE_HEIGHT_CLASS}
                                                        aria-hidden
                                                    />
                                                )}
                                            </div>
                                        );
                                    })}
                                {isDesktop &&
                                    GALLERY_SLIDES.map((slide, slideIndex) => {
                                        const isRendered =
                                            slidesInView.has(slideIndex);
                                        const isActive =
                                            slideIndex === selectedIndex;

                                        return (
                                            <div
                                                key={slideIndex}
                                                className="min-w-0 flex-[0_0_100%] contain-[layout_paint]"
                                                role="group"
                                                aria-roledescription="slide"
                                                aria-label={`${slideIndex + 1} of ${slideCount}`}
                                                aria-hidden={!isActive}
                                            >
                                                {isRendered ? (
                                                    <GalleryBentoGrid
                                                        images={slide.images}
                                                        isActive={isActive}
                                                        onImageClick={openLightbox}
                                                    />
                                                ) : (
                                                    <GallerySlidePlaceholder />
                                                )}
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>

                        <CarouselNavButton direction="next" onClick={scrollNext} />
                    </div>

                    <div
                        className="mt-6 flex items-center justify-center gap-2 sm:mt-8"
                        role="tablist"
                        aria-label="Gallery slides"
                    >
                        {Array.from({ length: slideCount }, (_, index) => {
                            const isActive = selectedIndex === index;
                            return (
                                <button
                                    key={index}
                                    type="button"
                                    role="tab"
                                    aria-selected={isActive}
                                    aria-label={`Go to slide ${index + 1}`}
                                    onClick={() => scrollTo(index)}
                                    className={cn(
                                        "cursor-pointer rounded-full bg-ink transition-[width,opacity] duration-200",
                                        isActive
                                            ? "h-1.5 w-8"
                                            : "h-2 w-2 hover:opacity-70",
                                    )}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>

            {lightboxIndex !== null && (
                <GalleryLightbox
                    imageIndex={lightboxIndex}
                    onClose={closeLightbox}
                    onPrev={showLightboxPrev}
                    onNext={showLightboxNext}
                />
            )}
        </section>
    );
};

export default Gallery;
