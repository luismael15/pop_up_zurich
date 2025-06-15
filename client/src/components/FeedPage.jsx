export default function FeedPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] p-6 text-[#2D2D2D]">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Explore Pop-Up Restaurants</h2>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-[#E63946] text-white rounded-xl">Open Now</button>
          <button className="px-4 py-2 bg-white border border-[#E63946] text-[#E63946] rounded-xl">Coming Soon</button>
        </div>
      </header>
      <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <input type="text" placeholder="Filter by food type" className="border p-2 rounded-xl" />
        <input type="text" placeholder="Max price" className="border p-2 rounded-xl" />
        <input type="text" placeholder="Postal code" className="border p-2 rounded-xl" />
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-4 space-y-3">
            <img src="https://via.placeholder.com/300x150" alt="Restaurant" className="rounded-xl w-full" />
            <h3 className="text-xl font-semibold">Taco Vibes</h3>
            <p className="text-sm text-gray-500">Mexican | Open: Jun 15 - Jul 10</p>
            <p className="text-sm text-gray-500">Avg. Price: CHF 20</p>
            <a href="https://maps.google.com" target="_blank" className="text-sm text-[#E63946] font-medium">View on Map</a>
          </div>
        ))}
      </div>
    </div>
  );
}
