import Background from "../../Assets/Images/typescript-cover-image.jpg";
import Subset from "../../Assets/Images/Js-subset.png";
import Transformation from "../../Assets/Images/Js-ts-transformation.png";
import Code from "../UI/Code";
import ColorBackground from "../UI/ColorBackground";
import Headings from "./Headings";

const Data = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="h-auto w-full">
        <img
          src={Background}
          className="w-full object-cover h-[600px]"
          alt="mainBackgroud"
        />
      </div>
      <div className="text-xl py-1 w-full md:w-[80%] bg-white flex justify-center items-center flex-col">
        <Headings heading="Getting Started With Typescript" />
        <div className="w-[80%]">
          <p>
            TypeScript is a Superset of JavaScript TC39, the committee that
            regulates the development of JavaScript, has introduced new features
            to the language with each release version. Recently added features
            such as classes and block-scoped variables make standard JavaScript
            more robust. However, the language can be further enhanced and
            hardened to handle highly complex architectural demands in a
            reliable and predictable way. TC39 oftentimes has features in its
            pipeline that would help achieve that architectural goal but it
            takes time for them to become part of the standard language and to
            be supported by all major browsers.
          </p>
          <br />
          <br />
          <p>
            <img
              src={Subset}
              className="h-[280px] md:h-[200px] inline float-none md:float-right ml-5"
              alt="subset"
            />
            As each new version of JavaScript extends the previous one, we could
            think of “Future JavaScript” as a superset of the current standard
            one. With that model in mind, TypeScript was created to act as that
            superset of JavaScript that puts the future of the language in the
            hands of today’s developers. Moreover, TypeScript integrates
            features outside of the scope of TC39, such as type-checking,
            generics and interfaces, that mitigate many points of failure
            present in JavaScript and rev up development - all provided through
            abstractions written in JavaScript. All that TypeScript gives you is
            convenient syntactic sugar that eventually gets all converted to
            cross-platform JavaScript.
          </p>
          <br />
          <br />
          <p>
            Let’s explore in detail the architecture and components of
            TypeScript to understand its benefits deeply.
          </p>
          <Headings heading="Your JavaScript is TypeScript" />
          <p>
            <img
              src={Transformation}
              className="h-[180px] inline float-left mr-4 "
              alt="jsTsTransformation"
            />
            TypeScript provides compile time type safety for your JavaScript
            code. This is no surprise given its name. The great thing is that
            the types are completely optional. Your JavaScript code .js file can
            be renamed to a .ts file and TypeScript will still give you back
            valid .js equivalent to the original JavaScript file. TypeScript is
            intentionally and strictly a superset of JavaScript with optional
            Type checking.
          </p>
          <Headings
            heading="
          More Powerful JavaScript Object Oriented Programming"
          />
          <p>
            The syntactic sugar provided by TypeScript will allow us to reduce
            the footprint of our code significantly while increasing its
            expressiveness. TypeScript makes writing class object-oriented code
            a breeze. It provides us with classes, interfaces and modules that
            allow us to properly structure our code in encapsulated reusable
            structures that makes it easy to maintain and scale. Within classes,
            we are also able to specify the visibility level of class properties
            and methods by using TypeScript provided modifiers -
            <ColorBackground label="public" />,
            <ColorBackground label="private" /> and
            <ColorBackground label="protected" />. There are many other
            abstractions that will make us happy and productive developers!
          </p>
          <Headings heading="Setting Up Typescript" />
          <p className="text-2xl py-1 font-semibold">How to install</p>
          <p className="py-5">
            The easiest way to get TypeScript up and running is by installing
            its standalone compiler (tsc) globally via a Node.js package manager
            such as npm or yarn.
          </p>
          <Code code="npm install -g typescript" />
          <p className="p-7">OR</p>
          <Code code="yarn global add typescript" />
          <p className="py-5">
            Once this global installation of the TypeScript compiler is
            complete, we have access to the tsc command from our terminal that
            allow us to compile .ts files into .js ones. We can verify the
            success of our compiler installation by running the following
            command to check its version:
          </p>
          <Code code="tsc -v" />
          <p className="py-5">
            The TypeScript compiler comes with many options that we’ll be
            exploring as we move forward.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Data;
