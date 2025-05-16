export default function Process() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-xl uppercase tracking-widest mb-6 text-center">Process & Development</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1,2,3,4,5,6,7,8].map((n) => (
          <div key={n} className="relative group h-48 bg-gray-100 rounded-lg overflow-hidden">
            <img src={`/process${n}.jpg`} alt="Process" className="w-full h-full object-cover transform group-hover:scale-105 transition" />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white text-xs p-2">
              Sketch to Render
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 