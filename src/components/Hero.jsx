import React from "react";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import Link from "next/link";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";
import Socials from "./Socials";
import DevImg from "./ui/DevImg";
import Badge from "./badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Full Stack Developer
            </div>
            <h1 className="h1 mb-4">Hello, my name is Sheharyar Khalid</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
              rerum est vitae tenetur dolor aspernatur illum. Nobis, eum.
              Numquam officiis ullam libero labore.
            </p>
            {/* buttons */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact Me <Send size={18} />
                </Button>
              </Link>
              <Button className="gap-x-2" variant="secondary">
                Download Resume <Download size={18} />
              </Button>
            </div>

            {/* socilas  */}

            <Socials
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>
          <div className="hidden xl:flex relative">
            <Badge
              containerStyles="absolute top-[24%] -left-[5rem]"
              icon={<RiBriefcase4Fill />}
              endCountNum={3}
              badgeText="Years of hands on Industrial Experience"
            />

            <Badge
              containerStyles="absolute top-[80%] -left-[1rem]"
              icon={<RiTodoFill />}
              endCountNum={10}
              endCountText={"+"}
              badgeText="Projects Delivered Successfully "
            />
            <Badge
              containerStyles="absolute top-[55%] -right-[1rem]"
              icon={<RiTeamFill />}
              endCountNum={10}
              endCountText={"+"}
              badgeText="Happy Clients"
            />
            <div className="bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2"></div>
            <DevImg
              containerStyles={`bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom`}
              // imgSrc="/hero/developer.png"
              imgSrc="/dp1.png"
            />
          </div>
        </div>

        {/* icon  */}

        <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
          <RiArrowDownSLine className="text-3xl text-primary" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
