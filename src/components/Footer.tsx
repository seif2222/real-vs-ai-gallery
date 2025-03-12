
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card mt-auto">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-lg font-bold mb-4">AI Detector</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Our mission is to provide accessible tools for identifying AI-generated 
              images and raising awareness about digital media authenticity.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-muted-foreground hover:text-accent">
                  Education
                </Link>
              </li>
              <li>
                <Link to="/leaderboard" className="text-muted-foreground hover:text-accent">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-muted-foreground hover:text-accent">
                  Team
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-accent">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} AI Detector. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-accent">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
