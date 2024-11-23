import React, { useState, useRef, useEffect } from "react";
import "../../../style.css";

const ComicReader = ({ pages }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const comicContainerRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);
    const touchStartY = useRef(0);
    const touchEndY = useRef(0);
  
    const goToNextPage = () => {
      if (currentPage < pages.length) {
        setCurrentPage((prev) => prev + 1);
      }
    };
  
    const goToPreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prev) => prev - 1);
      }
    };
  const toggleFullScreen = () => {
    const element = comicContainerRef.current;
    if (!isFullScreen) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen(); // For Firefox
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(); // For Chrome, Safari, Opera
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen(); // For IE/Edge
      }
      setIsFullScreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen(); // For Firefox
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // For Chrome, Safari, Opera
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // For IE/Edge
      }
      setIsFullScreen(false);
    }
  };

  // Handle touch events
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;  // Track starting Y-coordinate
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;  // Track moving Y-coordinate
  };

  const handleTouchEnd = () => {
    const swipeDistanceX = touchStartX.current - touchEndX.current;
    const swipeDistanceY = touchStartY.current - touchEndY.current;

    // Only allow swipe if the horizontal movement is greater than the vertical movement
    if (Math.abs(swipeDistanceX) > Math.abs(swipeDistanceY)) {
      if (swipeDistanceX > 50) {
        // Swipe left: Next page
        goToNextPage();
      } else if (swipeDistanceX < -50) {
        // Swipe right: Previous page
        goToPreviousPage();
      }
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        goToNextPage();
      } else if (e.key === "ArrowLeft") {
        goToPreviousPage();
      }
    };

    // Add keydown listener
    window.addEventListener("keydown", handleKeyDown);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div className="comic-reader">
      <div
        className="comic-container"
        ref={comicContainerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{
          overflow: isFullScreen ? "hidden" : "visible",
          touchAction: "none", // Disable default browser gestures
        }}
      >
        {/* Page Number Indicator */}
        {isFullScreen && (
          <div
            className="page-number-indicator"
            style={{
              position: "absolute",
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "#fff",
              fontSize: "20px",
              zIndex: 10, // Ensure it stays on top of the comic
              padding: "5px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              borderRadius: "5px",
            }}
          >
            Page {currentPage} of {pages.length}
          </div>
        )}
        {/* Display the current page */}
        <img
          src={pages[currentPage - 1]}
          alt={`Comic Page ${currentPage}`}
          onClick={toggleFullScreen}
          style={{ cursor: "pointer", width: "100%", maxHeight: "100vh", loading:"lazy" }}
        />
  <div className="preview-tooltip">Preview Only</div>
      </div>

      <div className="navigation">
        <button onClick={goToPreviousPage} disabled={currentPage === 1} style={{ fontSize: "30px", background: "none", border: "none", cursor: "pointer" }}>
          &#8592;
        </button>
        <span>
          Page {currentPage} of {pages.length}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === pages.length} style={{ fontSize: "30px", background: "none", border: "none", cursor: "pointer" }}>
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default ComicReader;
