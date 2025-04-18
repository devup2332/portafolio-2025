import ApolloIcon from "@/components/Icons/ApolloIcon";
import AstroIcon from "@/components/Icons/AstroIcon";
import AwsIcon from "@/components/Icons/AwsIcon";
import ExpressIcon from "@/components/Icons/ExpressIcon";
import FigmaIcon from "@/components/Icons/FigmaIcon";
import GithubIcon from "@/components/Icons/GithubIcon";
import GraphqlIcon from "@/components/Icons/GraphqlIcon";
import MaterialUIIcon from "@/components/Icons/MaterialUIIcon";
import NestJsIcon from "@/components/Icons/NestJsIcon";
import NextIcon from "@/components/Icons/NextIcon";
import NodejsIcon from "@/components/Icons/NodejsIcon";
import PostgresIcon from "@/components/Icons/PostgresIcon";
import PrismaIcon from "@/components/Icons/PrismaIcon";
import ReactIcon from "@/components/Icons/ReactIcon";
import StorybookIcon from "@/components/Icons/StorybookIcon";
import TailwindCssIcon from "@/components/Icons/TailwindCssIcon";
import TypescriptIcon from "@/components/Icons/TypescriptIcon";
import { Icon } from "@/types/svg";

export const ICONS = {
  Astro: AstroIcon,
  Apollo: ApolloIcon,
  Aws: AwsIcon,
  Express: ExpressIcon,
  Figma: FigmaIcon,
  Github: GithubIcon,
  NestJs: NestJsIcon,
  NodeJs: NodejsIcon,
  NextJs: NextIcon,
  MaterialUI: MaterialUIIcon,
  Postgres: PostgresIcon,
  Prisma: PrismaIcon,
  React: ReactIcon,
  Storybook: StorybookIcon,
  Tailwind: TailwindCssIcon,
  Typescript: TypescriptIcon,
  GraphQL: GraphqlIcon,
};

type Item = {
  label: keyof typeof ICONS;
  icon: React.FC<Icon>;
};

export type Technology = keyof typeof ICONS;

export const technologies: Item[] = [
  {
    label: "React",
    icon: ICONS.React,
  },
  {
    label: "Typescript",
    icon: ICONS.Typescript,
  },
  {
    label: "NodeJs",
    icon: ICONS.NodeJs,
  },
  {
    label: "Express",
    icon: ICONS.Express,
  },
  {
    label: "Postgres",
    icon: ICONS.Postgres,
  },
  {
    label: "Aws",
    icon: ICONS.Aws,
  },
  {
    label: "Prisma",
    icon: ICONS.Prisma,
  },
  {
    label: "Tailwind",
    icon: ICONS.Tailwind,
  },
  {
    label: "Storybook",
    icon: ICONS.Storybook,
  },
  {
    label: "NestJs",
    icon: ICONS.NestJs,
  },
  {
    label: "GraphQL",
    icon: ICONS.GraphQL,
  },
  {
    label: "MaterialUI",
    icon: ICONS.MaterialUI,
  },
];
