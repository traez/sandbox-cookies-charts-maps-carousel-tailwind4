"use client";
import { useState, useRef, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// Update the interface to match the actual methods available
interface AliceCarouselMethods extends AliceCarousel {
  slideTo: (index: number) => void;
  slideNext: () => void;
  slidePrev: () => void;
}

// Define types for the carousel items and event handlers
type CarouselItem = {
  id: number;
  color: string;
  text: string;
};

interface SlideChangedEvent {
  item: number;
  slide: number;
  itemsInSlide: number;
  isPrevSlideDisabled: boolean;
  isNextSlideDisabled: boolean;
}

export default function Carousel() {
  const carouselRef = useRef<AliceCarouselMethods | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  // Add state to control client-side rendering
  const [isClient, setIsClient] = useState(false);

  // Use useEffect to set isClient to true after component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Responsive breakpoints configuration
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  // Sample items for the carousel
  const items: CarouselItem[] = [
    { id: 1, color: "bg-red-500", text: "Slide 1" },
    { id: 2, color: "bg-blue-500", text: "Slide 2" },
    { id: 3, color: "bg-green-500", text: "Slide 3" },
    { id: 4, color: "bg-yellow-500", text: "Slide 4" },
    { id: 5, color: "bg-purple-500", text: "Slide 5" },
    { id: 6, color: "bg-pink-500", text: "Slide 6" },
  ];

  // Generate carousel items with custom rendering
  const carouselItems = items.map((item) => (
    <div key={item.id} className="carousel-item">
      <div
        className={`h-64 w-full flex items-center justify-center text-white text-2xl font-bold rounded-lg ${item.color}`}
      >
        {item.text}
      </div>
    </div>
  ));

  // Custom thumbnail items
  const thumbItems = items.map((item, i) => (
    <div
      key={i}
      className={`h-10 w-10 rounded cursor-pointer mx-1 ${item.color} ${
        activeIndex === i ? "border-4 border-white" : ""
      }`}
      onClick={() => carouselRef.current?.slideTo(i)}
    />
  ));

  // Event handling functions
  const handleSlideChanged = (e: SlideChangedEvent) => {
    setActiveIndex(e.item);
  };

  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  const syncActiveIndex = ({ item }: { item: number }) => setActiveIndex(item);

  // Return a loading state or null until client-side rendering is ready
  if (!isClient) {
    return <div className="container mx-auto p-4">Loading carousel...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">React Alice Carousel Demo</h1>

      {/* Main Carousel */}
      <div className="carousel-container mb-8">
        <AliceCarousel
          ref={carouselRef}
          items={carouselItems}
          responsive={responsive}
          controlsStrategy="alternate"
          // Navigation controls
          disableButtonsControls={false}
          disableDotsControls={false}
          renderPrevButton={() => (
            <button className="p-2 bg-gray-800 text-white rounded absolute left-0 top-1/2 transform -translate-y-1/2">
              Prev
            </button>
          )}
          renderNextButton={() => (
            <button className="p-2 bg-gray-800 text-white rounded absolute right-0 top-1/2 transform -translate-y-1/2">
              Next
            </button>
          )}
          // Animation and timing options
          animationDuration={800}
          autoPlayInterval={2000}
          infinite={true}
          autoPlay={isPlaying}
          // Touch and mouse dragging
          mouseTracking={true}
          touchTracking={true}
          disableSlideInfo={false}
          // Events
          onSlideChanged={handleSlideChanged}
          activeIndex={activeIndex}
          onSlideChange={syncActiveIndex}
        />
      </div>

      {/* Controls Panel */}
      <div className="controls-panel flex flex-wrap gap-2 mb-6">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={toggleAutoplay}
        >
          {isPlaying ? "Pause" : "Play"}
        </button>

        <button
          className="px-4 py-2 bg-gray-600 text-white rounded"
          onClick={() => carouselRef.current?.slidePrev()}
        >
          Prev
        </button>

        <button
          className="px-4 py-2 bg-gray-600 text-white rounded"
          onClick={() => carouselRef.current?.slideNext()}
        >
          Next
        </button>

        <button
          className="px-4 py-2 bg-gray-600 text-white rounded"
          onClick={() => carouselRef.current?.slideTo(0)}
        >
          Go to First
        </button>

        <button
          className="px-4 py-2 bg-gray-600 text-white rounded"
          onClick={() => carouselRef.current?.slideTo(items.length - 1)}
        >
          Go to Last
        </button>
      </div>

      {/* Custom Thumbnails */}
      <div className="custom-thumbnails flex justify-center mt-4 mb-8">
        {thumbItems}
      </div>

      {/* Current Slide Info */}
      <div className="slide-info text-center mb-8">
        <p className="text-lg">
          Current Slide: {activeIndex + 1} / {items.length}
        </p>
      </div>

      {/* Feature Explanation */}
      <div className="feature-explanation mt-8 p-4 bg-gray-100 rounded">
        <h2 className="text-xl font-bold mb-2">Implemented Features:</h2>
        <ul className="list-disc ml-6">
          <li>Responsive design with different items per breakpoint</li>
          <li>Custom navigation buttons</li>
          <li>Autoplay with play/pause controls</li>
          <li>Mouse and touch dragging enabled</li>
          <li>Custom thumbnail navigation</li>
          <li>Slide change event handlers</li>
          <li>Animation timing controls</li>
          <li>Infinite looping</li>
          <li>Programmatic slide navigation</li>
        </ul>
      </div>
    </div>
  );
}
