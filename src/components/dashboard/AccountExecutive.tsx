import React from 'react';

const AccountExecutive = () => {
  return (
    <div className="bg-[#2A3447] text-white p-6 rounded-lg shadow-sm h-full flex flex-col">
      <h2 className="text-lg font-bold mb-4">Your Account Executive</h2>
      
      <div className="mb-6 flex-1">
        <h3 className="font-bold text-base mb-1">Sarah Mitchell</h3>
        <p className="text-sm text-slate-300 mb-4">WatchGuard Partner Success</p>
        
        <div className="space-y-2 text-sm text-slate-300">
          <p>Email: <a href="mailto:sarah.mitchell@watchguard.com" className="hover:text-white">sarah.mitchell@watchguard.com</a></p>
          <p>Phone: <a href="tel:+12066130895" className="hover:text-white">+1 (206) 613-0895</a></p>
        </div>
      </div>
      
      <button className="w-full bg-[#E51E25] hover:bg-[#C91A20] text-white font-bold py-3 px-4 rounded transition-colors text-sm">
        Contact Me
      </button>
    </div>
  );
};

export default AccountExecutive;
