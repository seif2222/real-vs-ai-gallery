
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeaderboardItem, { LeaderboardEntry } from "@/components/LeaderboardItem";

export default function Leaderboard() {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating API call to fetch leaderboard data
    const fetchLeaderboard = async () => {
      setIsLoading(true);
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate mock data
      const mockData: LeaderboardEntry[] = Array.from({ length: 10 }).map((_, i) => {
        const score = Math.random() * 100;
        let verdict: "AI" | "Real" | "Uncertain";
        
        if (score > 70) verdict = "AI";
        else if (score < 30) verdict = "Real";
        else verdict = "Uncertain";
        
        return {
          id: `entry-${i + 1}`,
          fileName: `image_${i + 1}.jpg`,
          score,
          timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000).toISOString(),
          verdict
        };
      });
      
      // Sort by newest first
      mockData.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      
      setEntries(mockData);
      setIsLoading(false);
    };
    
    fetchLeaderboard();
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h1 className="heading-1 mb-6">Leaderboard</h1>
              <p className="text-xl text-muted-foreground">
                Recent image analysis results from our community
              </p>
            </div>
            
            <div className="bg-card rounded-xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-border">
                <h2 className="heading-4">Recent Submissions</h2>
              </div>
              
              {isLoading ? (
                <div className="p-8">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="animate-pulse p-4 border-b border-border last:border-0">
                      <div className="flex items-center space-x-4">
                        <div className="h-8 w-8 bg-secondary rounded-full"></div>
                        <div className="flex-1">
                          <div className="h-4 bg-secondary rounded w-3/4 mb-2"></div>
                          <div className="h-3 bg-secondary rounded w-1/2"></div>
                        </div>
                        <div className="w-20 h-6 bg-secondary rounded"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {entries.map((entry, index) => (
                    <LeaderboardItem key={entry.id} entry={entry} index={index} />
                  ))}
                </div>
              )}
            </div>
            
            <div className="mt-16 bg-card rounded-xl p-8 shadow-sm">
              <h2 className="heading-3 mb-6">Leaderboard Statistics</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">
                    {entries.length}
                  </div>
                  <div className="text-muted-foreground">Total Analyses</div>
                </div>
                
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">
                    {entries.filter(e => e.verdict === "AI").length}
                  </div>
                  <div className="text-muted-foreground">AI Detected</div>
                </div>
                
                <div className="bg-background rounded-lg p-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">
                    {entries.filter(e => e.verdict === "Real").length}
                  </div>
                  <div className="text-muted-foreground">Real Images</div>
                </div>
              </div>
            </div>
            
            <div className="mt-16 text-center">
              <p className="text-muted-foreground mb-6">
                Don't see your submission? It might be processing or was submitted more than 7 days ago.
              </p>
              <a href="/" className="button-primary">
                Submit New Image
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
