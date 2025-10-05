import { useState, useEffect } from "react";

interface LoadingShimmerProps {
  children: React.ReactNode;
}

export const LoadingShimmer = ({ children }: LoadingShimmerProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-[#FCE5AF] animate-pulse h-16 w-full"></div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <div className="bg-[#F5DB9F] animate-pulse h-8 w-64 mx-auto rounded mb-4"></div>
            <div className="bg-[#F5DB9F] animate-pulse h-4 w-96 mx-auto rounded"></div>
          </div>
          <div className="space-y-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-[#FCE5AF] rounded-lg p-6">
                <div className="bg-[#053020] animate-pulse h-6 w-48 rounded mb-4"></div>
                <div className="space-y-3">
                  <div className="bg-[#F5DB9F] animate-pulse h-4 w-full rounded"></div>
                  <div className="bg-[#F5DB9F] animate-pulse h-4 w-3/4 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 bg-[#FCE5AF] animate-pulse h-32 w-full"></div>
      </div>
    );
  }

  return <>{children}</>;
};
