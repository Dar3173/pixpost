import Navbar from '../components/navbar'
import Hero from '../components/hero'
import CategorySidebar from '../components/categorySidebar'
import Templates from '../components/templates'


function Index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <main className="flex flex-col md:flex-row gap-8 px-8 py-12">
        <div className="flex-1">
          <Templates />
        </div>
        <div className="w-full md:w-64">
          <CategorySidebar />
        </div>
      </main>
    </div>
  );
}

export default  Index;