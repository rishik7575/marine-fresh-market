import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const Beekeeping = () => {
  const beekeepingTips = [
    {
      id: 'start-small',
      title: 'Start Small and Expand Gradually',
      description: 'Begin with one or two hives to learn the basics before expanding your apiary.',
      icon: '🐝'
    },
    {
      id: 'right-location',
      title: 'Choose the Right Location',
      description: 'Place hives in a spot with morning sun, afternoon shade, and protection from strong winds.',
      icon: '🌤️'
    },
    {
      id: 'regular-inspection',
      title: 'Inspect Regularly',
      description: 'Check your hives every 7-10 days during the active season to monitor health and prevent swarming.',
      icon: '🔍'
    },
    {
      id: 'pest-management',
      title: 'Practice Integrated Pest Management',
      description: 'Use a combination of methods to control pests and diseases while minimizing chemical use.',
      icon: '🛡️'
    },
    {
      id: 'honey-harvest',
      title: 'Harvest Honey at the Right Time',
      description: 'Wait until frames are at least 80% capped before harvesting to ensure the honey is properly cured.',
      icon: '🍯'
    },
    {
      id: 'winter-prep',
      title: 'Prepare for Winter',
      description: 'Ensure colonies have adequate honey stores and proper ventilation to survive the cold months.',
      icon: '❄️'
    }
  ];

  const courses = [
    {
      id: 'beginner-beekeeping',
      title: 'Beginner Beekeeping',
      description: 'Learn the fundamentals of beekeeping, from hive setup to your first honey harvest.',
      duration: '6 weeks',
      level: 'Beginner',
      image: 'https://images.unsplash.com/photo-1571906748053-2b3ae37cc3fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'advanced-queen-rearing',
      title: 'Advanced Queen Rearing',
      description: 'Master the techniques for raising healthy, productive queen bees for your apiary.',
      duration: '4 weeks',
      level: 'Advanced',
      image: 'https://images.unsplash.com/photo-1569289522127-c0452f372d46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'organic-beekeeping',
      title: 'Organic Beekeeping Practices',
      description: 'Learn chemical-free methods for maintaining healthy, thriving bee colonies.',
      duration: '5 weeks',
      level: 'Intermediate',
      image: 'https://images.unsplash.com/photo-1508972033349-94835a09c65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1584633155097-19e7753dba76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Beekeeper with honeycomb" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-xl text-white">
            <h1 className="text-3xl md:text-5xl font-semibold mb-4">
              The Art of Beekeeping
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-6">
              Discover the rewarding world of beekeeping and learn how to maintain healthy, productive colonies.
            </p>
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
      
      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-amber-800">Why Keep Bees?</h2>
            <p className="text-lg text-gray-700 mb-6">
              Beekeeping is not just a hobby; it's a way to connect with nature, contribute to environmental sustainability, and potentially harvest natural products like honey, beeswax, and propolis.
            </p>
            <p className="text-lg text-gray-700">
              Whether you're interested in beekeeping for pollination, honey production, or conservation, our resources will help you get started and succeed in this rewarding practice.
            </p>
          </div>
        </div>
      </section>
      
      {/* Beekeeping Tips */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-amber-800">Essential Beekeeping Tips</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beekeepingTips.map(tip => (
              <div key={tip.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-amber-800">{tip.title}</h3>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-amber-800">Beekeeping Courses</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map(course => (
              <div key={course.id} className="overflow-hidden rounded-xl bg-white shadow-md group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-amber-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    {course.level}
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-amber-600 mb-2">{course.duration}</div>
                  <h3 className="text-xl font-medium mb-3">{course.title}</h3>
                  <p className="text-gray-700 mb-4">{course.description}</p>
                  
                  <button className="w-full bg-amber-700 hover:bg-amber-600 text-white py-2 rounded-lg transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-12 text-center text-amber-800">Frequently Asked Questions</h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-amber-800">How much time does beekeeping require?</h3>
              <p className="text-gray-700">
                A typical hobbyist beekeeper with 1-2 hives might spend 15-30 minutes per hive every 7-10 days during the active season. Additional time is needed for honey extraction and seasonal activities like winter preparation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-amber-800">How much does it cost to start beekeeping?</h3>
              <p className="text-gray-700">
                Initial setup costs for one hive, including bees, basic equipment, and protective gear, typically range from $300-$500. Ongoing costs are much lower, primarily for maintenance and optional additions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-amber-800">When is the best time to start beekeeping?</h3>
              <p className="text-gray-700">
                Spring is the ideal time to start beekeeping, as bees are naturally building up their colony and resources are becoming abundant. This gives new colonies the maximum time to establish before winter.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-3 text-amber-800">Do I need a permit to keep bees?</h3>
              <p className="text-gray-700">
                Regulations vary widely by location. Many urban areas allow beekeeping but may have restrictions on hive numbers or placement. Check with your local agriculture department or beekeeping association for specific requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold mb-6">Ready to Start Your Beekeeping Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join our community of beekeepers and get access to expert guidance, equipment recommendations, and ongoing support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-800 hover:bg-amber-100 px-6 py-3 rounded-lg font-medium transition-colors">
              Join Our Community
            </button>
            <button className="bg-transparent border border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition-colors">
              Browse Equipment
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Beekeeping;
