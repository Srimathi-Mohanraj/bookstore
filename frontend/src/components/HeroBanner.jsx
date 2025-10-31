// HeroBanner.jsx (background-image approach)
export default function HeroBanner() {
  return (
    <section>
      {/* If your header is fixed, add pt to body/main or this wrapper. 
          Example below assumes header height = 64px -> add pt-16 */}
      <div className=""> 
        <div
          className="w-screen h-[52vh] md:h-[60vh] lg:h-[70vh] bg-cover bg-center"
          style={{
            backgroundImage: `url('/assets/banner.jpg')`
            // if you want the right-side preserved: backgroundPosition: 'center right'
          }}
        >
          {/* optional overlay + CTA */}
          <div className="max-w-6xl mx-auto h-full flex items-center">
            <div className="px-6 md:px-12 lg:px-16">
              {/* left-side text or empty if you want only image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
