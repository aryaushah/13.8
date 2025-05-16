export default function Inspiration() {
  return (
    <section className="py-20 px-8 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 pr-6">
        <img src="/inspiration.jpg" alt="Inspiration" className="w-full rounded-lg" />
      </div>
      <div className="md:w-1/2 pl-6">
        <h2 className="text-xl uppercase tracking-widest mb-4">Concept & Inspiration</h2>
        <p className="text-gray-600">
          A space-age sustainability thesis blending cockpit aesthetics with heat-regulating materials.
        </p>
      </div>
    </section>
  );
} 