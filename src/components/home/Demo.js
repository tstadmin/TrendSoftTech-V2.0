import { Link } from "gatsby"
import React, { useRef, useState } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
import { RxDotFilled } from "react-icons/rx"

function App(props) {
  console.log(props.data.carousel.list?.listItem)
  const ref = useRef(null)
  const slides = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    ref.current.focus()
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    ref.current.focus()
    setCurrentIndex(newIndex)
  }

  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div
      className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group"
      aria-roledescription="carousel"
      id="myCarousel"
    >
      {/* Left Arrow */}
      <button
        className="  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
        onClick={prevSlide}
        aria-controls="myCarousel-items"
        aria-label="Previous Slide"
        ref={ref}
        tabIndex={0}
      >
        <BsChevronCompactLeft size={30} />
      </button>

      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        aria-label="Highlighted television shows"
        id="myCarousel-items"
        aria-live="polite"
      >
        <div
          className=" grid justify-items-center justify-center"
          role="group"
          aria-label=" 1 of 9 "
          aria-roledescription="slide"
        >
          <p>{slides[currentIndex].id}</p>
          <Link
            to=""
            className="text-center text-red-600"
            ref={ref}
            tabIndex={0}
          >
            Grenent
          </Link>
        </div>
      </div>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        aria-controls="myCarousel-items"
        aria-label="Next Slide"
        className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
      >
        <BsChevronCompactRight size={30} />
      </button>
      {/* <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled />
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default App
