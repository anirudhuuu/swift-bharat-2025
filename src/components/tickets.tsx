const Tickets = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 py-16 sm:py-24">
      <h2 className="font-bold text-3xl sm:text-5xl text-center mb-4">
        Get Your Tickets
      </h2>
      <h4 className="w-sm text-center font-light text-black/80">
        Secure your spot at Swift Conference India 2025. Early bird registration
        ends July 31, 2025.
      </h4>
      <div className="w-full">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
          <div className="bg-[#FCE5AF] max-h-fit rounded-xl p-6 text-left">
            <h3 className="text-sm font-medium mb-2">Standard Pass</h3>
            <p className="text-2xl font-bold mb-8">₹ 9,999</p>
            <ul className="text-left font-light gap-2 mb-6 flex flex-col">
              <li>✓ All keynote sessions</li>
              <li>✓ Access to expo</li>
              <li>✓ Conference materials</li>
              <li>✓ Lunch and refreshments</li>
            </ul>
            <button className="bg-[#053020] text-white w-full cursor-pointer font-normal px-6 py-2 rounded-lg hover:bg-[#065c38] transition-colors">
              Buy Now
            </button>
          </div>

          <div className="bg-[#053020] text-[#F5DB9F] rounded-xl p-6 text-left">
            <h3 className="text-sm font-medium mb-2">Most Popular</h3>
            <p className="text-2xl font-bold mb-8">₹ 14,999</p>
            <ul className="text-left font-light gap-2 mb-6 flex flex-col">
              <li>✓ All Standard Pass benefits</li>
              <li>✓ Workshop access</li>
              <li>✓ Networking dinner</li>
              <li>✓ Conference recordings</li>
              <br />
            </ul>
            <button className="bg-[#F5DB9F] text-[#053020] w-full cursor-pointer font-normal px-6 py-2 rounded-lg hover:bg-[#FCE5AF] transition-colors">
              Buy Now
            </button>
          </div>

          <div className="bg-[#FCE5AF] max-h-fit rounded-xl p-6 text-left">
            <h3 className="text-sm font-medium mb-2">VIP Pass</h3>
            <p className="text-2xl font-bold mb-8">₹ 24,999</p>
            <ul className="text-left font-light gap-2 mb-6 flex flex-col">
              <li>✓ All Premium Pass benefits</li>
              <li>✓ Exclusive VIP loungue</li>
              <li>✓ Speaker dinner access</li>
              <li>✓ 1-year SwiftIndia membership</li>
            </ul>
            <button className="bg-[#053020] text-white w-full cursor-pointer font-normal px-6 py-2 rounded-lg hover:bg-[#065c38] transition-colors">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
