import Hero from "@/components/pages/Hero";
import About from "@/components/pages/About";
import Booking from "@/components/pages/Booking";
import Services from "@/components/pages/Services";
import Testimonials from "@/components/pages/Testimonials";
import ConnectSupabaseSteps from "@/components/tutorial/connect-supabase-steps";
import SignUpUserSteps from "@/components/tutorial/sign-up-user-steps";
import Footer from "@/components/pages/Footer";

import { hasEnvVars } from "@/utils/supabase/check-env-vars";


export default async function Home() {
  return (
    <>
      {/* <main className="flex-1 flex flex-col gap-6 px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        {hasEnvVars ? <SignUpUserSteps /> : <ConnectSupabaseSteps />}
      </main> */}
      <Hero />
      <About />
      <Services />
      <Booking />
      <Testimonials />
      <Footer />

    </>
  );
}
