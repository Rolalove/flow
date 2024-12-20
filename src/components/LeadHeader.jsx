export default function LeadHeader() {
    return (
      <section className="bg-white mb-4 py-2 rounded-lg px-4">
        <nav className="flex flex-col sm:flex-row gap-4 sm:justify-between sm:items-center">
          <button className="text-left">My Open lead</button>
          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex flex-wrap gap-2 text-sm">
              <p className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Show chart</p>
              <p className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Focused View</p>
              <p className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">New</p>
              <p className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Refresh</p>
              <p className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Collaborate</p>
              <p className="px-2 py-1 hover:bg-gray-100 rounded cursor-pointer">Delete</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="border px-3 py-1 rounded hover:bg-gray-50">Smart data</button>
              <button className="border px-3 py-1 rounded hover:bg-gray-50">Edit Filters</button>
              <button className="border px-3 py-1 rounded hover:bg-gray-50">Edit columns</button>
            </div>
          </div>
        </nav>
      </section>
    );
  }