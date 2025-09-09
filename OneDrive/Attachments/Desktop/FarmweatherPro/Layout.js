import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  CloudSun, 
  MapPin, 
  AlertTriangle, 
  BarChart3,
  Menu,
  X
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    {
      title: "Weather",
      url: createPageUrl("Dashboard"),
      icon: CloudSun,
      active: currentPageName === "Dashboard"
    },
    {
      title: "Locations", 
      url: createPageUrl("Locations"),
      icon: MapPin,
      active: currentPageName === "Locations"
    },
    {
      title: "Alerts",
      url: createPageUrl("Alerts"), 
      icon: AlertTriangle,
      active: currentPageName === "Alerts"
    },
    {
      title: "Analytics",
      url: createPageUrl("Analytics"),
      icon: BarChart3,
      active: currentPageName === "Analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <CloudSun className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">FarmWeather</h1>
                <p className="text-xs text-gray-500">Agricultural Weather Intelligence</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navigationItems.map((item) => (
                <Link key={item.title} to={item.url}>
                  <Button
                    variant={item.active ? "default" : "ghost"}
                    className={`flex items-center gap-2 ${
                      item.active 
                        ? "bg-green-600 hover:bg-green-700 text-white shadow-lg" 
                        : "text-gray-600 hover:text-gray-900 hover:bg-green-50"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-green-100">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <Link key={item.title} to={item.url}>
                  <Button
                    variant={item.active ? "default" : "ghost"}
                    className={`w-full justify-start gap-3 ${
                      item.active 
                        ? "bg-green-600 hover:bg-green-700 text-white" 
                        : "text-gray-600 hover:text-gray-900 hover:bg-green-50"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.title}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white/60 backdrop-blur-md border-t border-green-100 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p className="text-sm">
              © 2024 FarmWeather. Empowering farmers with precision weather intelligence.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}