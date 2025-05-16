export default function Gallery() {
  return (
    <section className="py-20 px-4 overflow-x-auto">
      <div className="flex space-x-4">
        {['heat.jpg','rain.jpg','cold.jpg'].map((img, i) => (
          <div key={i} className="relative min-w-[80vw] md:min-w-[30vw] group">
            <img src={`/${img}`} alt="Look" className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition" />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition">
              <span className="bg-white px-2 py-1 text-xs">Material: Gore-Tex Paclite</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 