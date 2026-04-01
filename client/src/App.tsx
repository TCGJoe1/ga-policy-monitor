import { Switch, Route, Router } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { Toaster } from "@/components/ui/toaster";
import Dashboard from "./pages/Dashboard";
import PolicyDetail from "./pages/PolicyDetail";
import Opportunities from "./pages/Opportunities";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <>
      <Router hook={useHashLocation}>
        <Switch>
          <Route path="/" component={Dashboard} />
          <Route path="/policy/:id" component={PolicyDetail} />
          <Route path="/opportunities" component={Opportunities} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Toaster />
    </>
  );
}
